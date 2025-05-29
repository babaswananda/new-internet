#!/usr/bin/env python3
"""
Unified AI Voice Agent API
FastAPI backend for AI voice agent with context-aware responses
"""

from fastapi import FastAPI, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
import chromadb
import json
import asyncio
import logging
from pathlib import Path
import requests
import io
import base64

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Unified AI Voice Agent API",
    description="Context-aware AI voice agent for Unified AI Protocol",
    version="1.0.0"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://unified-ai-protocol.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ChatMessage(BaseModel):
    message: str
    context: Optional[str] = None
    voice_enabled: bool = False

class ChatResponse(BaseModel):
    response: str
    sources: List[Dict[str, Any]]
    confidence: float
    voice_url: Optional[str] = None

class VoiceRequest(BaseModel):
    text: str
    voice_id: str = "default"

# Global variables
chroma_client = None
knowledge_collection = None

@app.on_event("startup")
async def startup_event():
    """Initialize the knowledge base and AI models"""
    global chroma_client, knowledge_collection

    logger.info("🚀 Starting Unified AI Voice Agent API...")

    try:
        # Initialize ChromaDB
        chroma_client = chromadb.PersistentClient(path="knowledge-base/vector-db")
        knowledge_collection = chroma_client.get_collection("unified_ai_knowledge")
        logger.info("✅ Knowledge base loaded successfully")

    except Exception as e:
        logger.error(f"❌ Failed to initialize knowledge base: {e}")
        # Create empty collection if none exists
        try:
            knowledge_collection = chroma_client.create_collection("unified_ai_knowledge")
            logger.info("📝 Created empty knowledge collection")
        except:
            logger.error("❌ Failed to create knowledge collection")

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "Unified AI Voice Agent API",
        "version": "1.0.0",
        "knowledge_base_count": knowledge_collection.count() if knowledge_collection else 0
    }

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatMessage):
    """Process chat message and return context-aware response"""
    try:
        logger.info(f"💬 Processing chat message: {request.message[:50]}...")

        # Search knowledge base
        search_results = search_knowledge_base(request.message)

        # Generate response
        response_text = generate_response(request.message, search_results)

        # Generate voice if requested
        voice_url = None
        if request.voice_enabled:
            voice_url = await generate_voice(response_text)

        return ChatResponse(
            response=response_text,
            sources=search_results,
            confidence=calculate_confidence(search_results),
            voice_url=voice_url
        )

    except Exception as e:
        logger.error(f"❌ Chat error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/voice/transcribe")
async def transcribe_voice(audio: UploadFile = File(...)):
    """Transcribe voice input to text using Whisper"""
    try:
        logger.info("🎤 Transcribing voice input...")

        # Read audio file
        audio_data = await audio.read()

        # Use OpenAI Whisper API (free tier)
        transcription = await transcribe_with_whisper(audio_data)

        return {"transcription": transcription}

    except Exception as e:
        logger.error(f"❌ Transcription error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/voice/synthesize")
async def synthesize_voice(request: VoiceRequest):
    """Synthesize text to speech"""
    try:
        logger.info(f"🔊 Synthesizing voice for: {request.text[:50]}...")

        # Generate voice using browser Speech API or ElevenLabs
        voice_url = await generate_voice(request.text, request.voice_id)

        return {"voice_url": voice_url}

    except Exception as e:
        logger.error(f"❌ Voice synthesis error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/knowledge/search")
async def search_knowledge(query: str, limit: int = 5):
    """Search the knowledge base"""
    try:
        results = search_knowledge_base(query, limit)
        return {"results": results}

    except Exception as e:
        logger.error(f"❌ Knowledge search error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/knowledge/stats")
async def knowledge_stats():
    """Get knowledge base statistics"""
    try:
        if not knowledge_collection:
            return {"error": "Knowledge base not initialized"}

        count = knowledge_collection.count()

        # Get sample documents by type
        sample_results = knowledge_collection.get(limit=100)

        type_counts = {}
        for metadata in sample_results['metadatas']:
            doc_type = metadata.get('type', 'unknown')
            type_counts[doc_type] = type_counts.get(doc_type, 0) + 1

        return {
            "total_documents": count,
            "document_types": type_counts,
            "status": "ready"
        }

    except Exception as e:
        logger.error(f"❌ Knowledge stats error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

def search_knowledge_base(query: str, limit: int = 5) -> List[Dict[str, Any]]:
    """Search the knowledge base for relevant information"""
    if not knowledge_collection:
        return []

    try:
        results = knowledge_collection.query(
            query_texts=[query],
            n_results=limit
        )

        formatted_results = []
        for i, (doc, metadata, distance) in enumerate(zip(
            results['documents'][0],
            results['metadatas'][0],
            results['distances'][0]
        )):
            formatted_results.append({
                "content": doc,
                "metadata": metadata,
                "relevance_score": 1 - distance,  # Convert distance to relevance
                "rank": i + 1
            })

        return formatted_results

    except Exception as e:
        logger.error(f"❌ Knowledge search error: {e}")
        return []

def generate_response(user_message: str, search_results: List[Dict[str, Any]]) -> str:
    """Generate context-aware response using trained AI model"""

    # Try to use the custom trained model first
    try:
        response = generate_ai_response(user_message, search_results)
        if response:
            return response
    except Exception as e:
        logger.error(f"AI model error: {e}")

    # Fallback to rule-based responses
    return generate_fallback_response(user_message, search_results)

def generate_ai_response(user_message: str, search_results: List[Dict[str, Any]]) -> str:
    """Generate response using the trained Ollama model"""
    try:
        # Prepare context from search results
        context = ""
        if search_results:
            context = "\n".join([
                f"Source: {result['content'][:200]}..."
                for result in search_results[:3]
            ])

        # Create prompt with context
        prompt = f"""Context: {context}

User Question: {user_message}

Please provide a helpful response based on the Unified AI Protocol context above."""

        # Call Ollama API
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "unified-ai-agent",
                "prompt": prompt,
                "stream": False
            },
            timeout=10
        )

        if response.status_code == 200:
            result = response.json()
            return result.get("response", "").strip()

    except Exception as e:
        logger.error(f"Ollama API error: {e}")

    return ""

def generate_fallback_response(user_message: str, search_results: List[Dict[str, Any]]) -> str:
    """Generate fallback response when AI model is unavailable"""

    # If no relevant results, provide default response
    if not search_results or search_results[0]['relevance_score'] < 0.3:
        return get_default_response(user_message)

    # Use the most relevant result to generate response
    top_result = search_results[0]
    content = top_result['content']
    metadata = top_result['metadata']

    # Generate response based on content type
    doc_type = metadata.get('type', 'unknown')

    if doc_type == 'faq':
        return f"Based on our FAQ: {content}"

    elif doc_type == 'product':
        product_name = metadata.get('name', 'our product')
        return f"Regarding {product_name}: {content}"

    elif doc_type == 'protocol':
        protocol_name = metadata.get('name', 'our protocol')
        return f"About {protocol_name}: {content}"

    elif doc_type == 'tokenomics':
        return f"Regarding tokenomics: {content}"

    elif doc_type == 'handle_registry':
        return f"About handle registry: {content}"

    else:
        return f"Here's what I found: {content}"

def get_default_response(user_message: str) -> str:
    """Generate default response when no relevant context is found"""
    message_lower = user_message.lower()

    if any(word in message_lower for word in ['hello', 'hi', 'hey']):
        return "Hello! I'm your Unified AI voice agent. I can help you with questions about our protocol, products, handles, tokenomics, and more. What would you like to know?"

    elif any(word in message_lower for word in ['help', 'support']):
        return "I'm here to help! You can ask me about Unified AI Protocol, our products like IO and AgentOS, handle registry, tokenomics, or visit /support for additional assistance."

    elif any(word in message_lower for word in ['demo', 'meeting']):
        return "I'd be happy to help you schedule a demo! Visit /book-demo to choose from our Protocol Overview, Technical Deep Dive, or Enterprise Integration sessions."

    else:
        return "I'm focused on helping with Unified AI Protocol questions. You can ask me about our products, handles, tokenomics, or technical details. For comprehensive information, visit /faq or /documentation."

def calculate_confidence(search_results: List[Dict[str, Any]]) -> float:
    """Calculate confidence score based on search results"""
    if not search_results:
        return 0.0

    # Use the top result's relevance score
    return min(search_results[0]['relevance_score'], 1.0)

async def transcribe_with_whisper(audio_data: bytes) -> str:
    """Transcribe audio using OpenAI Whisper API"""
    try:
        # For now, return a placeholder
        # In production, integrate with OpenAI Whisper API
        return "Transcription placeholder - integrate with Whisper API"

    except Exception as e:
        logger.error(f"❌ Whisper transcription error: {e}")
        return ""

async def generate_voice(text: str, voice_id: str = "default") -> Optional[str]:
    """Generate voice using TTS service"""
    try:
        # For now, return None to use browser Speech API
        # In production, integrate with ElevenLabs or other TTS service
        return None

    except Exception as e:
        logger.error(f"❌ Voice generation error: {e}")
        return None

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

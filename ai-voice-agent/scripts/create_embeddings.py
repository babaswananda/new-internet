#!/usr/bin/env python3
"""
Vector Embeddings Creation Script
Creates vector embeddings from extracted site content for semantic search
"""

import os
import json
import numpy as np
from pathlib import Path
from typing import List, Dict, Any
import chromadb
from chromadb.config import Settings
from sentence_transformers import SentenceTransformer
import tiktoken

class EmbeddingsCreator:
    def __init__(self):
        self.model = SentenceTransformer('all-MiniLM-L6-v2')  # Free, efficient model
        self.chroma_client = chromadb.PersistentClient(path="knowledge-base/vector-db")
        self.collection = None
        self.tokenizer = tiktoken.get_encoding("cl100k_base")
        
    def create_embeddings(self):
        """Create vector embeddings from extracted content"""
        print("🧠 Creating vector embeddings...")
        
        # Load extracted content
        content_path = Path("knowledge-base/raw-content/site_content.json")
        if not content_path.exists():
            print("❌ No extracted content found. Run extract_site_content.py first.")
            return
        
        with open(content_path, 'r', encoding='utf-8') as f:
            content_data = json.load(f)
        
        # Create or get collection
        self.collection = self.chroma_client.get_or_create_collection(
            name="unified_ai_knowledge",
            metadata={"description": "Unified AI Protocol knowledge base"}
        )
        
        # Process different content types
        self.process_faq_data(content_data.get("faq", []))
        self.process_products(content_data.get("products", []))
        self.process_protocols(content_data.get("protocols", []))
        self.process_tokenomics(content_data.get("tokenomics", {}))
        self.process_handle_registry(content_data.get("handles", {}))
        self.process_pages(content_data.get("pages", []))
        
        print("✅ Vector embeddings created successfully!")
        print(f"📊 Total documents in collection: {self.collection.count()}")
    
    def process_faq_data(self, faq_data: List[Dict]):
        """Process FAQ data into embeddings"""
        print("❓ Processing FAQ data...")
        
        documents = []
        metadatas = []
        ids = []
        
        for category in faq_data:
            category_name = category["category"]
            
            for i, qa in enumerate(category["questions"]):
                # Create document combining question and answer
                doc_text = f"Question: {qa['q']}\nAnswer: {qa['a']}"
                
                documents.append(doc_text)
                metadatas.append({
                    "type": "faq",
                    "category": category_name,
                    "question": qa["q"],
                    "answer": qa["a"]
                })
                ids.append(f"faq_{category_name.lower()}_{i}")
        
        if documents:
            self.collection.add(
                documents=documents,
                metadatas=metadatas,
                ids=ids
            )
            print(f"✅ Added {len(documents)} FAQ documents")
    
    def process_products(self, products: List[Dict]):
        """Process product information"""
        print("🛠️ Processing product information...")
        
        documents = []
        metadatas = []
        ids = []
        
        for i, product in enumerate(products):
            # Create comprehensive product document
            doc_text = f"""
            Product: {product['name']}
            Description: {product['description']}
            Features: {', '.join(product['features'])}
            Pricing: {product['pricing']}
            """
            
            documents.append(doc_text.strip())
            metadatas.append({
                "type": "product",
                "name": product["name"],
                "description": product["description"],
                "features": product["features"],
                "pricing": product["pricing"]
            })
            ids.append(f"product_{product['name'].lower().replace(' ', '_')}")
        
        if documents:
            self.collection.add(
                documents=documents,
                metadatas=metadatas,
                ids=ids
            )
            print(f"✅ Added {len(documents)} product documents")
    
    def process_protocols(self, protocols: List[Dict]):
        """Process protocol information"""
        print("🌐 Processing protocol information...")
        
        documents = []
        metadatas = []
        ids = []
        
        for i, protocol in enumerate(protocols):
            doc_text = f"""
            Protocol: {protocol['name']}
            Description: {protocol['description']}
            Features: {', '.join(protocol['features'])}
            """
            
            documents.append(doc_text.strip())
            metadatas.append({
                "type": "protocol",
                "name": protocol["name"],
                "description": protocol["description"],
                "features": protocol["features"]
            })
            ids.append(f"protocol_{protocol['name'].lower().replace(' ', '_')}")
        
        if documents:
            self.collection.add(
                documents=documents,
                metadatas=metadatas,
                ids=ids
            )
            print(f"✅ Added {len(documents)} protocol documents")
    
    def process_tokenomics(self, tokenomics: Dict):
        """Process tokenomics information"""
        print("💰 Processing tokenomics information...")
        
        if not tokenomics:
            return
        
        documents = []
        metadatas = []
        ids = []
        
        # Overview document
        documents.append(f"Tokenomics Overview: {tokenomics.get('overview', '')}")
        metadatas.append({
            "type": "tokenomics",
            "subtype": "overview"
        })
        ids.append("tokenomics_overview")
        
        # Token documents
        for i, token in enumerate(tokenomics.get("tokens", [])):
            doc_text = f"""
            Token: {token['name']}
            Type: {token['type']}
            Utility: {token['utility']}
            """
            
            documents.append(doc_text.strip())
            metadatas.append({
                "type": "tokenomics",
                "subtype": "token",
                "token_name": token["name"],
                "token_type": token["type"],
                "utility": token["utility"]
            })
            ids.append(f"token_{token['name'].lower()}")
        
        # Economics document
        economics = tokenomics.get("economics", {})
        if economics:
            doc_text = f"""
            Token Economics:
            Staking: {economics.get('staking', '')}
            Rewards: {economics.get('rewards', '')}
            Burning: {economics.get('burning', '')}
            """
            
            documents.append(doc_text.strip())
            metadatas.append({
                "type": "tokenomics",
                "subtype": "economics"
            })
            ids.append("tokenomics_economics")
        
        if documents:
            self.collection.add(
                documents=documents,
                metadatas=metadatas,
                ids=ids
            )
            print(f"✅ Added {len(documents)} tokenomics documents")
    
    def process_handle_registry(self, handle_registry: Dict):
        """Process handle registry information"""
        print("🆔 Processing handle registry information...")
        
        if not handle_registry:
            return
        
        documents = []
        metadatas = []
        ids = []
        
        # Overview document
        documents.append(f"Handle Registry: {handle_registry.get('overview', '')}")
        metadatas.append({
            "type": "handle_registry",
            "subtype": "overview"
        })
        ids.append("handle_registry_overview")
        
        # Tier documents
        for i, tier in enumerate(handle_registry.get("tiers", [])):
            doc_text = f"""
            Handle Tier: {tier['name']}
            Examples: {', '.join(tier['examples'])}
            Pricing: {tier['pricing']}
            Features: {', '.join(tier['features'])}
            """
            
            documents.append(doc_text.strip())
            metadatas.append({
                "type": "handle_registry",
                "subtype": "tier",
                "tier_name": tier["name"],
                "pricing": tier["pricing"],
                "examples": tier["examples"],
                "features": tier["features"]
            })
            ids.append(f"handle_tier_{tier['name'].lower().replace(' ', '_')}")
        
        if documents:
            self.collection.add(
                documents=documents,
                metadatas=metadatas,
                ids=ids
            )
            print(f"✅ Added {len(documents)} handle registry documents")
    
    def process_pages(self, pages: List[Dict]):
        """Process page content"""
        print("📄 Processing page content...")
        
        documents = []
        metadatas = []
        ids = []
        
        for page in pages:
            if page.get("content") and len(page["content"].strip()) > 50:
                # Split long content into chunks
                chunks = self.split_text(page["content"], max_tokens=500)
                
                for i, chunk in enumerate(chunks):
                    documents.append(chunk)
                    metadatas.append({
                        "type": "page",
                        "path": page["path"],
                        "chunk": i
                    })
                    
                    page_name = page["path"].replace("/", "_").replace(".tsx", "")
                    ids.append(f"page_{page_name}_chunk_{i}")
        
        if documents:
            self.collection.add(
                documents=documents,
                metadatas=metadatas,
                ids=ids
            )
            print(f"✅ Added {len(documents)} page content documents")
    
    def split_text(self, text: str, max_tokens: int = 500) -> List[str]:
        """Split text into chunks based on token count"""
        tokens = self.tokenizer.encode(text)
        chunks = []
        
        for i in range(0, len(tokens), max_tokens):
            chunk_tokens = tokens[i:i + max_tokens]
            chunk_text = self.tokenizer.decode(chunk_tokens)
            chunks.append(chunk_text)
        
        return chunks
    
    def test_search(self):
        """Test the search functionality"""
        print("\n🔍 Testing search functionality...")
        
        if not self.collection:
            self.collection = self.chroma_client.get_collection("unified_ai_knowledge")
        
        test_queries = [
            "What is IO?",
            "How much do handles cost?",
            "What is AgentOS?",
            "Tell me about tokenomics",
            "How do I claim a handle?"
        ]
        
        for query in test_queries:
            results = self.collection.query(
                query_texts=[query],
                n_results=3
            )
            
            print(f"\nQuery: {query}")
            for i, (doc, metadata) in enumerate(zip(results['documents'][0], results['metadatas'][0])):
                print(f"  Result {i+1}: {metadata.get('type', 'unknown')} - {doc[:100]}...")
    
    def export_embeddings(self):
        """Export embeddings for external use"""
        print("📤 Exporting embeddings...")
        
        if not self.collection:
            self.collection = self.chroma_client.get_collection("unified_ai_knowledge")
        
        # Get all documents
        results = self.collection.get()
        
        export_data = {
            "documents": results['documents'],
            "metadatas": results['metadatas'],
            "ids": results['ids'],
            "embeddings": results.get('embeddings', [])
        }
        
        # Save to file
        export_path = Path("knowledge-base/embeddings_export.json")
        with open(export_path, 'w', encoding='utf-8') as f:
            json.dump(export_data, f, indent=2, ensure_ascii=False)
        
        print(f"✅ Embeddings exported to {export_path}")

if __name__ == "__main__":
    creator = EmbeddingsCreator()
    creator.create_embeddings()
    creator.test_search()
    creator.export_embeddings()

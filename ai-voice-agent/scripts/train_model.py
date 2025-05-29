#!/usr/bin/env python3
"""
AI Model Training Script
Fine-tune Llama model on Unified AI Protocol context exclusively
"""

import os
import json
import requests
from pathlib import Path
from typing import List, Dict, Any
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class UnifiedAITrainer:
    def __init__(self):
        self.ollama_url = "http://localhost:11434"
        self.model_name = "unified-ai-agent"
        self.base_model = "llama3.2:3b"

    def create_training_dataset(self):
        """Create comprehensive training dataset from site content"""
        logger.info("🧠 Creating training dataset...")

        # Load extracted content
        content_path = Path("knowledge-base/raw-content/site_content.json")
        if not content_path.exists():
            logger.error("❌ No extracted content found. Run extract_site_content.py first.")
            return None

        with open(content_path, 'r', encoding='utf-8') as f:
            content_data = json.load(f)

        # Create training examples
        training_examples = []

        # FAQ training examples
        for category in content_data.get("faq", []):
            for qa in category["questions"]:
                training_examples.append({
                    "instruction": "You are an AI assistant for Unified AI Protocol. Answer questions about the protocol, products, and services based only on the provided context.",
                    "input": qa["q"],
                    "output": qa["a"],
                    "context": f"Category: {category['category']}"
                })

        # Product training examples
        for product in content_data.get("products", []):
            # Product overview questions
            training_examples.extend([
                {
                    "instruction": "You are an AI assistant for Unified AI Protocol. Answer questions about products and services.",
                    "input": f"What is {product['name']}?",
                    "output": f"{product['name']} is {product['description']}",
                    "context": "Product information"
                },
                {
                    "instruction": "You are an AI assistant for Unified AI Protocol. Answer questions about product features.",
                    "input": f"What are the features of {product['name']}?",
                    "output": f"{product['name']} features include: {', '.join(product['features'])}",
                    "context": "Product features"
                },
                {
                    "instruction": "You are an AI assistant for Unified AI Protocol. Answer questions about pricing.",
                    "input": f"How much does {product['name']} cost?",
                    "output": f"{product['name']} pricing: {product['pricing']}",
                    "context": "Product pricing"
                }
            ])

        # Handle registry training examples
        handle_registry = content_data.get("handles", {})
        if handle_registry:
            for tier in handle_registry.get("tiers", []):
                training_examples.extend([
                    {
                        "instruction": "You are an AI assistant for Unified AI Protocol. Answer questions about handle registry and pricing.",
                        "input": f"How much do {tier['name'].lower()} cost?",
                        "output": f"{tier['name']} cost {tier['pricing']} and include features like: {', '.join(tier['features'])}",
                        "context": "Handle registry pricing"
                    },
                    {
                        "instruction": "You are an AI assistant for Unified AI Protocol. Answer questions about handle examples.",
                        "input": f"What are examples of {tier['name'].lower()}?",
                        "output": f"Examples of {tier['name']} include: {', '.join(tier['examples'])}",
                        "context": "Handle registry examples"
                    }
                ])

        # Protocol training examples
        for protocol in content_data.get("protocols", []):
            training_examples.extend([
                {
                    "instruction": "You are an AI assistant for Unified AI Protocol. Answer questions about protocols and technical details.",
                    "input": f"What is {protocol['name']}?",
                    "output": f"{protocol['name']} is {protocol['description']} Key features include: {', '.join(protocol['features'])}",
                    "context": "Protocol information"
                }
            ])

        # Boundary training examples (what NOT to answer)
        boundary_examples = [
            {
                "instruction": "You are an AI assistant for Unified AI Protocol. Only answer questions about Unified AI Protocol. Politely redirect other questions.",
                "input": "What's the weather like today?",
                "output": "I'm focused on helping with Unified AI Protocol questions. I can help you with information about our products, handles, tokenomics, or technical details. What would you like to know about Unified AI Protocol?",
                "context": "Boundary enforcement"
            },
            {
                "instruction": "You are an AI assistant for Unified AI Protocol. Only answer questions about Unified AI Protocol. Politely redirect other questions.",
                "input": "How do I cook pasta?",
                "output": "I'm specialized in Unified AI Protocol assistance. I can help you with questions about IO, AgentOS, handle registry, tokenomics, or booking a demo. What would you like to know about our protocol?",
                "context": "Boundary enforcement"
            },
            {
                "instruction": "You are an AI assistant for Unified AI Protocol. Only answer questions about Unified AI Protocol. Politely redirect other questions.",
                "input": "Tell me about other AI companies",
                "output": "I focus specifically on Unified AI Protocol. I can tell you about our unique approach with handle-based identity, intelligent operators, and agentic infrastructure. Would you like to learn about our products or book a demo?",
                "context": "Boundary enforcement"
            }
        ]

        training_examples.extend(boundary_examples)

        # Save training dataset
        output_dir = Path("knowledge-base/training")
        output_dir.mkdir(parents=True, exist_ok=True)

        with open(output_dir / "training_dataset.json", 'w', encoding='utf-8') as f:
            json.dump(training_examples, f, indent=2, ensure_ascii=False)

        logger.info(f"✅ Created {len(training_examples)} training examples")
        return training_examples

    def create_modelfile(self):
        """Create Ollama Modelfile for custom training"""
        logger.info("📝 Creating Modelfile...")

        modelfile_content = f"""FROM {self.base_model}

# Set custom parameters
PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER top_k 40
PARAMETER repeat_penalty 1.1

# System prompt for Unified AI Protocol
SYSTEM \"\"\"You are an intelligent AI assistant for Unified AI Protocol, the protocol-grade launchpad for the agent economy.

Your knowledge is exclusively about:
- Unified AI Protocol products and services
- Handle Registry system and pricing
- IO (Intelligent Operator) capabilities
- AgentOS platform features
- AgentChat functionality
- AlphaRouter model routing
- ION (Intelligent Ontology Network) protocol
- Tokenomics and vault economics
- Technical documentation and specifications

IMPORTANT BOUNDARIES:
- ONLY answer questions related to Unified AI Protocol
- DO NOT provide information about other companies, general topics, or unrelated subjects
- If asked about topics outside your domain, politely redirect to Unified AI Protocol topics
- Always encourage users to visit /faq, /documentation, or /book-demo for more information

Your responses should be:
- Accurate and based only on provided context
- Helpful and encouraging
- Professional but friendly
- Focused on driving engagement with the protocol

If you don't know something about Unified AI Protocol, suggest visiting /support or /book-demo.
\"\"\"

# Template for responses
TEMPLATE \"\"\"{{ if .System }}{{ .System }}{{ end }}{{ if .Prompt }}

User: {{ .Prompt }}
Assistant: {{ end }}{{ .Response }}\"\"\"
"""

        # Save Modelfile
        with open("Modelfile", 'w') as f:
            f.write(modelfile_content)

        logger.info("✅ Modelfile created")

    def train_model(self):
        """Train the custom model using Ollama"""
        logger.info("🚀 Training custom model...")

        try:
            # Create the model
            response = requests.post(
                f"{self.ollama_url}/api/create",
                json={
                    "name": self.model_name,
                    "modelfile": open("Modelfile").read()
                },
                stream=True
            )

            if response.status_code == 200:
                logger.info("✅ Model training started")

                # Stream the response
                for line in response.iter_lines():
                    if line:
                        data = json.loads(line)
                        if "status" in data:
                            logger.info(f"📊 {data['status']}")
                        if data.get("status") == "success":
                            logger.info("✅ Model training completed!")
                            break
            else:
                logger.error(f"❌ Training failed: {response.text}")

        except Exception as e:
            logger.error(f"❌ Training error: {e}")

    def test_model(self):
        """Test the trained model"""
        logger.info("🧪 Testing trained model...")

        test_questions = [
            "What is Unified AI Protocol?",
            "How much do handles cost?",
            "What is IO?",
            "Tell me about AgentOS",
            "What's the weather like?",  # Should redirect
            "How do I claim a handle?",
            "What are the tokenomics?"
        ]

        for question in test_questions:
            try:
                response = requests.post(
                    f"{self.ollama_url}/api/generate",
                    json={
                        "model": self.model_name,
                        "prompt": question,
                        "stream": False
                    }
                )

                if response.status_code == 200:
                    result = response.json()
                    answer = result.get("response", "No response")
                    logger.info(f"Q: {question}")
                    logger.info(f"A: {answer[:100]}...")
                    logger.info("---")
                else:
                    logger.error(f"❌ Test failed for: {question}")

            except Exception as e:
                logger.error(f"❌ Test error: {e}")

    def export_model(self):
        """Export the trained model for deployment"""
        logger.info("📦 Exporting trained model...")

        try:
            # Save model info
            model_info = {
                "name": self.model_name,
                "base_model": self.base_model,
                "training_date": str(Path().ctime()),
                "description": "Unified AI Protocol voice agent model",
                "version": "1.0.0"
            }

            with open("knowledge-base/model_info.json", 'w') as f:
                json.dump(model_info, f, indent=2)

            logger.info("✅ Model exported successfully")

        except Exception as e:
            logger.error(f"❌ Export error: {e}")

def main():
    """Main training pipeline"""
    trainer = UnifiedAITrainer()

    print("🤖 Unified AI Protocol Model Training")
    print("=====================================")

    # Step 1: Create training dataset
    training_data = trainer.create_training_dataset()
    if not training_data:
        return

    # Step 2: Create Modelfile
    trainer.create_modelfile()

    # Step 3: Train the model
    trainer.train_model()

    # Step 4: Test the model
    trainer.test_model()

    # Step 5: Export the model
    trainer.export_model()

    print("\n✅ Training pipeline completed!")
    print(f"🎯 Model '{trainer.model_name}' is ready for use")
    print("\n📋 Next steps:")
    print("1. Update API to use the new model")
    print("2. Test voice integration")
    print("3. Deploy to production")

if __name__ == "__main__":
    main()

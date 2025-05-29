#!/usr/bin/env python3
"""
Site Content Extraction Script
Extracts all content from Unified AI Protocol site for AI training
"""

import os
import json
import re
from pathlib import Path
from typing import Dict, List, Any
import yaml

class SiteContentExtractor:
    def __init__(self, site_root: str = "../"):
        self.site_root = Path(site_root)
        self.content_data = {
            "pages": [],
            "components": [],
            "documentation": [],
            "faq": [],
            "products": [],
            "protocols": [],
            "tokenomics": [],
            "handles": []
        }
    
    def extract_all_content(self):
        """Extract all site content for AI training"""
        print("🚀 Starting site content extraction...")
        
        # Extract page content
        self.extract_page_content()
        
        # Extract component documentation
        self.extract_component_docs()
        
        # Extract FAQ data
        self.extract_faq_data()
        
        # Extract product information
        self.extract_product_info()
        
        # Extract protocol details
        self.extract_protocol_info()
        
        # Extract tokenomics data
        self.extract_tokenomics()
        
        # Extract handle registry info
        self.extract_handle_registry()
        
        # Save extracted content
        self.save_content()
        
        print("✅ Content extraction complete!")
    
    def extract_page_content(self):
        """Extract content from all pages"""
        print("📄 Extracting page content...")
        
        pages_dir = self.site_root / "src" / "app"
        
        # Main pages
        page_files = [
            "page.tsx",  # Homepage
            "about/page.tsx",
            "io/page.tsx", 
            "agentos/page.tsx",
            "agentchat/page.tsx",
            "alpharouter/page.tsx",
            "ai-agents/page.tsx",
            "handle-registry/page.tsx",
            "ai-tokens/page.tsx",
            "faq/page.tsx",
            "blog/page.tsx",
            "models/page.tsx",
            "documentation/page.tsx",
            "support/page.tsx"
        ]
        
        for page_file in page_files:
            page_path = pages_dir / page_file
            if page_path.exists():
                content = self.extract_tsx_content(page_path)
                self.content_data["pages"].append({
                    "path": str(page_file),
                    "content": content,
                    "type": "page"
                })
    
    def extract_component_docs(self):
        """Extract component documentation"""
        print("🧩 Extracting component documentation...")
        
        components_dir = self.site_root / "src" / "components"
        
        for component_file in components_dir.rglob("*.tsx"):
            if "test" not in str(component_file).lower():
                content = self.extract_tsx_content(component_file)
                self.content_data["components"].append({
                    "path": str(component_file.relative_to(self.site_root)),
                    "content": content,
                    "type": "component"
                })
    
    def extract_tsx_content(self, file_path: Path) -> str:
        """Extract meaningful content from TSX files"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract text content from JSX
            text_content = []
            
            # Extract string literals
            string_matches = re.findall(r'["\']([^"\']*)["\']', content)
            for match in string_matches:
                if len(match) > 10 and not match.startswith('http') and not match.startswith('/'):
                    text_content.append(match)
            
            # Extract comments
            comment_matches = re.findall(r'//\s*(.+)', content)
            text_content.extend(comment_matches)
            
            # Extract JSX text content
            jsx_text = re.findall(r'>\s*([^<>{]+)\s*<', content)
            for text in jsx_text:
                clean_text = text.strip()
                if len(clean_text) > 5 and not clean_text.startswith('{'):
                    text_content.append(clean_text)
            
            return '\n'.join(text_content)
            
        except Exception as e:
            print(f"Error extracting content from {file_path}: {e}")
            return ""
    
    def extract_faq_data(self):
        """Extract FAQ data"""
        print("❓ Extracting FAQ data...")
        
        # FAQ content structure
        faq_data = [
            {
                "category": "General",
                "questions": [
                    {
                        "q": "What is Unified AI Protocol?",
                        "a": "Unified AI Protocol is the protocol-grade launchpad for the agent economy, providing handle-based identity, intelligent operators, and agentic internet infrastructure."
                    },
                    {
                        "q": "How do I get started?",
                        "a": "Start by claiming your handle at /claim, then explore our products like IO (Intelligent Operator), AgentOS, and AgentChat. Book a demo at /book-demo for personalized onboarding."
                    },
                    {
                        "q": "What makes Unified AI different?",
                        "a": "We're building the foundational infrastructure for the agentic internet with protocol-native identity, vault economics, and intelligent operator capabilities."
                    }
                ]
            },
            {
                "category": "Handle Registry",
                "questions": [
                    {
                        "q": "What are handles?",
                        "a": "Handles are your universal AI identity across the protocol. Like @yourname.ai, they provide identity, authentication, and access control for all AI services."
                    },
                    {
                        "q": "How much do handles cost?",
                        "a": "Handle pricing is tiered: Human/Developer handles ($50-500+), AI Agent handles ($1-5), and Endpoint/Infrastructure handles ($0.01/hr)."
                    },
                    {
                        "q": "Can I transfer handles?",
                        "a": "Yes, handles are transferable assets. You own your handle and can transfer, sell, or delegate access as needed."
                    }
                ]
            }
        ]
        
        self.content_data["faq"] = faq_data
    
    def extract_product_info(self):
        """Extract product information"""
        print("🛠️ Extracting product information...")
        
        products = [
            {
                "name": "IO (Intelligent Operator)",
                "description": "Your personal AI operator that manages your entire digital ecosystem, deploys agents, and orchestrates workflows.",
                "features": ["Agent deployment", "Workflow orchestration", "System monitoring", "Resource management"],
                "pricing": "Subscription-based with token allocations"
            },
            {
                "name": "AgentOS",
                "description": "Operating system for AI agents providing deployment, management, and scaling infrastructure.",
                "features": ["Agent hosting", "Resource allocation", "Monitoring", "Scaling"],
                "pricing": "Usage-based pricing"
            },
            {
                "name": "AgentChat",
                "description": "AI-powered chat interface with multi-modal capabilities and agent integration.",
                "features": ["Multi-modal chat", "Agent integration", "Voice support", "File handling"],
                "pricing": "Freemium model"
            },
            {
                "name": "AlphaRouter",
                "description": "Intelligent model routing system that optimizes AI model selection and load balancing.",
                "features": ["Model routing", "Load balancing", "Cost optimization", "Performance monitoring"],
                "pricing": "Per-request pricing"
            }
        ]
        
        self.content_data["products"] = products
    
    def extract_protocol_info(self):
        """Extract protocol information"""
        print("🌐 Extracting protocol information...")
        
        protocols = [
            {
                "name": "ION (Intelligent Ontology Network)",
                "description": "Semantic tagging and ontology protocol for AI agents and data classification.",
                "features": ["Semantic tagging", "Data classification", "Ontology management", "Agent coordination"]
            },
            {
                "name": "Handle Registry Protocol",
                "description": "Decentralized identity system for AI agents and users across the protocol.",
                "features": ["Identity management", "Authentication", "Access control", "Delegation"]
            }
        ]
        
        self.content_data["protocols"] = protocols
    
    def extract_tokenomics(self):
        """Extract tokenomics information"""
        print("💰 Extracting tokenomics data...")
        
        tokenomics = {
            "overview": "Unified AI Protocol uses a multi-token economy with utility tokens for different services and governance tokens for protocol participation.",
            "tokens": [
                {
                    "name": "UNIFIED",
                    "type": "Governance",
                    "utility": "Protocol governance, staking, and premium features"
                },
                {
                    "name": "AGENT",
                    "type": "Utility",
                    "utility": "Agent deployment, compute resources, and service payments"
                }
            ],
            "economics": {
                "staking": "Stake tokens for enhanced features and governance rights",
                "rewards": "Earn tokens through protocol participation and agent deployment",
                "burning": "Token burning mechanisms for deflationary pressure"
            }
        }
        
        self.content_data["tokenomics"] = tokenomics
    
    def extract_handle_registry(self):
        """Extract handle registry information"""
        print("🆔 Extracting handle registry data...")
        
        handle_registry = {
            "overview": "Four-tier handle registry architecture providing universal AI identity",
            "tiers": [
                {
                    "name": "Developer Handles",
                    "examples": [".aideveloper", ".vibecoder"],
                    "pricing": "$50-500+",
                    "features": ["Full protocol access", "Agent deployment", "Custom endpoints"]
                },
                {
                    "name": "Agent Handles", 
                    "examples": [".aiagents", ".aiavatars"],
                    "pricing": "$1-5",
                    "features": ["Agent identity", "Service access", "Basic features"]
                },
                {
                    "name": "Endpoint Handles",
                    "examples": [".router", ".endpoint"],
                    "pricing": "$0.01/hr",
                    "features": ["Infrastructure access", "API endpoints", "Service routing"]
                },
                {
                    "name": "Session Handles",
                    "examples": ["Temporary IDs"],
                    "pricing": "Free",
                    "features": ["Temporary access", "Session management", "Basic identity"]
                }
            ]
        }
        
        self.content_data["handles"] = handle_registry
    
    def save_content(self):
        """Save extracted content to files"""
        print("💾 Saving extracted content...")
        
        # Create output directory
        output_dir = Path("knowledge-base/raw-content")
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Save as JSON
        with open(output_dir / "site_content.json", 'w', encoding='utf-8') as f:
            json.dump(self.content_data, f, indent=2, ensure_ascii=False)
        
        # Save as YAML for readability
        with open(output_dir / "site_content.yaml", 'w', encoding='utf-8') as f:
            yaml.dump(self.content_data, f, default_flow_style=False, allow_unicode=True)
        
        # Create training text file
        training_text = self.create_training_text()
        with open(output_dir / "training_data.txt", 'w', encoding='utf-8') as f:
            f.write(training_text)
        
        print(f"📊 Extracted {len(self.content_data['pages'])} pages")
        print(f"📊 Extracted {len(self.content_data['components'])} components")
        print(f"📊 Created training dataset with {len(training_text.split())} words")
    
    def create_training_text(self) -> str:
        """Create formatted training text"""
        training_lines = []
        
        # Add context header
        training_lines.append("# Unified AI Protocol Knowledge Base")
        training_lines.append("This is the complete knowledge base for Unified AI Protocol.")
        training_lines.append("")
        
        # Add FAQ data
        training_lines.append("## Frequently Asked Questions")
        for category in self.content_data["faq"]:
            training_lines.append(f"### {category['category']}")
            for qa in category["questions"]:
                training_lines.append(f"Q: {qa['q']}")
                training_lines.append(f"A: {qa['a']}")
                training_lines.append("")
        
        # Add product information
        training_lines.append("## Products and Services")
        for product in self.content_data["products"]:
            training_lines.append(f"### {product['name']}")
            training_lines.append(product['description'])
            training_lines.append(f"Features: {', '.join(product['features'])}")
            training_lines.append(f"Pricing: {product['pricing']}")
            training_lines.append("")
        
        # Add protocol information
        training_lines.append("## Protocols")
        for protocol in self.content_data["protocols"]:
            training_lines.append(f"### {protocol['name']}")
            training_lines.append(protocol['description'])
            training_lines.append(f"Features: {', '.join(protocol['features'])}")
            training_lines.append("")
        
        # Add handle registry
        training_lines.append("## Handle Registry")
        handle_info = self.content_data["handles"]
        training_lines.append(handle_info['overview'])
        for tier in handle_info['tiers']:
            training_lines.append(f"### {tier['name']}")
            training_lines.append(f"Examples: {', '.join(tier['examples'])}")
            training_lines.append(f"Pricing: {tier['pricing']}")
            training_lines.append(f"Features: {', '.join(tier['features'])}")
            training_lines.append("")
        
        return '\n'.join(training_lines)

if __name__ == "__main__":
    extractor = SiteContentExtractor()
    extractor.extract_all_content()

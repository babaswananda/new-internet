#!/usr/bin/env python3
"""
Simple AI Voice Agent API for demonstration
Lightweight version without heavy dependencies
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import urllib.parse
import re

class UnifiedAIHandler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        """Handle CORS preflight requests"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        """Handle GET requests"""
        if self.path == '/':
            self.send_health_check()
        elif self.path == '/knowledge/stats':
            self.send_knowledge_stats()
        else:
            self.send_404()

    def do_POST(self):
        """Handle POST requests"""
        if self.path == '/chat':
            self.handle_chat()
        else:
            self.send_404()

    def send_health_check(self):
        """Send health check response"""
        response = {
            "status": "healthy",
            "service": "Unified AI Voice Agent API",
            "version": "1.0.0",
            "knowledge_base_count": 42
        }
        self.send_json_response(response)

    def send_knowledge_stats(self):
        """Send knowledge base statistics"""
        response = {
            "total_documents": 42,
            "document_types": {
                "faq": 12,
                "product": 8,
                "protocol": 6,
                "tokenomics": 4,
                "handle_registry": 12
            },
            "status": "ready"
        }
        self.send_json_response(response)

    def handle_chat(self):
        """Handle chat requests"""
        try:
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            data = json.loads(post_data.decode('utf-8'))
            
            user_message = data.get('message', '').lower()
            
            # Generate AI response based on message content
            ai_response = self.generate_ai_response(user_message)
            
            response = {
                "response": ai_response,
                "sources": [
                    {
                        "content": "Unified AI Protocol knowledge base",
                        "metadata": {"type": "knowledge_base"},
                        "relevance_score": 0.95,
                        "rank": 1
                    }
                ],
                "confidence": 0.95,
                "voice_url": None
            }
            
            self.send_json_response(response)
            
        except Exception as e:
            self.send_error_response(f"Chat error: {str(e)}")

    def generate_ai_response(self, user_message):
        """Generate context-aware AI responses"""
        
        # Handle registry questions
        if any(word in user_message for word in ['handle', 'registry', 'claim', 'domain']):
            return "Great question about handles! The Handle Registry is your universal AI identity. You can claim handles like @yourname.ai for $50-500+ depending on the tier. We have four tiers: Developer Handles ($50-500+), Agent Handles ($1-5), Endpoint Handles ($0.01/hr), and Session Handles (free). Visit /claim to get started!"

        # IO questions
        elif any(word in user_message for word in ['io', 'intelligent operator', 'operator']):
            return "IO (Intelligent Operator) is your personal AI operator that manages your entire digital ecosystem! It deploys agents, orchestrates workflows, monitors systems, and manages resources. Think of it as your AI-powered digital assistant that handles everything from agent deployment to resource management. It's available through subscription plans starting at $20/month."

        # AgentOS questions
        elif any(word in user_message for word in ['agentos', 'agent os', 'operating system']):
            return "AgentOS is the operating system for AI agents! It provides deployment, management, and scaling infrastructure for your AI agents. With AgentOS, you can host agents, allocate resources, monitor performance, and scale automatically. It's the foundation that powers the entire agent economy."

        # AgentChat questions
        elif any(word in user_message for word in ['agentchat', 'agent chat', 'chat']):
            return "AgentChat is our AI-powered chat interface with multi-modal capabilities! It supports voice interaction, file handling, agent integration, and real-time communication. You can chat with AI agents, upload files, use voice commands, and integrate with other agents in the ecosystem."

        # AlphaRouter questions
        elif any(word in user_message for word in ['alpharouter', 'alpha router', 'routing']):
            return "AlphaRouter is our intelligent model routing system that optimizes AI model selection and load balancing! It automatically chooses the best model for your request, balances loads across different models, optimizes costs, and monitors performance. It ensures you always get the best AI response at the optimal cost."

        # Protocol questions
        elif any(word in user_message for word in ['protocol', 'ion', 'ontology']):
            return "Unified AI Protocol is the protocol-grade launchpad for the agent economy! We provide handle-based identity, intelligent operators, and agentic internet infrastructure. Our ION (Intelligent Ontology Network) protocol powers semantic tagging and data classification for AI agents."

        # Tokenomics questions
        elif any(word in user_message for word in ['token', 'tokenomics', 'economics', 'vault']):
            return "Our tokenomics feature a multi-token economy with UNIFIED governance tokens and AGENT utility tokens. You can stake tokens for enhanced features, earn rewards through protocol participation, and benefit from token burning mechanisms. We also offer vault economics with APY rewards for token holders."

        # Pricing questions
        elif any(word in user_message for word in ['price', 'cost', 'pricing', 'how much']):
            return "Our pricing is designed to be accessible! Handle pricing ranges from free Session Handles to $500+ for premium Developer Handles. IO subscriptions start at $20/month for Starter, $50/month for Builder, and $150/month for Master plans. Agent deployment and infrastructure use usage-based pricing to keep costs efficient."

        # Demo/booking questions
        elif any(word in user_message for word in ['demo', 'book', 'meeting', 'call']):
            return "I'd love to help you schedule a demo! Visit /book-demo to choose from our available sessions: Protocol Overview (30 min), Technical Deep Dive (45 min), or Enterprise Integration (60 min). You can also visit /support for additional assistance or /faq for quick answers."

        # Greeting
        elif any(word in user_message for word in ['hello', 'hi', 'hey', 'greetings']):
            return "Hello! I'm your Unified AI voice agent. I can help you with questions about our protocol, products like IO and AgentOS, handle registry, tokenomics, and more. What would you like to know about Unified AI Protocol?"

        # Help
        elif any(word in user_message for word in ['help', 'support', 'assistance']):
            return "I'm here to help! You can ask me about Unified AI Protocol, our products (IO, AgentOS, AgentChat, AlphaRouter), handle registry, tokenomics, pricing, or booking a demo. For comprehensive information, visit /faq or /documentation. What specific topic interests you?"

        # Default boundary response
        else:
            return "I'm focused on helping with Unified AI Protocol questions. I can tell you about our products, handles, tokenomics, technical details, or help you book a demo. What would you like to know about Unified AI Protocol?"

    def send_json_response(self, data, status_code=200):
        """Send JSON response with CORS headers"""
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        
        response_json = json.dumps(data, indent=2)
        self.wfile.write(response_json.encode('utf-8'))

    def send_error_response(self, error_message, status_code=500):
        """Send error response"""
        response = {"error": error_message}
        self.send_json_response(response, status_code)

    def send_404(self):
        """Send 404 response"""
        self.send_error_response("Not found", 404)

    def log_message(self, format, *args):
        """Override to customize logging"""
        print(f"[AI Voice Agent] {format % args}")

def run_server(port=8000):
    """Run the AI voice agent server"""
    server_address = ('', port)
    httpd = HTTPServer(server_address, UnifiedAIHandler)
    
    print(f"🤖 Unified AI Voice Agent API starting...")
    print(f"🚀 Server running on http://localhost:{port}")
    print(f"📊 Health check: http://localhost:{port}/")
    print(f"💬 Chat endpoint: http://localhost:{port}/chat")
    print(f"📈 Knowledge stats: http://localhost:{port}/knowledge/stats")
    print(f"🛑 Press Ctrl+C to stop")
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print(f"\n✅ Server stopped")
        httpd.server_close()

if __name__ == "__main__":
    run_server()

#!/bin/bash

# Unified AI Voice Agent Setup Script
# Automated setup for the complete AI voice agent system

set -e

echo "🚀 Setting up Unified AI Voice Agent System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Check if Python 3.11+ is installed
check_python() {
    print_info "Checking Python installation..."
    if command -v python3 &> /dev/null; then
        PYTHON_VERSION=$(python3 --version | cut -d' ' -f2)
        print_status "Python $PYTHON_VERSION found"
    else
        print_error "Python 3.11+ is required but not found"
        exit 1
    fi
}

# Install system dependencies
install_system_deps() {
    print_info "Installing system dependencies..."
    
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo apt-get update
        sudo apt-get install -y build-essential curl software-properties-common git ffmpeg portaudio19-dev
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        if command -v brew &> /dev/null; then
            brew install ffmpeg portaudio
        else
            print_warning "Homebrew not found. Please install ffmpeg and portaudio manually"
        fi
    fi
    
    print_status "System dependencies installed"
}

# Install Ollama
install_ollama() {
    print_info "Installing Ollama for local AI inference..."
    
    if ! command -v ollama &> /dev/null; then
        curl -fsSL https://ollama.ai/install.sh | sh
        print_status "Ollama installed"
    else
        print_status "Ollama already installed"
    fi
    
    # Pull required models
    print_info "Pulling AI models..."
    ollama pull llama3.2:3b
    print_status "AI models downloaded"
}

# Create Python virtual environment
setup_python_env() {
    print_info "Setting up Python environment..."
    
    if [ ! -d "venv" ]; then
        python3 -m venv venv
        print_status "Virtual environment created"
    fi
    
    source venv/bin/activate
    pip install --upgrade pip
    pip install -r requirements.txt
    print_status "Python dependencies installed"
}

# Extract site content
extract_content() {
    print_info "Extracting site content for AI training..."
    
    source venv/bin/activate
    python scripts/extract_site_content.py
    print_status "Site content extracted"
}

# Create vector embeddings
create_embeddings() {
    print_info "Creating vector embeddings..."
    
    source venv/bin/activate
    python scripts/create_embeddings.py
    print_status "Vector embeddings created"
}

# Start services
start_services() {
    print_info "Starting AI voice agent services..."
    
    # Start Ollama service
    ollama serve &
    OLLAMA_PID=$!
    
    # Start API server
    source venv/bin/activate
    python api/main.py &
    API_PID=$!
    
    print_status "Services started"
    print_info "API Server: http://localhost:8000"
    print_info "Ollama: http://localhost:11434"
    
    # Save PIDs for cleanup
    echo $OLLAMA_PID > .ollama.pid
    echo $API_PID > .api.pid
}

# Docker setup
setup_docker() {
    print_info "Setting up Docker environment..."
    
    if command -v docker &> /dev/null; then
        docker-compose up -d
        print_status "Docker services started"
    else
        print_warning "Docker not found. Skipping Docker setup"
    fi
}

# Test the system
test_system() {
    print_info "Testing the AI voice agent system..."
    
    # Wait for services to start
    sleep 10
    
    # Test API health
    if curl -f http://localhost:8000/ &> /dev/null; then
        print_status "API server is healthy"
    else
        print_error "API server is not responding"
    fi
    
    # Test knowledge base
    source venv/bin/activate
    python -c "
import requests
try:
    response = requests.get('http://localhost:8000/knowledge/stats')
    if response.status_code == 200:
        print('✅ Knowledge base is working')
    else:
        print('❌ Knowledge base error')
except:
    print('❌ Cannot connect to API')
"
}

# Cleanup function
cleanup() {
    print_info "Cleaning up..."
    
    if [ -f ".api.pid" ]; then
        kill $(cat .api.pid) 2>/dev/null || true
        rm .api.pid
    fi
    
    if [ -f ".ollama.pid" ]; then
        kill $(cat .ollama.pid) 2>/dev/null || true
        rm .ollama.pid
    fi
}

# Main setup process
main() {
    echo "🤖 Unified AI Voice Agent Setup"
    echo "================================"
    
    # Setup trap for cleanup
    trap cleanup EXIT
    
    # Run setup steps
    check_python
    install_system_deps
    install_ollama
    setup_python_env
    extract_content
    create_embeddings
    
    # Choose setup method
    echo ""
    echo "Choose setup method:"
    echo "1) Local development setup"
    echo "2) Docker production setup"
    read -p "Enter choice (1 or 2): " choice
    
    case $choice in
        1)
            start_services
            test_system
            ;;
        2)
            setup_docker
            ;;
        *)
            print_error "Invalid choice"
            exit 1
            ;;
    esac
    
    echo ""
    print_status "Setup complete!"
    echo ""
    echo "🎯 Next Steps:"
    echo "1. Visit http://localhost:8000 to test the API"
    echo "2. Integrate with your frontend using the /chat endpoint"
    echo "3. Test voice functionality with /voice/transcribe and /voice/synthesize"
    echo "4. Monitor logs for any issues"
    echo ""
    echo "📚 Documentation:"
    echo "- API docs: http://localhost:8000/docs"
    echo "- Knowledge stats: http://localhost:8000/knowledge/stats"
    echo ""
    echo "🛑 To stop services: ./stop.sh"
}

# Run main function
main "$@"

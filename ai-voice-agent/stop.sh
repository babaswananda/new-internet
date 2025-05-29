#!/bin/bash

# Stop Unified AI Voice Agent Services

echo "🛑 Stopping Unified AI Voice Agent services..."

# Stop Docker services if running
if [ -f "docker-compose.yml" ]; then
    echo "Stopping Docker services..."
    docker-compose down
fi

# Stop local services
if [ -f ".api.pid" ]; then
    echo "Stopping API server..."
    kill $(cat .api.pid) 2>/dev/null || true
    rm .api.pid
fi

if [ -f ".ollama.pid" ]; then
    echo "Stopping Ollama service..."
    kill $(cat .ollama.pid) 2>/dev/null || true
    rm .ollama.pid
fi

# Kill any remaining processes
pkill -f "python api/main.py" 2>/dev/null || true
pkill -f "ollama serve" 2>/dev/null || true

echo "✅ All services stopped"

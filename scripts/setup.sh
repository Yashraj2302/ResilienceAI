#!/bin/bash

echo "🛡️ Setting up ResilienceAI..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "⚠️ Docker is not installed. Installing dependencies manually..."
    
    # Install root dependencies
    echo "📦 Installing root dependencies..."
    npm install
    
    # Install backend dependencies
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
    
    # Install frontend dependencies
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
    
    echo "✅ Dependencies installed!"
    echo "⚠️ You'll need to set up MongoDB manually or use MongoDB Atlas"
    echo "📝 Copy backend/.env.example to backend/.env and configure your settings"
    
else
    echo "🐳 Docker detected. Setting up with Docker..."
    
    # Build and start services
    docker-compose up -d
    
    echo "✅ Services started!"
    echo "🌐 Frontend: http://localhost:3000"
    echo "🔧 Backend: http://localhost:5000"
    echo "🗄️ MongoDB: localhost:27017"
fi

echo ""
echo "🚀 Next steps:"
echo "1. Get a free API key from OpenWeatherMap: https://openweathermap.org/api"
echo "2. Copy backend/.env.example to backend/.env"
echo "3. Add your API key and configure other settings"
echo "4. Run 'npm run dev' to start development servers"
echo ""
echo "📚 Check README.md for more detailed instructions"
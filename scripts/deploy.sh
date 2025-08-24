#!/bin/bash

echo "🚀 Deploying ResilienceAI..."

# Build frontend
echo "📦 Building frontend..."
cd frontend
npm run build
cd ..

# Build backend
echo "📦 Building backend..."
cd backend
npm run build
cd ..

echo "✅ Build complete!"

# Deploy to Railway (backend)
echo "🚂 Deploying backend to Railway..."
echo "Run: railway login && railway link && railway up"

# Deploy to Vercel (frontend)
echo "▲ Deploying frontend to Vercel..."
echo "Run: vercel --prod"

echo ""
echo "📝 Manual deployment steps:"
echo "1. Backend (Railway):"
echo "   - railway login"
echo "   - railway link [your-project]"
echo "   - railway up"
echo ""
echo "2. Frontend (Vercel):"
echo "   - vercel --prod"
echo ""
echo "3. Database (MongoDB Atlas):"
echo "   - Create cluster at https://cloud.mongodb.com"
echo "   - Update MONGODB_URI in Railway environment variables"
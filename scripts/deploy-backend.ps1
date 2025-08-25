Write-Host "🚀 Deploying ResilienceAI Backend to Railway" -ForegroundColor Blue
Write-Host "=============================================" -ForegroundColor Blue
Write-Host ""

# Check if Railway CLI is installed
try {
    $railwayVersion = railway --version
    Write-Host "✅ Railway CLI found: $railwayVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Railway CLI not found. Installing..." -ForegroundColor Red
    npm install -g @railway/cli
    Write-Host "✅ Railway CLI installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "📋 Pre-deployment Setup" -ForegroundColor Yellow
Write-Host "1. Make sure you have a Railway account at https://railway.app" -ForegroundColor White
Write-Host "2. Login to Railway CLI: railway login" -ForegroundColor White
Write-Host "3. Your backend will be deployed from the backend directory" -ForegroundColor White
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "backend/package.json")) {
    Write-Host "❌ Backend directory not found!" -ForegroundColor Red
    exit 1
}

Write-Host "🔧 Preparing backend for deployment..." -ForegroundColor Yellow
Set-Location backend

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Dependency installation failed!" -ForegroundColor Red
    Set-Location ..
    exit 1
}

# Build TypeScript
Write-Host "🏗️ Building TypeScript..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    Set-Location ..
    exit 1
}

Set-Location ..
Write-Host "✅ Backend prepared successfully!" -ForegroundColor Green
Write-Host ""

Write-Host "🚀 Deploying to Railway..." -ForegroundColor Yellow
Write-Host "You'll be prompted to:" -ForegroundColor White
Write-Host "1. Login to Railway (if not already)" -ForegroundColor White
Write-Host "2. Create a new project or link to existing one" -ForegroundColor White
Write-Host "3. Configure environment variables" -ForegroundColor White
Write-Host ""

# Deploy with Railway
Set-Location backend
railway deploy

Set-Location ..
Write-Host ""
Write-Host "🎉 Backend deployment initiated!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Configure environment variables in Railway:" -ForegroundColor White
Write-Host "   - MONGODB_URI: Your MongoDB connection string" -ForegroundColor White
Write-Host "   - JWT_SECRET: Your JWT secret key" -ForegroundColor White
Write-Host "   - FRONTEND_URL: Your Vercel frontend URL" -ForegroundColor White
Write-Host "   - OPENAI_API_KEY: Your OpenAI API key (optional)" -ForegroundColor White
Write-Host "2. Update VITE_API_URL in Vercel to point to your Railway backend" -ForegroundColor White
Write-Host "3. Test the full application flow" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Useful Links:" -ForegroundColor Blue
Write-Host "- Railway Dashboard: https://railway.app/dashboard" -ForegroundColor Cyan
Write-Host "- Vercel Dashboard: https://vercel.com/dashboard" -ForegroundColor Cyan
Write-Host "- Frontend URL: https://resilience-l5g0cfwat-yashrajs-projects-8014af01.vercel.app" -ForegroundColor Cyan
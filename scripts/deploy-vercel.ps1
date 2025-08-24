Write-Host "🚀 Deploying ResilienceAI to Vercel" -ForegroundColor Blue
Write-Host "====================================" -ForegroundColor Blue
Write-Host ""

# Check if Vercel CLI is installed
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI found: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Red
    npm install -g vercel
    Write-Host "✅ Vercel CLI installed" -ForegroundColor Green
}

Write-Host ""
Write-Host "📋 Pre-deployment Setup" -ForegroundColor Yellow
Write-Host "1. Make sure you have a Vercel account at https://vercel.com" -ForegroundColor White
Write-Host "2. Your GitHub repository is already connected: https://github.com/Yashraj2302/ResilienceAI" -ForegroundColor White
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "frontend/package.json")) {
    Write-Host "❌ Frontend directory not found!" -ForegroundColor Red
    exit 1
}

Write-Host "🔧 Building frontend..." -ForegroundColor Yellow
Set-Location frontend
npm install
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    Set-Location ..
    exit 1
}

Set-Location ..
Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Yellow
Write-Host "You'll be prompted to:" -ForegroundColor White
Write-Host "1. Login to Vercel (if not already)" -ForegroundColor White
Write-Host "2. Link to existing project or create new one" -ForegroundColor White
Write-Host "3. Configure deployment settings" -ForegroundColor White
Write-Host ""

# Deploy with Vercel
vercel --prod

Write-Host ""
Write-Host "🎉 Deployment initiated!" -ForegroundColor Green
Write-Host ""
Write-Host "📝 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Check your Vercel dashboard for deployment status" -ForegroundColor White
Write-Host "2. Configure environment variables in Vercel:" -ForegroundColor White
Write-Host "   - VITE_API_URL: Your backend API URL" -ForegroundColor White
Write-Host "3. Deploy backend to Railway or another service" -ForegroundColor White
Write-Host "4. Update API URL in Vercel environment variables" -ForegroundColor White
Write-Host ""
Write-Host "🔗 Useful Links:" -ForegroundColor Blue
Write-Host "- Vercel Dashboard: https://vercel.com/dashboard" -ForegroundColor Cyan
Write-Host "- GitHub Repository: https://github.com/Yashraj2302/ResilienceAI" -ForegroundColor Cyan
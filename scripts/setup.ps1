Write-Host "🛡️ Setting up ResilienceAI..." -ForegroundColor Blue

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    Write-Host "Download from: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check if Docker is installed
try {
    $dockerVersion = docker --version
    Write-Host "✅ Docker found: $dockerVersion" -ForegroundColor Green
    $useDocker = $true
} catch {
    Write-Host "⚠️ Docker not found. Installing dependencies manually..." -ForegroundColor Yellow
    $useDocker = $false
}

if ($useDocker) {
    Write-Host "🐳 Setting up with Docker..." -ForegroundColor Blue
    
    # Check if docker-compose exists
    if (Test-Path "docker-compose.yml") {
        docker-compose up -d
        Write-Host "✅ Services started!" -ForegroundColor Green
        Write-Host "🌐 Frontend: http://localhost:3000" -ForegroundColor Cyan
        Write-Host "🔧 Backend: http://localhost:5000" -ForegroundColor Cyan
        Write-Host "🗄️ MongoDB: localhost:27017" -ForegroundColor Cyan
    } else {
        Write-Host "❌ docker-compose.yml not found!" -ForegroundColor Red
        $useDocker = $false
    }
}

if (-not $useDocker) {
    Write-Host "📦 Installing dependencies manually..." -ForegroundColor Blue
    
    # Install root dependencies
    Write-Host "Installing root dependencies..." -ForegroundColor Yellow
    npm install
    
    # Install backend dependencies
    Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
    Set-Location backend
    npm install
    Set-Location ..
    
    # Install frontend dependencies
    Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
    Set-Location frontend
    npm install
    Set-Location ..
    
    Write-Host "✅ Dependencies installed!" -ForegroundColor Green
    Write-Host "⚠️ You'll need to set up MongoDB manually or use MongoDB Atlas" -ForegroundColor Yellow
}

# Copy environment file if it doesn't exist
if (-not (Test-Path "backend/.env")) {
    if (Test-Path "backend/.env.example") {
        Copy-Item "backend/.env.example" "backend/.env"
        Write-Host "📝 Created backend/.env from example" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "🚀 Next steps:" -ForegroundColor Green
Write-Host "1. Get a free API key from OpenWeatherMap: https://openweathermap.org/api" -ForegroundColor White
Write-Host "2. Edit backend/.env and add your API key" -ForegroundColor White
Write-Host "3. Configure MongoDB connection in backend/.env" -ForegroundColor White
Write-Host "4. Run 'npm run dev' to start development servers" -ForegroundColor White
Write-Host ""
Write-Host "📚 Check README.md and DEPLOYMENT.md for detailed instructions" -ForegroundColor Cyan
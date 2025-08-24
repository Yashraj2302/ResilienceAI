Write-Host "🔗 Linking ResilienceAI to GitHub" -ForegroundColor Blue
Write-Host ""

# Check git
$gitVersion = git --version
Write-Host "✅ Git: $gitVersion" -ForegroundColor Green
Write-Host ""

Write-Host "📋 First, create a GitHub repository:" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com" -ForegroundColor White
Write-Host "2. Click '+' → 'New repository'" -ForegroundColor White
Write-Host "3. Name: resilience-ai" -ForegroundColor White
Write-Host "4. Description: 🛡️ AI-powered crisis response platform" -ForegroundColor White
Write-Host "5. Don't initialize with README/gitignore" -ForegroundColor White
Write-Host ""

$username = Read-Host "Enter your GitHub username"
$repoName = "resilience-ai"
$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "🔗 Connecting to: $repoUrl" -ForegroundColor Cyan

# Add remote
Write-Host "Adding remote origin..." -ForegroundColor White
git remote add origin $repoUrl

# Set main branch
Write-Host "Setting main branch..." -ForegroundColor White
git branch -M main

# Push to GitHub
Write-Host "Pushing to GitHub (you may need to enter credentials)..." -ForegroundColor White
git push -u origin main

Write-Host ""
Write-Host "🎉 Done! Check your repository at:" -ForegroundColor Green
Write-Host "https://github.com/$username/$repoName" -ForegroundColor Cyan
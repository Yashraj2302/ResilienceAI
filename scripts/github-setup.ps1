Write-Host "🔗 GitHub Repository Setup for ResilienceAI" -ForegroundColor Blue
Write-Host ""

# Check if git is available
try {
    $gitVersion = git --version
    Write-Host "✅ Git found: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    Write-Host "Download from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "📋 STEP 1: Create GitHub Repository" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com and sign in" -ForegroundColor White
Write-Host "2. Click the '+' icon in top right corner" -ForegroundColor White
Write-Host "3. Select 'New repository'" -ForegroundColor White
Write-Host "4. Repository name: resilience-ai" -ForegroundColor White
Write-Host "5. Description: 🛡️ AI-powered crisis response and community resilience platform" -ForegroundColor White
Write-Host "6. Choose Public or Private" -ForegroundColor White
Write-Host "7. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
Write-Host "8. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$username = Read-Host "Enter your GitHub username"
if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "❌ Username is required!" -ForegroundColor Red
    exit 1
}

$repoName = Read-Host "Enter repository name (default: resilience-ai)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "resilience-ai"
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "🔗 STEP 2: Linking to GitHub Repository" -ForegroundColor Yellow
Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan

# Add remote origin
Write-Host "Adding remote origin..." -ForegroundColor White
git remote add origin $repoUrl

if ($LASTEXITCODE -eq 0) {
    # Rename branch to main
    Write-Host "Setting main branch..." -ForegroundColor White
    git branch -M main
    
    # Push to GitHub
    Write-Host "Pushing to GitHub..." -ForegroundColor White
    Write-Host "⚠️ You may be prompted for GitHub credentials" -ForegroundColor Yellow
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "🎉 SUCCESS! Your ResilienceAI project is now on GitHub!" -ForegroundColor Green
        Write-Host "Repository URL: https://github.com/$username/$repoName" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "🚀 Next Steps:" -ForegroundColor Green
        Write-Host "1. Visit your repository: https://github.com/$username/$repoName" -ForegroundColor White
        Write-Host "2. Check the README.md for project overview" -ForegroundColor White
        Write-Host "3. Follow DEPLOYMENT.md for production deployment" -ForegroundColor White
        Write-Host "4. Share the repository with your team" -ForegroundColor White
    } else {
        Write-Host ""
        Write-Host "❌ Push failed. This might be due to authentication." -ForegroundColor Red
        Write-Host "🔧 Manual push command:" -ForegroundColor Yellow
        Write-Host "git push -u origin main" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "❌ Failed to add remote origin." -ForegroundColor Red
    Write-Host "🔧 Manual Setup Commands:" -ForegroundColor Yellow
    Write-Host "git remote add origin $repoUrl" -ForegroundColor White
    Write-Host "git branch -M main" -ForegroundColor White
    Write-Host "git push -u origin main" -ForegroundColor White
}

Write-Host ""
Write-Host "💡 If authentication fails:" -ForegroundColor Yellow
Write-Host "- Use Personal Access Token instead of password" -ForegroundColor White
Write-Host "- Or set up SSH keys for authentication" -ForegroundColor White
Write-Host "- Guide: https://docs.github.com/en/authentication" -ForegroundColor White
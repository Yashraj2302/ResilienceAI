Write-Host "🛡️ ResilienceAI - GitHub Repository Creator" -ForegroundColor Blue
Write-Host "================================================" -ForegroundColor Blue
Write-Host ""

# Check if we already have a remote
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "✅ Repository already linked to: $existingRemote" -ForegroundColor Green
    Write-Host ""
    Write-Host "To push latest changes:" -ForegroundColor Yellow
    Write-Host "git add ." -ForegroundColor White
    Write-Host "git commit -m 'Update project'" -ForegroundColor White
    Write-Host "git push" -ForegroundColor White
    exit 0
}

Write-Host "📋 STEP 1: Create GitHub Repository" -ForegroundColor Yellow
Write-Host "1. Open: https://github.com/new" -ForegroundColor Cyan
Write-Host "2. Repository name: resilience-ai" -ForegroundColor White
Write-Host "3. Description: 🛡️ AI-powered crisis response and community resilience platform" -ForegroundColor White
Write-Host "4. Set to Public (recommended)" -ForegroundColor White
Write-Host "5. DO NOT initialize with README, .gitignore, or license" -ForegroundColor Red
Write-Host "6. Click 'Create repository'" -ForegroundColor White
Write-Host ""

$continue = Read-Host "Have you created the repository on GitHub? (y/n)"
if ($continue -ne "y" -and $continue -ne "Y") {
    Write-Host "Please create the repository first, then run this script again." -ForegroundColor Yellow
    exit 0
}

$username = Read-Host "Enter your GitHub username"
if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "❌ Username is required!" -ForegroundColor Red
    exit 1
}

$repoName = Read-Host "Enter repository name (press Enter for 'resilience-ai')"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "resilience-ai"
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "🔗 STEP 2: Linking Local Repository" -ForegroundColor Yellow
Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan
Write-Host ""

# Add remote origin
Write-Host "Adding remote origin..." -ForegroundColor White
git remote add origin $repoUrl

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to add remote. Repository might not exist." -ForegroundColor Red
    Write-Host "Please ensure you created the repository on GitHub first." -ForegroundColor Yellow
    exit 1
}

# Set main branch
Write-Host "Setting main branch..." -ForegroundColor White
git branch -M main

# Push to GitHub
Write-Host ""
Write-Host "🚀 STEP 3: Pushing to GitHub" -ForegroundColor Yellow
Write-Host "⚠️ You'll be prompted for GitHub credentials:" -ForegroundColor Yellow
Write-Host "   Username: $username" -ForegroundColor White
Write-Host "   Password: Use Personal Access Token (not GitHub password)" -ForegroundColor White
Write-Host ""
Write-Host "📝 Need a token? Go to: https://github.com/settings/tokens" -ForegroundColor Cyan
Write-Host ""

$pushConfirm = Read-Host "Ready to push? (y/n)"
if ($pushConfirm -eq "y" -or $pushConfirm -eq "Y") {
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "🎉 SUCCESS! Your ResilienceAI project is now on GitHub!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📍 Repository: https://github.com/$username/$repoName" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "🚀 Next Steps:" -ForegroundColor Green
        Write-Host "1. Visit your repository to see the project" -ForegroundColor White
        Write-Host "2. Share the link with your team" -ForegroundColor White
        Write-Host "3. Follow DEPLOYMENT.md for production deployment" -ForegroundColor White
        Write-Host "4. Star the repository if you like it! ⭐" -ForegroundColor White
    } else {
        Write-Host ""
        Write-Host "❌ Push failed. Common issues:" -ForegroundColor Red
        Write-Host "- Wrong username/token" -ForegroundColor Yellow
        Write-Host "- Repository doesn't exist" -ForegroundColor Yellow
        Write-Host "- Network connectivity issues" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "🔧 Manual commands to try:" -ForegroundColor Yellow
        Write-Host "git push -u origin main" -ForegroundColor White
    }
} else {
    Write-Host ""
    Write-Host "📝 Manual push command when ready:" -ForegroundColor Yellow
    Write-Host "git push -u origin main" -ForegroundColor White
}

Write-Host ""
Write-Host "💡 Helpful Links:" -ForegroundColor Blue
Write-Host "- Personal Access Tokens: https://github.com/settings/tokens" -ForegroundColor Cyan
Write-Host "- GitHub Authentication: https://docs.github.com/en/authentication" -ForegroundColor Cyan
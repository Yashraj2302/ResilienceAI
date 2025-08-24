Write-Host "Creating GitHub Repository for ResilienceAI" -ForegroundColor Blue
Write-Host ""

# Check current status
$remote = git remote get-url origin 2>$null
if ($remote) {
    Write-Host "Already linked to: $remote" -ForegroundColor Green
    exit 0
}

Write-Host "Step 1: Create repository on GitHub" -ForegroundColor Yellow
Write-Host "Go to: https://github.com/new" -ForegroundColor Cyan
Write-Host "Name: resilience-ai" -ForegroundColor White
Write-Host "Description: AI-powered crisis response platform" -ForegroundColor White
Write-Host "Make it Public, don't initialize with files" -ForegroundColor White
Write-Host ""

Read-Host "Press Enter after creating the repository on GitHub"

$username = Read-Host "Your GitHub username"
$repoUrl = "https://github.com/$username/resilience-ai.git"

Write-Host ""
Write-Host "Linking to: $repoUrl" -ForegroundColor Cyan

git remote add origin $repoUrl
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "Done! Visit: https://github.com/$username/resilience-ai" -ForegroundColor Green
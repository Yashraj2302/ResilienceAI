Write-Host "Linking ResilienceAI to GitHub" -ForegroundColor Blue
Write-Host ""

$username = Read-Host "Enter your GitHub username"
$repoName = "resilience-ai"
$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Adding remote origin..." -ForegroundColor Yellow
git remote add origin $repoUrl

Write-Host "Step 2: Setting main branch..." -ForegroundColor Yellow  
git branch -M main

Write-Host "Step 3: Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "You may be prompted for GitHub credentials" -ForegroundColor White
git push -u origin main

Write-Host ""
Write-Host "Success! Visit your repository at:" -ForegroundColor Green
Write-Host "https://github.com/$username/$repoName" -ForegroundColor White
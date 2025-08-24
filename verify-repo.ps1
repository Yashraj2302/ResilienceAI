Write-Host "🔍 Repository Verification" -ForegroundColor Blue
Write-Host ""

Write-Host "Current Git Configuration:" -ForegroundColor Yellow
Write-Host "Remote URL: " -NoNewline -ForegroundColor White
git remote get-url origin

Write-Host ""
Write-Host "Please verify these details:" -ForegroundColor Yellow
$username = Read-Host "Your GitHub username"
$repoName = Read-Host "Repository name (what you named it on GitHub)"

$correctUrl = "https://github.com/$username/$repoName.git"
Write-Host ""
Write-Host "Correct URL should be: $correctUrl" -ForegroundColor Cyan

$currentUrl = git remote get-url origin
if ($currentUrl -eq $correctUrl) {
    Write-Host "✅ URL is correct" -ForegroundColor Green
} else {
    Write-Host "❌ URL mismatch. Updating..." -ForegroundColor Red
    git remote set-url origin $correctUrl
    Write-Host "✅ Updated remote URL to: $correctUrl" -ForegroundColor Green
}

Write-Host ""
Write-Host "Testing repository access..." -ForegroundColor Yellow
Write-Host "Visit this URL to verify repository exists:" -ForegroundColor White
Write-Host "https://github.com/$username/$repoName" -ForegroundColor Cyan

Write-Host ""
$tryPush = Read-Host "Try pushing now? (y/n)"
if ($tryPush -eq "y" -or $tryPush -eq "Y") {
    Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
    git push -u origin main
}
# 🔗 Create GitHub Repository - Step by Step

## Step 1: Create Repository on GitHub

1. **Go to GitHub**: Open https://github.com in your browser
2. **Sign in** to your GitHub account
3. **Click the "+" icon** in the top right corner
4. **Select "New repository"**

## Step 2: Repository Settings

Fill in these details:
- **Repository name**: `resilience-ai`
- **Description**: `🛡️ AI-powered crisis response and community resilience platform`
- **Visibility**: Choose "Public" (recommended) or "Private"
- **Important**: DO NOT check any of these boxes:
  - ❌ Add a README file
  - ❌ Add .gitignore
  - ❌ Choose a license

5. **Click "Create repository"**

## Step 3: After Creating Repository

GitHub will show you a page with setup instructions. **Ignore those** and follow these commands instead:

```powershell
# Connect your local repository to GitHub
git remote add origin https://github.com/Yashraj2302/resilience-ai.git
git branch -M main
git push -u origin main
```

## Step 4: Authentication

When you run `git push`, you'll be prompted for credentials:
- **Username**: Your GitHub username (`Yashraj2302`)
- **Password**: Use a **Personal Access Token** (not your GitHub password)

### How to Create Personal Access Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Give it a name like "ResilienceAI"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

## Quick Commands

After creating the repository on GitHub, run:

```powershell
git remote add origin https://github.com/Yashraj2302/resilience-ai.git
git branch -M main  
git push -u origin main
```

## Verify Success

After pushing, visit: https://github.com/Yashraj2302/resilience-ai

You should see all your ResilienceAI files including:
- README.md with project description
- Complete backend and frontend code
- Docker configuration
- Deployment guides

---

**Need help?** The repository is ready to push - just create it on GitHub first!
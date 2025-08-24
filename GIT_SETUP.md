# 🔗 Git Setup Guide for ResilienceAI

Your ResilienceAI project is now initialized with Git! Follow these steps to connect it to GitHub.

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `resilience-ai` (or your preferred name)
   - **Description**: `🛡️ AI-powered crisis response and community resilience platform`
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/resilience-ai.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

## Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all your ResilienceAI files
3. The README.md will display the project description

## Alternative: Using GitHub CLI

If you have GitHub CLI installed:

```bash
# Create repository and push in one command
gh repo create resilience-ai --public --source=. --remote=origin --push
```

## Current Git Status

✅ **Already Done:**
- Git repository initialized
- All files added and committed
- .gitignore configured for Node.js/React projects
- MIT License added
- Initial commit with descriptive message

## Next Steps After GitHub Setup

1. **Clone on other machines**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/resilience-ai.git
   ```

2. **Set up development**:
   ```bash
   cd resilience-ai
   ./scripts/setup.ps1  # Windows
   # or
   ./scripts/setup.sh   # Linux/macOS
   ```

3. **Deploy to production**:
   - Follow [DEPLOYMENT.md](DEPLOYMENT.md) for Railway + Vercel setup
   - Use your GitHub repository URL for deployment

## Useful Git Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

## Repository Structure

Your GitHub repository will contain:
```
resilience-ai/
├── 📁 backend/          # Node.js API server
├── 📁 frontend/         # React application  
├── 📁 scripts/          # Setup and deployment scripts
├── 📁 deploy/           # Deployment configurations
├── 🐳 docker-compose.yml
├── 📖 README.md
├── 🚀 DEPLOYMENT.md
└── 📄 LICENSE
```

## Troubleshooting

**Authentication Issues:**
- Use personal access token instead of password
- Set up SSH keys for easier authentication
- Use GitHub Desktop for GUI-based Git management

**Push Rejected:**
```bash
git pull origin main --rebase
git push origin main
```

---

🎉 **Your ResilienceAI project is ready for GitHub!**

Once uploaded, you can share the repository link with others, set up CI/CD, and deploy to production platforms.
# ResilienceAI Deployment Guide

## 🚀 Complete Deployment Process

This guide will help you deploy the complete ResilienceAI platform with both frontend and backend.

### Current Status
- ✅ **Frontend**: Successfully deployed to Vercel
- ⏳ **Backend**: Ready for deployment to Railway
- ✅ **Repository**: https://github.com/Yashraj2302/ResilienceAI

## 📋 Prerequisites

1. **Accounts Required:**
   - [Vercel Account](https://vercel.com) (for frontend)
   - [Railway Account](https://railway.app) (for backend)
   - [MongoDB Atlas Account](https://mongodb.com/atlas) (for database)
   - [OpenAI Account](https://openai.com) (optional, for AI features)

2. **CLI Tools:**
   - Node.js and npm
   - Git
   - Vercel CLI: `npm install -g vercel`
   - Railway CLI: `npm install -g @railway/cli`

## 🎯 Frontend Deployment (Completed)

The frontend is already deployed and live at:
**https://resilience-l5g0cfwat-yashrajs-projects-8014af01.vercel.app**

### Frontend Features Deployed:
- ✅ Professional marketing website with Homepage, About, Solutions, Features
- ✅ Interactive demo with crisis response simulation
- ✅ User authentication (login/register)
- ✅ Protected dashboard routes
- ✅ Responsive design with 3D effects
- ✅ Modern UI with animations

## 🔧 Backend Deployment (Next Step)

### Step 1: Deploy Backend to Railway

```powershell
# Run the backend deployment script
./scripts/deploy-backend.ps1
```

### Step 2: Configure Environment Variables in Railway

After deployment, set these environment variables in your Railway dashboard:

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/resilience-ai

# Authentication
JWT_SECRET=your-super-secret-jwt-key-here

# CORS
FRONTEND_URL=https://resilience-l5g0cfwat-yashrajs-projects-8014af01.vercel.app

# AI Services (Optional)
OPENAI_API_KEY=your-openai-api-key-here

# Port (Railway sets this automatically)
PORT=5000
```

### Step 3: Update Frontend API URL

Once your backend is deployed, update the `VITE_API_URL` environment variable in Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your ResilienceAI project
3. Go to Settings → Environment Variables
4. Add: `VITE_API_URL` = `https://your-railway-backend-url.railway.app`
5. Redeploy the frontend

## 🗄️ Database Setup (MongoDB Atlas)

1. Create a MongoDB Atlas cluster
2. Create a database user
3. Whitelist your IP addresses (or use 0.0.0.0/0 for all IPs)
4. Get your connection string
5. Add it to Railway as `MONGODB_URI`

## 🔐 Security Configuration

### JWT Secret
Generate a secure JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### CORS Configuration
The backend is configured to accept requests from your Vercel frontend URL.

## 🧪 Testing the Deployment

### 1. Test Frontend
- Visit: https://resilience-l5g0cfwat-yashrajs-projects-8014af01.vercel.app
- Navigate through all pages (Home, About, Solutions, Features, Demo)
- Test user registration and login

### 2. Test Backend (after deployment)
- Check health endpoint: `https://your-backend-url/api/health`
- Test authentication endpoints
- Verify database connections

### 3. Test Full Integration
- Register a new user
- Login and access dashboard
- Test real-time features
- Verify all API calls work

## 📊 Monitoring and Maintenance

### Vercel Monitoring
- Check deployment status in Vercel dashboard
- Monitor build logs and performance
- Set up custom domains if needed

### Railway Monitoring
- Monitor backend performance in Railway dashboard
- Check logs for errors
- Monitor database connections

### Database Monitoring
- Monitor MongoDB Atlas metrics
- Set up alerts for connection issues
- Regular backup verification

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Verify `FRONTEND_URL` in Railway matches your Vercel URL
   - Check CORS configuration in backend

2. **Database Connection Issues**
   - Verify MongoDB URI format
   - Check IP whitelist in MongoDB Atlas
   - Ensure database user has proper permissions

3. **Authentication Issues**
   - Verify JWT_SECRET is set in Railway
   - Check token expiration settings
   - Verify API endpoints are accessible

4. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

## 📞 Support

If you encounter issues:
1. Check the deployment logs in Vercel/Railway dashboards
2. Verify all environment variables are set correctly
3. Test API endpoints individually
4. Check database connectivity

## 🎉 Success Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway
- [ ] Database connected (MongoDB Atlas)
- [ ] Environment variables configured
- [ ] CORS properly set up
- [ ] Authentication working
- [ ] All pages accessible
- [ ] Real-time features working
- [ ] Custom domain configured (optional)

## 🔗 Important URLs

- **Live Application**: https://resilience-l5g0cfwat-yashrajs-projects-8014af01.vercel.app
- **GitHub Repository**: https://github.com/Yashraj2302/ResilienceAI
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railway Dashboard**: https://railway.app/dashboard

---

**Next Step**: Run `./scripts/deploy-backend.ps1` to deploy the backend to Railway!
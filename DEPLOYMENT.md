# 🚀 ResilienceAI Deployment Guide

This guide covers multiple deployment options for the ResilienceAI platform.

## Quick Deploy Options

### Option 1: Railway + Vercel (Recommended)
**Backend on Railway, Frontend on Vercel**

#### Backend (Railway)
1. Create account at [Railway](https://railway.app)
2. Install Railway CLI: `npm install -g @railway/cli`
3. Login: `railway login`
4. Deploy backend:
   ```bash
   cd backend
   railway init
   railway up
   ```
5. Add environment variables in Railway dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Random secure string
   - `WEATHER_API_KEY`: OpenWeatherMap API key
   - `FRONTEND_URL`: Your Vercel frontend URL

#### Frontend (Vercel)
1. Create account at [Vercel](https://vercel.com)
2. Install Vercel CLI: `npm install -g vercel`
3. Deploy frontend:
   ```bash
   cd frontend
   vercel --prod
   ```
4. Set environment variable:
   - `VITE_API_URL`: Your Railway backend URL + `/api`

### Option 2: Docker Compose (Local/VPS)
```bash
# Clone and setup
git clone <your-repo>
cd resilience-ai

# Copy environment file
cp backend/.env.example backend/.env
# Edit backend/.env with your settings

# Start all services
docker-compose up -d

# Access:
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# MongoDB: localhost:27017
```

### Option 3: Manual Setup
```bash
# Install dependencies
npm run install:all

# Setup MongoDB (local or Atlas)
# Copy and configure environment
cp backend/.env.example backend/.env

# Start development
npm run dev
```

## Environment Variables

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/resilience-ai
JWT_SECRET=your-super-secret-jwt-key-change-in-production
WEATHER_API_KEY=your-openweather-api-key
FRONTEND_URL=https://your-frontend-domain.com
```

### Frontend
```env
VITE_API_URL=https://your-backend-domain.com/api
```

## Database Setup

### MongoDB Atlas (Recommended)
1. Create account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create new cluster (free tier available)
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for development)
5. Get connection string and add to `MONGODB_URI`

### Local MongoDB
```bash
# Install MongoDB
# macOS: brew install mongodb-community
# Ubuntu: sudo apt install mongodb
# Windows: Download from mongodb.com

# Start MongoDB
mongod --dbpath /path/to/data/directory
```

## External APIs

### OpenWeatherMap API
1. Sign up at [OpenWeatherMap](https://openweathermap.org/api)
2. Get free API key
3. Add to `WEATHER_API_KEY` environment variable

## Production Checklist

- [ ] Set strong JWT_SECRET
- [ ] Configure CORS origins
- [ ] Set up SSL certificates
- [ ] Configure rate limiting
- [ ] Set up monitoring (logs, metrics)
- [ ] Configure backup strategy for database
- [ ] Set up CI/CD pipeline
- [ ] Configure domain names
- [ ] Test all emergency scenarios
- [ ] Set up error tracking (Sentry, etc.)

## Scaling Considerations

### High Availability
- Use MongoDB replica sets
- Deploy backend to multiple regions
- Use CDN for frontend assets
- Implement load balancing

### Performance
- Enable database indexing
- Implement caching (Redis)
- Optimize AI model inference
- Use WebSocket connection pooling

## Monitoring & Maintenance

### Health Checks
- Backend: `GET /api/health`
- Database connectivity
- External API availability
- WebSocket connections

### Logs to Monitor
- Emergency creation/updates
- AI prediction accuracy
- Resource allocation efficiency
- User authentication events
- System performance metrics

## Troubleshooting

### Common Issues
1. **Database Connection Failed**
   - Check MONGODB_URI format
   - Verify network connectivity
   - Check authentication credentials

2. **Weather API Not Working**
   - Verify WEATHER_API_KEY
   - Check API quota limits
   - Ensure internet connectivity

3. **WebSocket Connection Issues**
   - Check CORS configuration
   - Verify frontend/backend URLs
   - Check firewall settings

4. **Build Failures**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify all environment variables

### Support
- Check GitHub issues
- Review application logs
- Test with minimal configuration
- Verify all dependencies are installed

## Security Notes

- Never commit .env files
- Use HTTPS in production
- Implement rate limiting
- Validate all user inputs
- Keep dependencies updated
- Use secure session management
- Implement proper error handling
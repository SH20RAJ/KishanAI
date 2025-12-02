# 🚀 KisanAI Deployment Guide

> **Complete deployment guide for KisanAI platform across different environments**

---

## 📋 **Table of Contents**

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Environment Configuration](#environment-configuration)
4. [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
5. [Backend Deployment (Railway)](#backend-deployment-railway)
6. [Database Setup](#database-setup)
7. [AI Model Deployment](#ai-model-deployment)
8. [Monitoring & Logging](#monitoring--logging)
9. [Production Optimization](#production-optimization)
10. [Troubleshooting](#troubleshooting)

---

## ✅ **Prerequisites**

### **Required Software**
```bash
# Node.js (v20 LTS)
node --version  # Should be v20.x.x

# npm (comes with Node.js)
npm --version   # Should be 10.x.x

# Git
git --version

# Docker (optional, for local database)
docker --version

# Python (for AI model training)
python --version  # Should be 3.9+
```

### **Required Accounts**
- **GitHub** account for version control
- **Vercel** account for frontend deployment
- **Railway** account for backend deployment
- **PostgreSQL** database (Railway/Neon/Supabase)
- **Redis** instance (Upstash/Railway)
- **OpenAI** API key for chat functionality
- **Google Translate** API key
- **OpenWeatherMap** API key

---

## 💻 **Local Development Setup**

### **1. Clone Repository**
```bash
git clone https://github.com/your-username/kisanai.git
cd kisanai
```

### **2. Install Dependencies**
```bash
# Install frontend dependencies
npm install

# Install backend dependencies (if separate repo)
cd backend
npm install
cd ..
```

### **3. Environment Variables**
Create `.env.local` file in the root directory:

```bash
# Frontend Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=KisanAIBot
NEXT_PUBLIC_GOOGLE_TRANSLATE_KEY=your_google_translate_key

# Backend Environment Variables (if same repo)
DATABASE_URL=postgresql://username:password@localhost:5432/kisanai
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-super-secret-jwt-key
OPENAI_API_KEY=sk-your-openai-api-key
WEATHER_API_KEY=your-openweathermap-key
BHASHINI_API_KEY=your-bhashini-key

# Telegram Bot
TELEGRAM_BOT_TOKEN=your-telegram-bot-token

# File Upload
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_BUCKET_NAME=kisanai-uploads
AWS_REGION=ap-south-1

# Monitoring
SENTRY_DSN=https://your-sentry-dsn
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### **4. Database Setup**
```bash
# Start PostgreSQL with Docker
docker run --name kisanai-postgres \
  -e POSTGRES_DB=kisanai \
  -e POSTGRES_USER=kisanai \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  -d postgres:16

# Start Redis with Docker
docker run --name kisanai-redis \
  -p 6379:6379 \
  -d redis:7-alpine

# Run database migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

### **5. Start Development Servers**
```bash
# Start frontend (Next.js)
npm run dev

# Start backend (in separate terminal)
cd backend
npm run dev

# Start Telegram bot (in separate terminal)
cd telegram-bot
npm run dev
```

Your application should now be running at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Database**: localhost:5432
- **Redis**: localhost:6379

---

## ⚙️ **Environment Configuration**

### **Development (.env.local)**
```bash
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
DATABASE_URL=postgresql://localhost:5432/kisanai_dev
REDIS_URL=redis://localhost:6379
```

### **Staging (.env.staging)**
```bash
NODE_ENV=staging
NEXT_PUBLIC_API_URL=https://kisanai-api-staging.railway.app/api/v1
DATABASE_URL=${DATABASE_URL}
REDIS_URL=${REDIS_URL}
```

### **Production (.env.production)**
```bash
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://kisanai-api.railway.app/api/v1
DATABASE_URL=${DATABASE_URL}
REDIS_URL=${REDIS_URL}
```

---

## 🌐 **Frontend Deployment (Vercel)**

### **1. Connect GitHub Repository**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select the framework: **Next.js**

### **2. Configure Build Settings**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### **3. Environment Variables**
Add these in Vercel dashboard under Settings > Environment Variables:

```bash
NEXT_PUBLIC_API_URL=https://kisanai-api.railway.app/api/v1
NEXT_PUBLIC_TELEGRAM_BOT_USERNAME=KisanAIBot
NEXT_PUBLIC_GOOGLE_TRANSLATE_KEY=your_google_translate_key
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

### **4. Custom Domain (Optional)**
1. Go to Settings > Domains
2. Add your custom domain: `kisanai.com`
3. Configure DNS records as instructed

### **5. Deployment Automation**
Create `vercel.json` in root directory:

```json
{
  "framework": "nextjs",
  "regions": ["bom1", "sin1"],
  "env": {
    "NEXT_PUBLIC_API_URL": "@kisanai-api-url"
  },
  "build": {
    "env": {
      "NEXT_TELEMETRY_DISABLED": "1"
    }
  },
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 30
    }
  },
  "redirects": [
    {
      "source": "/telegram",
      "destination": "https://t.me/Kishan_aibot",
      "permanent": true
    },
    {
      "source": "/whatsapp",
      "destination": "https://wa.me/your-whatsapp-number",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        },
        {
          "key": "Access-Control-Allow-Methods",
          "value": "GET, POST, PUT, DELETE, OPTIONS"
        },
        {
          "key": "Access-Control-Allow-Headers",
          "value": "Content-Type, Authorization"
        }
      ]
    }
  ]
}
```

---

## 🚄 **Backend Deployment (Railway)**

### **1. Create Railway Project**
1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Connect your repository

### **2. Configure Service**
Create `railway.toml` in backend directory:

```toml
[build]
builder = "nixpacks"
buildCommand = "npm run build"

[deploy]
startCommand = "npm start"
restartPolicyType = "on_failure"
restartPolicyMaxRetries = 3

[env]
NODE_ENV = "production"
PORT = "3000"
```

### **3. Environment Variables**
Add these in Railway dashboard:

```bash
# Database
DATABASE_URL=${{Postgres.DATABASE_URL}}
REDIS_URL=${{Redis.REDIS_URL}}

# Authentication
JWT_SECRET=your-super-secret-jwt-key-production
JWT_EXPIRES_IN=7d

# External APIs
OPENAI_API_KEY=sk-your-openai-api-key
WEATHER_API_KEY=your-openweathermap-key
BHASHINI_API_KEY=your-bhashini-key
GOOGLE_TRANSLATE_KEY=your-google-translate-key

# Telegram
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_WEBHOOK_URL=https://kisanai-api.railway.app/webhook/telegram

# File Storage
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_BUCKET_NAME=kisanai-uploads-prod
AWS_REGION=ap-south-1

# Monitoring
SENTRY_DSN=https://your-sentry-dsn
LOG_LEVEL=info
```

### **4. Database Migration**
```bash
# Connect to Railway database
railway connect

# Run migrations
npm run db:migrate:production

# Seed production data
npm run db:seed:production
```

### **5. Custom Domain**
1. Go to Railway project settings
2. Click "Generate Domain" or add custom domain
3. Update DNS records if using custom domain

---

## 🗄️ **Database Setup**

### **PostgreSQL on Railway**

#### **1. Create PostgreSQL Service**
1. In Railway dashboard, click "Add Service"
2. Select "PostgreSQL"
3. Note the connection details

#### **2. Database Schema**
```sql
-- Create database
CREATE DATABASE kisanai_production;

-- Create user
CREATE USER kisanai_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE kisanai_production TO kisanai_user;

-- Connect to database
\c kisanai_production;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables (run your migration files)
-- Tables: users, detections, conversations, weather_cache, market_prices
```

#### **3. Database Migrations**
Create migration files in `backend/migrations/`:

```javascript
// 001_initial_schema.js
exports.up = async function(knex) {
  // Create users table
  await knex.schema.createTable('users', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('phone', 15).unique().notNullable();
    table.string('name', 100);
    table.string('language', 10).defaultTo('en');
    table.jsonb('location');
    table.timestamps(true, true);
  });

  // Create detections table
  await knex.schema.createTable('detections', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE');
    table.text('image_url').notNullable();
    table.string('detected_disease', 100);
    table.float('confidence');
    table.string('crop_type', 50);
    table.jsonb('recommendations');
    table.timestamps(true, true);
  });

  // Add other tables...
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('detections');
  await knex.schema.dropTableIfExists('users');
};
```

### **Redis Setup**
```bash
# Redis configuration for production
redis_config = {
  maxmemory: "256mb",
  maxmemory_policy: "allkeys-lru",
  timeout: 0,
  tcp_keepalive: 300,
  databases: 16
}
```

---

## 🤖 **AI Model Deployment**

### **1. Model Optimization**
```python
# Convert model to TensorFlow Lite
import tensorflow as tf

# Load trained model
model = tf.keras.models.load_model('disease_detection_model.h5')

# Convert to TensorFlow Lite
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]
converter.target_spec.supported_types = [tf.lite.constants.FLOAT16]

tflite_model = converter.convert()

# Save optimized model
with open('disease_detection_model.tflite', 'wb') as f:
    f.write(tflite_model)
```

### **2. Model Serving**
```javascript
// Node.js TensorFlow Lite inference
const tf = require('@tensorflow/tfjs-node');

class DiseaseDetectionService {
  constructor() {
    this.model = null;
    this.loadModel();
  }

  async loadModel() {
    try {
      this.model = await tf.loadLayersModel('file://./models/disease_detection/model.json');
      console.log('Disease detection model loaded successfully');
    } catch (error) {
      console.error('Error loading model:', error);
    }
  }

  async predictDisease(imageBuffer) {
    if (!this.model) {
      throw new Error('Model not loaded');
    }

    // Preprocess image
    const tensor = tf.node.decodeImage(imageBuffer, 3)
      .resizeBilinear([224, 224])
      .expandDims(0)
      .div(255.0);

    // Make prediction
    const prediction = await this.model.predict(tensor).data();
    
    // Get top 3 predictions
    const topPredictions = this.getTopPredictions(prediction, 3);
    
    // Cleanup
    tensor.dispose();
    
    return topPredictions;
  }

  getTopPredictions(predictions, k) {
    const indexed = Array.from(predictions)
      .map((prob, index) => ({ index, probability: prob }))
      .sort((a, b) => b.probability - a.probability)
      .slice(0, k);

    return indexed.map(item => ({
      disease: this.diseaseLabels[item.index],
      confidence: item.probability,
      treatments: this.getTreatments(item.index)
    }));
  }
}
```

### **3. Model Updates**
```bash
# Model update pipeline
#!/bin/bash

# Download latest model from training server
curl -O https://models.kisanai.com/latest/disease_detection_model.tflite

# Validate model
python validate_model.py disease_detection_model.tflite

# Deploy to production
docker build -t kisanai-api:latest .
docker push kisanai-api:latest

# Rolling update
kubectl set image deployment/kisanai-api api=kisanai-api:latest
```

---

## 📊 **Monitoring & Logging**

### **1. Application Monitoring**
```javascript
// Sentry error tracking
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

// Custom error handler
app.use(Sentry.Handlers.errorHandler());
```

### **2. Performance Monitoring**
```javascript
// Custom metrics collection
const client = require('prom-client');

// Create metrics
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status']
});

const diseaseDetectionLatency = new client.Histogram({
  name: 'disease_detection_latency_seconds',
  help: 'Latency of disease detection in seconds'
});

// Middleware to track metrics
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, res.statusCode)
      .observe(duration);
  });
  
  next();
});
```

### **3. Health Checks**
```javascript
// Health check endpoint
app.get('/health', async (req, res) => {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      database: await checkDatabase(),
      redis: await checkRedis(),
      ai_model: await checkAIModel(),
      external_apis: await checkExternalAPIs()
    }
  };

  const isHealthy = Object.values(health.services).every(service => service.status === 'ok');
  res.status(isHealthy ? 200 : 503).json(health);
});

async function checkDatabase() {
  try {
    await knex.raw('SELECT 1');
    return { status: 'ok', latency: '< 10ms' };
  } catch (error) {
    return { status: 'error', error: error.message };
  }
}
```

### **4. Logging Configuration**
```javascript
// Winston logger setup
const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'kisanai-api' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});
```

---

## ⚡ **Production Optimization**

### **1. Caching Strategy**
```javascript
// Redis caching implementation
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

class CacheService {
  static async get(key) {
    try {
      const value = await client.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Cache get error:', error);
      return null;
    }
  }

  static async set(key, value, ttl = 3600) {
    try {
      await client.setEx(key, ttl, JSON.stringify(value));
    } catch (error) {
      console.error('Cache set error:', error);
    }
  }

  static async del(key) {
    try {
      await client.del(key);
    } catch (error) {
      console.error('Cache delete error:', error);
    }
  }
}

// Cache middleware
const cacheMiddleware = (duration) => {
  return async (req, res, next) => {
    const key = `cache:${req.originalUrl}`;
    const cached = await CacheService.get(key);
    
    if (cached) {
      return res.json(cached);
    }
    
    res.sendResponse = res.json;
    res.json = (body) => {
      CacheService.set(key, body, duration);
      res.sendResponse(body);
    };
    
    next();
  };
};

// Use caching for appropriate endpoints
app.get('/api/v1/weather/:location', cacheMiddleware(1800), getWeather);
app.get('/api/v1/market-prices', cacheMiddleware(3600), getMarketPrices);
```

### **2. Database Optimization**
```sql
-- Create indexes for better performance
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_detections_user_id ON detections(user_id);
CREATE INDEX idx_detections_created_at ON detections(created_at);
CREATE INDEX idx_conversations_user_id ON conversations(user_id);
CREATE INDEX idx_weather_cache_location ON weather_cache(location);
CREATE INDEX idx_market_prices_crop_date ON market_prices(crop_name, date);

-- Partitioning for large tables
CREATE TABLE detections_2025 PARTITION OF detections
FOR VALUES FROM ('2025-01-01') TO ('2026-01-01');

-- Database connection pooling
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### **3. CDN Configuration**
```javascript
// Cloudflare CDN settings for static assets
const cdnConfig = {
  cache_level: 'aggressive',
  browser_cache_ttl: 86400, // 24 hours
  edge_cache_ttl: 604800,   // 7 days
  minify: {
    css: true,
    js: true,
    html: true
  },
  compression: 'gzip',
  http2: true,
  http3: true
};
```

---

## 🔧 **Troubleshooting**

### **Common Issues & Solutions**

#### **1. Build Failures**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be v20.x.x

# Build with verbose output
npm run build --verbose
```

#### **2. Database Connection Issues**
```bash
# Check database connection
psql $DATABASE_URL

# Test connection from application
node -e "const { Pool } = require('pg'); const pool = new Pool({connectionString: process.env.DATABASE_URL}); pool.query('SELECT NOW()', (err, res) => { console.log(err ? err : res.rows[0]); pool.end(); });"

# Check if database exists
psql $DATABASE_URL -c "\l"
```

#### **3. Redis Connection Issues**
```bash
# Test Redis connection
redis-cli -u $REDIS_URL ping

# Check Redis memory usage
redis-cli -u $REDIS_URL info memory

# Clear Redis cache if needed
redis-cli -u $REDIS_URL flushall
```

#### **4. AI Model Loading Issues**
```bash
# Check model file exists
ls -la models/disease_detection_model.tflite

# Validate model format
python -c "import tensorflow as tf; interpreter = tf.lite.Interpreter('models/disease_detection_model.tflite'); print('Model is valid')"

# Check model size
du -h models/disease_detection_model.tflite
```

#### **5. Environment Variables**
```bash
# Check if all required env vars are set
env | grep -E "(DATABASE_URL|REDIS_URL|OPENAI_API_KEY|TELEGRAM_BOT_TOKEN)"

# Validate API keys
curl -H "Authorization: Bearer $OPENAI_API_KEY" https://api.openai.com/v1/models

# Test Telegram bot token
curl https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/getMe
```

### **Performance Issues**
```bash
# Check memory usage
free -h

# Check CPU usage
top

# Check disk space
df -h

# Monitor database connections
psql $DATABASE_URL -c "SELECT count(*) FROM pg_stat_activity;"

# Check Redis memory
redis-cli -u $REDIS_URL info memory | grep used_memory_human
```

### **Deployment Rollback**
```bash
# Vercel rollback
vercel --prod --force

# Railway rollback
railway rollback

# Git rollback
git revert HEAD
git push origin main
```

---

## 📋 **Deployment Checklist**

### **Pre-Deployment**
- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] AI models validated
- [ ] Security scan completed
- [ ] Performance tests passed

### **During Deployment**
- [ ] Database backup created
- [ ] Deployment executed
- [ ] Health checks passing
- [ ] Monitoring alerts configured
- [ ] CDN cache cleared if needed

### **Post-Deployment**
- [ ] Application functionality verified
- [ ] API endpoints responding
- [ ] Database queries optimized
- [ ] Error rates within normal range
- [ ] Performance metrics collected
- [ ] User acceptance testing completed

---

## 📞 **Support & Maintenance**

### **Monitoring Dashboard**
- **Uptime**: https://status.kisanai.com
- **Metrics**: Grafana dashboard
- **Logs**: Sentry dashboard
- **Performance**: Google PageSpeed Insights

### **Maintenance Schedule**
- **Daily**: Health checks, error monitoring
- **Weekly**: Performance review, capacity planning
- **Monthly**: Security updates, dependency updates
- **Quarterly**: Disaster recovery testing

### **Emergency Contacts**
- **DevOps Lead**: devops@kisanai.com
- **Backend Lead**: backend@kisanai.com
- **Database Admin**: dba@kisanai.com
- **Security Team**: security@kisanai.com

---

*Last updated: June 30, 2025*
*Document version: 1.0*
*Next review: September 30, 2025*

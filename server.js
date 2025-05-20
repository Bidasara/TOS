import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Connect to MongoDB
console.log('Attempting to connect to MongoDB...');
console.log('MongoDB URI:', process.env.MONGODB_URI ? 'URI is set' : 'URI is not set');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/secure-auth-db').then(() => {
  console.log('Connected to MongoDB successfully');
  console.log('Database name:', mongoose.connection.name);
  console.log('Host:', mongoose.connection.host);
}).catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

// Security middleware
// Set security HTTP headers
app.use(helmet());

// Enable CORS with secure configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*', // In production, specify your frontend URL
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Rate limiting to prevent brute force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' })); // Limit body size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Prevent parameter pollution
app.use(hpp({
  whitelist: [] // Add parameters to whitelist if needed
}));

// API routes 
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot find ${req.originalUrl} on this server`
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

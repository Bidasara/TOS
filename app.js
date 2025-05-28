import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.middleware.js';
import notFoundHandler from './middlewares/notFound.middleware.js';

dotenv.config();
const app = express();

// Setting up CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({limit: '16kb'}));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Security middleware
app.use(helmet());

// Importing routes
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js';
import dataRoutes from './routes/data.routes.js';

// API routes 
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/problemData',dataRoutes);

// Error handling middleware
app.use(notFoundHandler)
app.use(errorHandler);

export {app};

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index.js'
import { apiLimiter } from './middleware/rateLimit.middleware.js';
import { errorHandler } from './middleware/error.middleware.js';

const app = express();

// security middleware
app.use(helmet());
app.use(cors());

// logging middleware
app.use(morgan("dev"));

// body parser
app.use(express.json());

// rate limiting middleware - apply rate limits to api routes
app.use("/api", apiLimiter);

// API routes
app.use("/api", routes);

// health check route
app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

// error handler
app.use(errorHandler)

export default app;
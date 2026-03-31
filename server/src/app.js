import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { apiLimiter } from './middleware/rateLimit.middleware.js';

const app = express();

// security middleware
app.use(helmet());
app.use(cors());

// logging middleware
app.use(morgan("dev"));

// body parser
app.use(express.json());

// rate limiting middleware
app.use("/api", apiLimiter);

// health check route
app.get("/health", (req, res) => {
    res.json({ status: "OK" });
});

export default app;
import app from './app.js';
import { ENV } from './config/env.js';
import { logger } from './utils/logger.js';

const PORT = ENV.PORT || 5050;

app.listen(PORT, () => {
    logger.info(`Server running on Port: ${PORT}`)
});
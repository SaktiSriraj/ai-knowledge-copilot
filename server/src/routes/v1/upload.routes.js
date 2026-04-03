import { Router } from 'express';
import multer from 'multer';

import { requireAuth } from '../../middleware/auth.middleware.js';
import { uploadController } from '../../controllers/upload.controller.js';

const router = Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post(
    "/", 
    requireAuth, 
    upload.single("file"), 
    uploadController
);

export default router;
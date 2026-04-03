import { Router } from 'express';
import { requireAuth } from '../../middleware/auth.middleware.js';

const router = Router();

router.post("/", requireAuth, (req, res) => {
    res.json({ 
        message: "Upload route working", 
        userId: req.user.id
    });
});

export default router;
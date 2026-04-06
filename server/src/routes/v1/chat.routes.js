import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import { chatController } from "../../controllers/chat.controller.js";

const router = Router();

router.post("/", requireAuth, chatController);

export default router;
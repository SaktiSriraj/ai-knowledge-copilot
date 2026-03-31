import { Router } from "express";

import authRoutes from "./auth.routes.js"
import uploadRoutes from "./upload.routes.js"
import chatRoutes from "./chat.routes.js"

const router = Router();

router.use("/auth", authRoutes);
router.use("/upload", uploadRoutes);
router.use("/chat", chatRoutes);

export default router;
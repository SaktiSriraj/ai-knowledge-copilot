import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
    res.json({ message: "Chat route working" });
});

export default router;
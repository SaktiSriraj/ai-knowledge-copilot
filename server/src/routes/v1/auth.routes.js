import { Router } from 'express';

const router = Router();

router.get("/me", (req, res) => {
    res.json({ message: "Auth route working" });
});

export default router;
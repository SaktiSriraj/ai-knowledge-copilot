import { handleChat } from "../services/chat.service.js";

export const chatController = async (req, res, next) => {
    try {
        const { query } = req.body;

        const result = await handleChat({
            query,
            userId: req.user.id
        })

        res.json(result)
    } catch (err) {
        next(err)
    }
}
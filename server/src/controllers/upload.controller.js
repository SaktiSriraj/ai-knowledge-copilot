import { processUpload } from "../services/upload.service.js";

export const uploadController = async (req, res, next) => {
    try {
        const result = await processUpload(req.file, req.user.id);

        res.json({
            message: "File Processed Successfully",
            ...result
        })
    } catch (err) {
        next(err);
    }
};
import { parseFile } from "../rag/ingestion/parse.js";

export const processUpload = async (file, userId) => {
    if (!file) {
        throw new Error("No file uploaded!")
    }

    const text = await parseFile(file);

    return {
        text,
        length: text.length,
        userId
    };
};
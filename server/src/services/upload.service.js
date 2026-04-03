import { parseFile } from "../rag/ingestion/parse.js";
import { chunkText } from "../rag/ingestion/chunk.js";

export const processUpload = async (file, userId) => {
    if (!file) {
        throw new Error("No file uploaded!")
    }

    const text = await parseFile(file);

    const chunks = chunkText(text);

    return {
        chunks,
        chunksCount: chunks.length,
        length: text.length,
        userId
    };
};
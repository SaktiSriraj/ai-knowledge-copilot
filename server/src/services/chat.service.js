import { retrieveRelevantChunks } from "../rag/retrieval/retrieve.js";

export const handleChat = async ({ query, userId }) => {
    if (!query) {
        throw new Error("Query is required")
    }

    const chunks = await retrieveRelevantChunks({
        query,
        userId,
        topK: 5
    });

    return {
        query,
        context: chunks
    }
}
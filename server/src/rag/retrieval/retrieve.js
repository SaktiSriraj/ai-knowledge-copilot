import { qdrant } from "../../config/qdrant.js"
import { embedText } from "../../rag/embeddings/embed.js";

const COLLECTION_NAME = "documents";

export const retrieveRelevantChunks = async ({
    query,
    userId,
    topK = 5
}) => {
    if (!query) {
        throw new Error("Query is required");
    }

    // convert query -> embedding
    const [queryEmbedding] = await embedText([query]);

    // search in vectorDB
    const results = await qdrant.search(COLLECTION_NAME, {
        vector: queryEmbedding,
        limit: topK,
        filter: {
            must: [
                {
                    key: "userId",
                    match: {
                        value: userId
                    }
                }
            ]
        }
    })

    // extract text chunks
    return results.map((item) => ({
        text: item.payload.text,
        score: item.score
    }))
}
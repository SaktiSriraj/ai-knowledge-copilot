import { parseFile } from "../rag/ingestion/parse.js";
import { chunkText } from "../rag/ingestion/chunk.js";
import { embedText } from "../rag/embeddings/embed.js";
import { qdrant } from "../config/qdrant.js";
import { v4 as uuidv4 } from "uuid";

const COLLECTION_NAME = "documents";

export const ensureCollection = async (vectorSize) => {
    const collections = await qdrant.getCollections();

    const exists = collections.collections.find(
        (c) => c.name === COLLECTION_NAME
    );

    if(!exists) {
        await qdrant.createCollection(COLLECTION_NAME, {
            vectors: {
                size: vectorSize,
                distance: 'Cosine'
            },
        });
    }
};

export const processUpload = async (file, userId) => {
    if (!file) {
        throw new Error("No file uploaded!")
    }

    const text = await parseFile(file);
    const chunks = chunkText(text);

    const embeddings = await embedText(chunks);

    const vectorSize = embeddings[0].length;

    await ensureCollection(vectorSize);

    const points = chunks.map((chunk, i) => ({
        id: uuidv4(),
        vector: embeddings[i],
        payload: {
            text: chunk,
            userId,
        }
    }));

    await qdrant.upsert(COLLECTION_NAME, {
        points,
    });

    return {
        message: "Stored in vectorDB",
        chunkCount: chunks.length
    };
};
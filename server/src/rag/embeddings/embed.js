import { openai } from "../../config/llm.js";

const BATCH_SIZE = 10;

export const embedText = async (texts) => {

    const allEmbeddings = [];

    for (let i = 0; i < texts.length; i += BATCH_SIZE) {
        const batch = texts.slice(i, i + BATCH_SIZE);
        
        const formattedInput = batch.map((text) => ({
            content: [{ type: "text", text }],
        }));

        try {
            const response = await openai.embeddings.create({
                model: "nvidia/llama-nemotron-embed-vl-1b-v2:free",
                input: formattedInput,
                encoding_format: "float",
            });
            
            console.log("Embedding Response:", response);
            
            if (!response.data) {
                throw new Error(
                    `Embedding failed: ${response.error?.message || "Unknown error"}`
                );
            }

            const batchEmbeddings = response.data.map((e) => e.embedding);

            allEmbeddings.push(...batchEmbeddings);
        } catch (error) {
            console.error("Embedding Batch Failed", error.message);
        }
    }
    return allEmbeddings;
};
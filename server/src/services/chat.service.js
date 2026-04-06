import { retrieveRelevantChunks } from "../rag/retrieval/retrieve.js";
import { buildRagPrompt } from "../constants/prompts.js";
import { openai } from "../config/llm.js";

export const handleChat = async ({ query, userId }) => {
    if (!query) {
        throw new Error("Query is required")
    }

    // retrieve context
    const chunks = await retrieveRelevantChunks({
        query,
        userId,
        topK: 5
    });

    // build prompt
    const prompt = buildRagPrompt(query, chunks);

    // call llm
    const response = await openai.chat.completions.create({
        model: "nvidia/nemotron-3-super-120b-a12b:free",
        messages: [
            {
                role: "user",
                content: prompt
            },
        ],
    });

    const answer = response.choices[0].message.content;

    return {
        query,
        answer,
        sources: chunks
    };
};
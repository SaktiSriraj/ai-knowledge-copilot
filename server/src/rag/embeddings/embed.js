import { openai } from "../../config/llm.js";

export const embedText = async (texts) => {
 
  const formattedInput = texts.map((text) => ({
    content: [
      {
        type: "text",
        text,
      },
    ],
  }));

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

  return response.data.map((item) => item.embedding);
};
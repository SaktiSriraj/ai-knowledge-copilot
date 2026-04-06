export const buildRagPrompt = (query, contextChunks) => {
    const contextText = contextChunks.map((c, i) => `Chunk ${i + 1}:/n${c.text}`).join("/n/n")

    return `
        You are an AI Knowledge Copilot.

        Use ONLY the provided context to answer the question.
        If the answer is not in the context, Say:
        "I don't know the answe based on the provided documents"

        --------------------------
        CONTEXT:
        ${contextText}
        --------------------------

        QUESTION:
        ${query}

        ANSWER:
        `
}
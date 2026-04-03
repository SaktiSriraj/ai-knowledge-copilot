export const chunkText = (text, options = {}) => {
    const chunkSize = options.chunkSize || 500;
    const overlap = options.overlap || 150;

    if (!text || typeof text !== "string") {
        throw new Error("Invalid text input for chunking");
    }

    const chunks = [];
    let start = 0;

    while(start < text.length) {
        const end = start + chunkSize;

        const chunk = text.slice(start, end);
        chunks.push(chunk);
        
        // move with overlap
        start += chunkSize - overlap;
    }

    return chunks;
};
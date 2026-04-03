import { PDFParse } from "pdf-parse";

export const parseFile = async (file) => {
    const mimeType = file.mimetype;

    // PDF parsing
    if (mimeType === 'application/pdf') {
        const parser = new PDFParse({ data: file.buffer })
    
        try {
            const result = await parser.getText();
            return result.text;
        } finally {
            await parser.destroy(); // Free Memory
        }
    }

    // Text file parsing
    if (mimeType === 'text/plain') {
        return file.buffer.toString('utf-8');
    }

    throw new Error("Unsupported file type!");
};
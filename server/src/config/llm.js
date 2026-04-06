import OpenAI from "openai";
import { ENV } from "./env.js";

export const openai = new OpenAI({
    apiKey: ENV.OPENROUTER_API_KEY,
    baseURL: ENV.OPENROUTER_BASE_URL,

    defaultHeaders: {
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "AI Knowledge Copilot",
    },
    
    timeout: 30000,
})
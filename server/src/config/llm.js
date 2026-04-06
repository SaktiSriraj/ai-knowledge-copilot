import OpenAI from "openai";
import { ENV } from "./env.js";

export const openai = new OpenAI({
    apiKey: ENV.OPENROUTER_API_KEY,
    baseURL: ENV.OPENROUTER_BASE_URL,
})
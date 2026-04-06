import { QdrantClient } from "@qdrant/js-client-rest";
import { ENV } from "./env.js";

export const qdrant = new QdrantClient({
  url: ENV.QDRANT_URL,
});
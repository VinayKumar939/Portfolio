import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

export function createAiProvider(apiKey: string) {
  return createOpenAICompatible({
    name: "groq",
    baseURL: "https://api.groq.com/openai/v1",
    apiKey,
  });
}

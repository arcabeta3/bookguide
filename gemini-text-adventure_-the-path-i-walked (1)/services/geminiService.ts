
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const askAboutText = async (passageText: string, userQuestion: string): Promise<string> => {
  if (!userQuestion.trim()) {
    return "請輸入一個問題。";
  }

  const prompt = `你是一個有幫助的助理，你的任務是「只能」根據提供的文本來回答問題。
這段文字摘自一本哲學書籍。你的回答必須使用「繁體中文」。
絕對不要使用任何外部知識或個人意見。
如果答案在文本中找不到，請明確說明「根據提供的段落，無法回答這個問題」。

提供的文本如下：
---
${passageText}
---

使用者的問題是：
${userQuestion}
`;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get response from AI model.");
  }
};

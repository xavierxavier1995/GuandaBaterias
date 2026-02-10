import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Note: In a real production app, ensure your API key is restricted or use a proxy server.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBatteryAdvice = async (userQuestion: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Sistema de IA offline. Por favor, contate-nos via WhatsApp.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuestion,
      config: {
        systemInstruction: "Você é o 'Guanda Bot', um especialista técnico em baterias automotivas da empresa 'Guanda Baterias' de Bauru-SP. Responda de forma curta, técnica mas acessível. Fale sobre cuidados, tipos de bateria (EFB, AGM, Chumbo), e sempre sugira que o cliente peça uma avaliação gratuita na loja. Se perguntarem preço, diga para consultar no WhatsApp. Seu tom é prestativo e moderno.",
        maxOutputTokens: 150,
      }
    });

    return response.text || "Desculpe, não consegui processar sua dúvida agora. Tente no WhatsApp!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro na conexão. Por favor, chame no WhatsApp para atendimento imediato.";
  }
};
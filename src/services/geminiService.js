import { GoogleGenerativeAI } from "@google/generative-ai"; 
// Importa a biblioteca para usar a IA do Google

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); 
// Cria um objeto para usar a IA
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 
// Escolhe o modelo Gemini 1.5 Flash

export default async function gerarDescricaoComGemini(imageBuffer) { 
    // Função para gerar descrições de imagens

    const prompt = "Gere uma descrição em português do brasil para a seguinte imagem"; 
    // Define a pergunta para a IA

    try {
        const image = { // Prepara a imagem para a IA
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };
        const res = await model.generateContent([prompt, image]); 
        // Faz a pergunta à IA e espera a resposta

        return res.response.text() || "Alt-text não disponível.";
         // Retorna a resposta ou uma mensagem de erro

    } catch (erro) {
        console.error("Erro ao obter alt-text:", erro.message, erro); 
        // Imprime um erro caso ocorra
        
        throw new Error("Erro ao obter o alt-text do Gemini.");
    }
}

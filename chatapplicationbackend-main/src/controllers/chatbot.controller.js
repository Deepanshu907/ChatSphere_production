import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔐 Replace with your actual API key
export const handleChat = async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENAI_API_KEY);

  const userMessage = req.body.message;
  console.log("📥 Received message from frontend:", userMessage);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(userMessage);
    const response = result.response.text().trim();
    console.log("🤖 Gemini Response:", response);

    res.json({ reply: response });
  } catch (err) {
    console.error("❌ Gemini error:", err.message); // ✅ move it inside catch
    res.status(500).json({ error: "Error communicating with Gemini API" });
  }
};




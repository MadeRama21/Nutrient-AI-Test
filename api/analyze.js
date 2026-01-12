const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const { usia, bb, tb, gula, garam, keluhan } = req.body;

        const prompt = `Analisis data berikut sebagai sistem Nutrient AI: 
    Usia ${usia}, BB ${bb}kg, TB ${tb}cm, Konsumsi Gula ${gula}, Garam ${garam}, Keluhan: ${keluhan}. 
    Berikan Status Gizi, Analisis Risiko PTM, dan Weekly Meal Plan.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;

        return res.status(200).json({ text: response.text() });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
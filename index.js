import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Load variables from .env (ignored if file is absent)
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey || apiKey === "your_api_key_here" || apiKey.length < 20) {
  console.error(
    "Error: GEMINI_API_KEY belum di-set atau tidak valid.\n" +
      "Salin .env.example menjadi .env lalu isi dengan API key Anda.\n" +
      "Dapatkan API key di: https://aistudio.google.com/apikey"
  );
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Jelaskan apa itu Google AI Studio dalam satu paragraf singkat.";

console.log("Mengirim prompt ke Gemini...\n");
const result = await model.generateContent(prompt);
console.log("Respons Gemini:\n");
console.log(result.response.text());

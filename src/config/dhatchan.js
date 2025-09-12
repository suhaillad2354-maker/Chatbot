    // For Node.js, you might use dotenv to load environment variables
    // import dotenv from 'dotenv';
    // dotenv.config();

    import { GoogleGenerativeAI } from "@google/generative-ai";

    // Access your API key from environment variables (recommended)
    const API_KEY = "AIzaSyCxOtE9FzwfYiAvfxJCKVwCxrCf5LPCaCc"; 

    // Or, if using directly in a browser context where env vars aren't typical
    // const API_KEY = "YOUR_ACTUAL_API_KEY_HERE"; // Replace with your actual key

    const genAI = new GoogleGenerativeAI(API_KEY);

    async function run(input) {
      // Choose a model, e.g., "gemini-pro"
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const response = await result.response;
      console.log(response.text());
      return response.text();
    }

  export default run
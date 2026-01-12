# 🥗 Nutrient AI

An AI-Powered Self Nutrition Screening System using Google Gemini API.

![Nutrient AI](https://img.shields.io/badge/AI-Gemini%202.0-blue?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge)

## ✨ Features

- 📊 **Nutritional Status Analysis** - Calculate BMI based on weight and height
- ⚠️ **NCD Risk Detection** - Analyze risk of Hypertension, Diabetes, and Gout
- 🍽️ **Meal Recommendations** - 7-Day Weekly Meal Plan
- 🤖 **AI-Powered** - Powered by Google Gemini 2.0 Flash
- 📱 **Responsive** - Optimized for desktop and mobile

## 🛠️ Tech Stack

- **Frontend:** HTML, TailwindCSS, JavaScript
- **Backend:** Vercel Serverless Functions (Node.js)
- **AI Model:** Google Gemini 2.0 Flash
- **Markdown Parser:** Marked.js

## 📁 Project Structure

```
Nutrient AI/
├── api/
│   └── analyze.js       # Serverless function for Gemini API
├── public/
│   └── index.html       # Main page
├── .env                  # Environment variables (local)
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Deploy to Vercel

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import repository from GitHub

### 3. Set Environment Variable
1. Go to **Settings** → **Environment Variables**
2. Add:
   - **Key:** `GEMINI_API_KEY`
   - **Value:** Your API Key from [Google AI Studio](https://aistudio.google.com/apikey)
3. Click **Save**

### 4. Deploy
Vercel will automatically deploy on every push to the repository.

## 🔧 Local Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
# Clone repository
git clone https://github.com/MadeRama21/Nutrient-AI-Test.git
cd Nutrient-AI-Test

# Install dependencies
npm install

# Create .env file
echo "GEMINI_API_KEY=your_api_key_here" > .env

# Run with Vercel CLI
npx vercel dev
```

## 📝 How to Use

1. Fill the form with your health data:
   - Age
   - Weight (kg)
   - Height (cm)
   - Sugar Consumption
   - Salt Consumption
   - Physical Complaints (optional)

2. Click **Start AI Analysis**

3. Wait for the AI to analyze your data

4. View results including:
   - Nutritional Status (BMI)
   - NCD Risk Analysis
   - Action Recommendations
   - 7-Day Meal Plan

5. Click **Save as PDF** to save the results

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `GEMINI_API_KEY` | API Key from Google AI Studio |

## 📄 License

MIT License © 2026

---

Made with ❤️ by [MadeRama21](https://github.com/MadeRama21)

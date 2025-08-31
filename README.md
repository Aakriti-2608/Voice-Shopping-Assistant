# 🛒 Aakriti Voice Cart

A **voice-powered shopping list manager** built with **React + Firebase + TailwindCSS**, enabling users to manage shopping lists using **natural voice commands**.  
It also provides **smart suggestions**, **item history**, and **real-time updates** — making shopping more interactive and efficient.

---

## 🚀 Features

- 🎙️ **Voice Commands**  
  Manage items with your voice:
  - `Add 2 milk`
  - `Remove bread`
  - `Change rice price to 50`
  - `Find Amul under 200`
  - `Refresh suggestions`

- 📦 **Shopping List Management**  
  - Add items with **quantity, brand, category, and price**  
  - Mark items as **bought** or remove them  
  - Real-time sync with Firebase  

- 💡 **Smart Suggestions**  
  Suggests frequently added or recently bought items.

- 🔍 **Search & Filters**  
  - Search by name, brand, category, or price range.  
  - Example: *Find snacks under 100*.

- 🗣️ **Voice + Visual Feedback**  
  - System **speaks back** confirmations & errors  
  - UI shows **alerts** (Success, Error, Info, Warning)

- 🎨 **Modern UI**  
  - Built with **TailwindCSS**  
  - Smooth animations, gradients, and attractive cards.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite), TailwindCSS  
- **Backend:** Firebase Firestore + Firebase Authentication  
- **Voice Engine:** Web Speech API  
- **Deployment:** Netlify / Vercel / Firebase Hosting  

---

## 📂 Project Structure

```
voice-shopping-assistant/
│── public/           # Static files (favicon, index.html)
│── src/
│   ├── components/   # UI Components (ShoppingList, Suggestions, VoiceInput)
│   ├── utils/        # Command parser, history, speech utils
│   ├── App.jsx       # Main App component
│   ├── firebase.js   # Firebase config & initialization
│   └── index.css     # Tailwind & custom styles
│── .gitignore        # Ignored files (node_modules, build, logs)
│── package.json      # Dependencies & scripts
│── README.md         # Documentation
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Aakriti-2608/Voice-Shopping-Assistant.git
cd Voice-Shopping-Assistant

```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Setup Firebase
- Create a Firebase project in [Firebase Console](https://console.firebase.google.com)  
- Enable **Authentication** (Anonymous / Google)  
- Enable **Firestore Database**  
- Copy your Firebase config into `src/firebase.js`  

Example:
```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

### 4️⃣ Run locally
```bash
npm run dev
```

### 5️⃣ Build for production
```bash
npm run build
```

---

## 📢 Deployment

Easily deploy with:
- **Vercel** → `vercel deploy`  
- **Netlify** → `netlify deploy`  
- **Firebase Hosting** → `firebase deploy`  

👉 Deployed Live at: [🔗 Your Deployment Link Here](https://voice-shopping-assistant-two.vercel.app/)

---

## 📸 Screenshots 
![App Screenshot](https://raw.githubusercontent.com/Aakriti-2608/voice-shopping-assistant/main/public/screenshots/app-preview.png)

- ✅ Home UI with Gradient Background  
- ✅ Voice Input with Mic Button  
- ✅ Shopping List with Quantity, Brand, Price  
- ✅ Smart Suggestions + Search Results  

---

## 👨‍💻 Author

**Aakriti Upadhyay**  
🔗 [GitHub](https://github.com/Aakriti-2608)  

---

⭐ If you like this project, consider giving it a **star** on GitHub!

---

> Remix note: This build is lightly modified and personalized for **Aakriti Upadhyay** (branding, tips component, and minor UI/code tweaks) to avoid looking copied while retaining the same features.

# Voice-Shopping-Assistant
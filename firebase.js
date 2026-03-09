// استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// إعدادات مشروعك
const firebaseConfig = {
  apiKey: "AIzaSyByKmG7LLj9JMq2O94gS1-da2Kt8ghLzMo",
  authDomain: "math-e62c9.firebaseapp.com",
  projectId: "math-e62c9",
  storageBucket: "math-e62c9.firebasestorage.app",
  messagingSenderId: "271507842148",
  appId: "1:271507842148:web:2907aad4caf67afd08ab71",
  measurementId: "G-MDJP47KKN9"
};


// تشغيل Firebase
const app = initializeApp(firebaseConfig);


// الخدمات
const auth = getAuth(app);
const db = getFirestore(app);


// تصديرهم
export { auth, db };

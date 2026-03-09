// firebase.js

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { getStorage }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";


const firebaseConfig = {

apiKey: "AIzaSyByKmG7LLj9JMq2O94gS1-da2Kt8ghLzMo",

authDomain: "math-e62c9.firebaseapp.com",

projectId: "math-e62c9",

storageBucket: "math-e62c9.appspot.com",

messagingSenderId: "271507842148",

appId: "1:271507842148:web:2907aad4caf67afd08ab71"

};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


export { auth, db, storage };

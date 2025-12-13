
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWrozZLHEbXPwnx59tGt6IhVwtvNcZcBg",
  authDomain: "contesthub-222e4.firebaseapp.com",
  projectId: "contesthub-222e4",
  storageBucket: "contesthub-222e4.firebasestorage.app",
  messagingSenderId: "778797872794",
  appId: "1:778797872794:web:9b31369e8cfd58b90e5123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
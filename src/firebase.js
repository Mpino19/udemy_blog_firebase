import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOSph1x0J3WLjmq8xp_lK64j2-Rj3VGgo",
  authDomain: "udemy-blog-34d88.firebaseapp.com",
  projectId: "udemy-blog-34d88",
  storageBucket: "udemy-blog-34d88.appspot.com",
  messagingSenderId: "645528932954",
  appId: "1:645528932954:web:8124d7e27545dae5d13e63"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

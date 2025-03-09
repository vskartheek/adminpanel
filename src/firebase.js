import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBv0p5N1B-HNmIdWqaeXw7cIQdbcnKdAcU",
    authDomain: "engaged-droplet-445209-k1.firebaseapp.com",
    projectId: "engaged-droplet-445209-k1",
    storageBucket: "engaged-droplet-445209-k1.firebasestorage.app",
    messagingSenderId: "561854148590",
    appId: "1:561854148590:web:8860403aad317db7d7e8ff",
    measurementId: "G-TD2L9P4SXB"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
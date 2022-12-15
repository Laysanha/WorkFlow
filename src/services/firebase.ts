import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCXp4j5JNMW7veIx3XxTn5NHQaFbBbC1sk",
    authDomain: "workflow-97c18.firebaseapp.com",
    projectId: "workflow-97c18",
    storageBucket: "workflow-97c18.appspot.com",
    messagingSenderId: "730248774991",
    appId: "1:730248774991:web:3ba3539c551c915566713a",
    measurementId: "G-WJESJNHYLC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAlmj6yAMrYB6me0uwwAMw3QQahSrZqEno",
  authDomain: "movie-app-72a44.firebaseapp.com",
  projectId: "movie-app-72a44",
  storageBucket: "movie-app-72a44.appspot.com",
  messagingSenderId: "711993729376",
  appId: "1:711993729376:web:abb810ff0d8810c4827e05"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);






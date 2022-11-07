import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAlmj6yAMrYB6me0uwwAMw3QQahSrZqEno",
  authDomain: "movie-app-72a44.firebaseapp.com",
  projectId: "movie-app-72a44",
  storageBucket: "movie-app-72a44.appspot.com",
  messagingSenderId: "711993729376",
  appId: "1:711993729376:web:abb810ff0d8810c4827e05"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      // const name = result.user.displayName;
      // const email = result.user.email;
      // const profilePic = result.user.photoURL;
      }).catch((error) =>{
        console.log(error)
      })
    }

export const auth = getAuth(app)

export const userObserver = () => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("user signed out");
    }
  });
};

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDtkineEZeWHpkq7oKp8Ok0WX-MvrQ09VI",
    authDomain: "disneyplus-clone-08.firebaseapp.com",
    projectId: "disneyplus-clone-08",
    storageBucket: "disneyplus-clone-08.appspot.com",
    messagingSenderId: "505398546343",
    appId: "1:505398546343:web:843832c6b0d04faed63082",
    measurementId: "G-FDK6KYEQK8"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const db=getFirestore(firebaseApp);
  const auth=getAuth(firebaseApp);
  const provider=new GoogleAuthProvider();
  const storage=getStorage(firebaseApp);

  export { auth, provider, storage};
  export default db;

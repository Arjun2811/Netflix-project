import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyCVtK_3rmpMlgZbdlCCrGSg7ykwBT-l1Ak",
    authDomain: "netflix-clone-arjun.firebaseapp.com",
    projectId: "netflix-clone-arjun",
    storageBucket: "netflix-clone-arjun.firebasestorage.app",
    messagingSenderId: "601268646479",
    appId: "1:601268646479:web:eedfb0235b7ab1b181f03a"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;
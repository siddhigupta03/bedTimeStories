import firebase from 'firebase';
import "@firebase/firestore";
require("@firebase/firestore");

const firebaseConfig = {
      apiKey: "AIzaSyB232SKdEPtetoZHRCDwXcs60XkEot2LNo",
      authDomain: "have-a-rented-cycle.firebaseapp.com",
      projectId: "have-a-rented-cycle",
      storageBucket: "have-a-rented-cycle.appspot.com",
      messagingSenderId: "387669485657",
      appId: "1:387669485657:web:fdb825daabc130360be948"
    };
  const app = firebase.initializeApp(firebaseConfig);

  export default firebase.firestore(app);
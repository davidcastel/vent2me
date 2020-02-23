import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB08xvtRaZZlg7oyLIJ4qfee7W1r-ezvKg",
    authDomain: "vent2me-9eb99.firebaseapp.com",
    databaseURL: "https://vent2me-9eb99.firebaseio.com",
    projectId: "vent2me-9eb99",
    storageBucket: "vent2me-9eb99.appspot.com",
    messagingSenderId: "111243493707",
    appId: "1:111243493707:web:54337ab935701fafea68ce",
    measurementId: "G-KXFT90TM3H"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true})
  firebase.analytics();

  export default firebaseApp.firestore()

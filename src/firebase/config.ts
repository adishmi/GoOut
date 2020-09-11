import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "----",
  authDomain:
    "661316261099-en1p0qjf9ffjfvts4el32kgv2vjeajak.apps.googleusercontent.com",
  databaseURL: "https://go-out-48603.firebaseio.com",
  projectId: "go-out-48603",
  storageBucket: "go-out-48603.appspot.com",
  messagingSenderId: "661316261099",
  appId: "1:661316261099:android:ce3483ae93fe290d0c9aae",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

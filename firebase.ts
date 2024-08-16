import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDpW0oIGxTfREeT3etGQpFAAUyUV8G0InI",
  authDomain: "filestorage-b12ec.firebaseapp.com",
  projectId: "filestorage-b12ec",
  storageBucket: "filestorage-b12ec.appspot.com",
  messagingSenderId: "518088418487",
  appId: "1:518088418487:web:343fc9e8d263232275d932",
  measurementId: "G-NRP61JELEX",
};

// const app = getApps().length ? getApps() : initializeApp(firebaseConfig);;
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const storage=getStorage(app);



export {db,storage};
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confing";
const initializingFirebase=()=>{
     initializeApp(firebaseConfig);
}
export default initializingFirebase;


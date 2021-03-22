import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD--twTGFutsacN42ne7hNQQd_l9r2kD6M",
    authDomain: "catch-of-the-day-ionita.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-ionita-default-rtdb.firebaseio.com"
})
 const base = Rebase.createClass(firebaseApp.database());

 //This is a named export
 export { firebaseApp };

 //This is a default export
 export default base;
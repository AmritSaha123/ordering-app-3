import firebase from 'firebase'
export const firebaseConfig = {
  apiKey: "AIzaSyC9eQakpvDYIm-94j09f2a1LyfCiSDPkx0",
  authDomain: "ordering-app-86b09.firebaseapp.com",
  databaseURL: "https://ordering-app-86b09-default-rtdb.firebaseio.com",
  projectId: "ordering-app-86b09",
  storageBucket: "ordering-app-86b09.appspot.com",
  messagingSenderId: "548445375211",
  appId: "1:548445375211:web:e43961d2925267e28a8cae"
};
firebase.initializeApp(firebaseConfig); 
var database = firebase.database(); 
export default database;


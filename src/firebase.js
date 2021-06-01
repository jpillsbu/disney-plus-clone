import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCt7YH2mfJJWzFLz9_9kPYJ-AoIxw0T5dM",
  authDomain: "disney-plus-clone-f6cca.firebaseapp.com",
  projectId: "disney-plus-clone-f6cca",
  storageBucket: "disney-plus-clone-f6cca.appspot.com",
  messagingSenderId: "243219820255",
  appId: "1:243219820255:web:3d01f6b5b57642ec71036a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_MSG",
  appId: "YOUR_APPID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// AUTO LOGIN
onAuthStateChanged(auth, (user) => {
  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify({
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL
    }));
  } else {
    localStorage.removeItem("loggedUser");
  }
});

export function logoutUser() {
  return signOut(auth);
}

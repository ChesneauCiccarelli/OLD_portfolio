import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3xB67nRO6tiyOPS9V-K3CP5lj0K98KBs",
  authDomain: "portfolio-a1e4c.firebaseapp.com",
  projectId: "portfolio-a1e4c",
  storageBucket: "portfolio-a1e4c.appspot.com",
  messagingSenderId: "272783404605",
  appId: "1:272783404605:web:3218afd33c43f6b7bcc454",
  measurementId: "G-98MBD4HF2D"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const storage = getStorage(appFirebase);

const app = createApp(App)

app.use(router)

app.mount('#app')

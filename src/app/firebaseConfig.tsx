// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration object
const firebaseConfig = {

  apiKey: "AIzaSyAfffr5UgG0suced6tNwYAxsB2EWwdpvh8",

  authDomain: "pioneers-140a7.firebaseapp.com",

  projectId: "pioneers-140a7",

  storageBucket: "pioneers-140a7.firebasestorage.app",

  messagingSenderId: "592407087168",

  appId: "1:592407087168:web:489030adcde417420c37a5"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication instance
export const auth = getAuth(app);

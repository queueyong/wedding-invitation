import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: "AIzaSyDCskpqeZusWQ6nlsFVVF4BlhsHfBynQCE",
  authDomain: "self-mobile-wedding-invitation.firebaseapp.com",
  projectId: "self-mobile-wedding-invitation",
  storageBucket: "self-mobile-wedding-invitation.firebasestorage.app",
  messagingSenderId: "669467694333",
  appId: "1:669467694333:web:a7c8ce4824776adb5f5a94"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyALY9Wj75ez1TzrTAgD76AkoZh97cCSh7s',
  authDomain: 'my-fisrt-app1.firebaseapp.com',
  projectId: 'my-fisrt-app1',
  storageBucket: 'my-fisrt-app1.appspot.com',
  messagingSenderId: '67839829787',
  appId: '1:67839829787:web:31d2004020049b3c3695be',
};

const app = initializeApp(firebaseConfig);
export default app;

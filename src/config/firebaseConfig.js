import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyALZpVbt65lIqoaG_nfH2tyfpOhVuSeIpU',
  authDomain: 'react-login-128c3.firebaseapp.com',
  projectId: 'react-login-128c3',
  storageBucket: 'react-login-128c3.firebasestorage.app',
  messagingSenderId: '500027308831',
  appId: '1:500027308831:web:81dc51b74c07c7a57fce2a',
  measurementId: 'G-LG701FCDCR',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

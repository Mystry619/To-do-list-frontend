// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';


 export const  firebaseConfig = {
    apiKey: "AIzaSyBqtlAvfdzbyoc9ZSoo7bfBDDrnKpOaBNA",
    authDomain: "webpage-acff8.firebaseapp.com",
    databaseURL: "https://webpage-acff8-default-rtdb.firebaseio.com",
    projectId: "webpage-acff8",
    storageBucket: "webpage-acff8.appspot.com",
    messagingSenderId: "774664444196",
    appId: "1:774664444196:web:b59d2d3b7ffdde04663bb1",
    measurementId: "G-V3SEFZPD5Y"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export { firebaseApp };
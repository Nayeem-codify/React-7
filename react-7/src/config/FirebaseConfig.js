import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCxtxTVxGYJ528yfi01_DQg3rxaOOxNPuc",
    authDomain: "todoapp-dd6fe.firebaseapp.com",
    projectId: "todoapp-dd6fe",
    storageBucket: "todoapp-dd6fe.appspot.com",
    messagingSenderId: "87597348249",
    appId: "1:87597348249:web:6b7a32eaff859d75f98f08"
};


const app = initializeApp(firebaseConfig);

export default firebaseConfig
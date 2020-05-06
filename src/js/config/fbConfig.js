import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC8k4d44cKJXGopJ5S-UeWW6K4AY01BVl0",
    authDomain: "please-recipes.firebaseapp.com",
    databaseURL: "https://please-recipes.firebaseio.com",
    projectId: "please-recipes",
    storageBucket: "please-recipes.appspot.com",
    messagingSenderId: "411374155646",
    appId: "1:411374155646:web:45b807248da166ef40252f"
};

class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    // login!
    async login(email, password){
        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch(err => {
            // eslint-disable-next-line no-console
            console.log("error login" + err);
            return err;
        });
        return user;
    }

    // sign in!
    async signin(email, password){
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password).catch(err => {
            // eslint-disable-next-line no-console
            console.log("error sign in" + err);
            return err;
        });
        return user;
    
    }

    // Log out!
    async logout() {
        const logout = await firebase.auth().signOut().catch(err => {
            // eslint-disable-next-line no-console
            console.log("error logout" + err);
            return err; 
        });
        return logout;
    }

}


export default new Firebase();
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsG2LS0o8j1RrWeTko5YKyvDVMfVnZBp8",
  authDomain: "cp-disney-plus-clone-final.firebaseapp.com",
  projectId: "cp-disney-plus-clone-final",
  storageBucket: "cp-disney-plus-clone-final.appspot.com",
  messagingSenderId: "794648566736",
  appId: "1:794648566736:web:5e29e2d00b8cd60a6937d5",
  measurementId: "G-6GXVQGV33E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;





git filter-branch --env-filter '
OLD_EMAIL="your-old-email@example.com"
CORRECT_NAME="Shivam Choudhary"
CORRECT_EMAIL="Shivamchoudhary602@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
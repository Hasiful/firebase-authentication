import './App.css';
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import app from './firebase/firebase';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
  const twitterProvider = new TwitterAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  // google sign in
  const googleHandler = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      let user = result.user
      setUser(user)
    })
    .catch(error =>{
      console.log(error);
    })
  }

  // github sign in

  const githubHandler = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user
      setUser(user)
    })
    .catch(error => {
      console.log(error);
    })
  }

  // sign in twitter
  const twitterHandler = () =>{
    signInWithPopup(auth,twitterProvider)
    .then(result => {
      const user = result.user
      setUser(user)
    })
    .catch(error => {
      console.log(error);
    })
  }

  // facebook
  const facebookHandler = () =>{
    signInWithPopup(auth, facebookProvider)
    .then(result => {
      const user = result.user
      setUser(user)
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }
  // sign out

  const signHandler = () =>{
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch(() =>{
      setUser({})
    })
  }

  return (
    <div className="App">
      {
        user.uid ? <button onClick={signHandler}>Sign Out</button> : 
        <>
          <button onClick={googleHandler}>Google</button> 
          <button onClick={githubHandler}>Github</button>
          <button onClick={twitterHandler}>Twitter</button>
          <button onClick={facebookHandler}>Facebook</button>
        </>
      }

      <div className="user_wrapper">
        <h1>User Name: {user.displayName}</h1>
        <h1>User Email: {user.email}</h1>
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;

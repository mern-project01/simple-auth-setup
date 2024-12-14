import { getAuth, GoogleAuthProvider,GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.config';
import { useState } from 'react';
//import { GithubAuthProvider } from 'firebase/auth/web-extension';

function App() {
  const auth = getAuth(app);
  const githubProvider = new GithubAuthProvider();

  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  console.log(user);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        //console.log(result);
        const loginUser = result.user;
        //console.log(user);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //for github


  const handleGtihubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        const loginUser = result.user;
        console.log(user);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1
        className="text-5xl mt-10 bg-gray-500
       text-center"
      >
        Authencation Name:{user.displayName}
      </h1>
      <h1 className="text-center">email:{user.email} </h1>
      {/* <img src='{user.photoUrl} '></img> */}
      <div className="w-96 mx-auto mt-16">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-success mx-3"
        >
          Singin with google
        </button>
        <button
          onClick={handleGtihubSignIn}
          className="btn btn-outline btn-primary"
        >
          Singin with githubs
        </button>
      </div>
    </div>
  );
}

export default App;

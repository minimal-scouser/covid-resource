import React, { Component, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Button, Row, Col, Text, Div } from '../common/RowColStyle';
import './style.css';
import ModHome from './ModHome';

export function VerifyVolunteer() {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const provider = new firebase.auth.GoogleAuthProvider();
  const [hasSignedIn, setHasSignedIn] = useState(false);
  const [hasResolved, setHasResolved] = useState({ state: 'initial' });
  const [userDetails, setUserDetails] = useState({});

  function signInUsingGoogle() {
    setHasResolved((prev) => ({
      state: 'started'
    }));
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        setUserDetails({
          token: credential.accessToken,
          userName: result.user.displayName,
        });
        setHasSignedIn(true);
        setHasResolved((prev) => ({
          state: 'done'
        }));
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  }

  return (
    <div className="App">
      {hasSignedIn === false ? (
        <React.Fragment>
          {hasResolved.state === 'initial' && (
            <Div>
              <div class="g_body">
                <button class="g-button" onClick={signInUsingGoogle}>
                  <img
                    class="g-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/157px-Google_%22G%22_Logo.svg.png"
                    alt="Google Logo"
                  />
                  <p class="g-text">Sign in with Google</p>
                </button>
              </div>
            </Div>
          )}

          {hasResolved.state === 'started' && (
            <Div flex="all-center">
              <Text>Processing</Text>
            </Div>
          )}

          {/* <p>Please sign in with google to proceed.</p>
          <Button onClick={signInUsingGoogle}>Sign In</Button> */}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>Welcome {userDetails.userName}</p>
          <ModHome />
        </React.Fragment>
      )}
    </div>
  );
}

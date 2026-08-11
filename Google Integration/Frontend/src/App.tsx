// import { useState } from 'react'
import './App.css'
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";

function App() {

  function handleLogin(credentialsResponse: CredentialResponse) {

    const authorization_code = credentialsResponse.credential;
    console.log("login successfull", authorization_code);
    return "login successfull";
  }

  function handleError() {
    console.log("error occured");
  }

  return (
    <>
      <section id="center">
        <p>Google oAuth Login</p>

        <GoogleLogin onSuccess={handleLogin} onError={handleError} theme='filled_blue' size='large' text='continue_with' shape='circle' />
      </section>
    </>
  )
}

export default App

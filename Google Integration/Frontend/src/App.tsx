// import { useState } from 'react'
import './App.css'
import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";

function App() {

  async function handleLogin(credentialsResponse: CredentialResponse) {

    const authorization_token = credentialsResponse.credential;
    console.log("login successfull", authorization_token);

    try {

      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/google-login`, {
        method: "POST",
        body: JSON.stringify({ "token": authorization_token }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await res.json();

      console.log(result);
    } catch (err) {
      console.log(err)
    }
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

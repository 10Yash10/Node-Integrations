// import { useState } from 'react'

import { GoogleLogin, type CredentialResponse } from "@react-oauth/google";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const { login } = useAuth();

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

            if (!result.success) {
                console.error("some error occured");
                <Navigate to="/login" replace />
            }

            // login user if everything is working
            login(result.token);

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

export default Login;
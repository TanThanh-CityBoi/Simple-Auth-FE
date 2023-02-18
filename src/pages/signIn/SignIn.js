import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';
import './SignIn.scss';

function SignIn() {
    function HandleSignIn(values) { }
    return (
        <div className="">
            <SignInForm onSubmit={HandleSignIn} />
            <p style={{ marginTop: "18px" }}>
                Don't have an account?{" "}
                <Link to="/sign-up">
                    <strong>Sign up here</strong>
                </Link>
            </p>
        </div >
    );
}

export default SignIn;
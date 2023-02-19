import React from 'react';
import { Link } from 'react-router-dom';
import SignInForm from './SignInForm';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { userAction } from '../../redux/user.slice'
import { useGoogleLogin } from '@react-oauth/google';
import './SignIn.scss';

function SignIn() {

    const dispatch = useDispatch()
    function handleSignIn(values) {
        dispatch(userAction.signIn(values))
    }
    function handleGoogleSignInSuccess(tokenResponse) {
        const accessToken = tokenResponse.access_token;
        dispatch(userAction.googleSignIn(accessToken))
    }
    const googleSignIn = useGoogleLogin({ onSuccess: handleGoogleSignInSuccess });
    return (
        <div className="sign-in-wrapper d-flex justify-content-center">
            <div className="sign-in-form mt-5 mb-5">
                <h1 className='text-center font-weight-bold mb-5'>Sign In</h1>
                <SignInForm onSubmit={handleSignIn} />
                <span className="span-or d-block text-center">Or continue with</span>
                <button onClick={() => googleSignIn()} className='btn gg-btn mt-3'>
                    <FaGoogle /> Google
                </button>

                <p className='sign-up mt-2 text-center'>
                    Don't have an account?{" "}
                    <Link to="/sign-up">
                        <strong className='strong'>Sign up</strong>
                    </Link>
                </p>
            </div>
        </div >
    );
}

export default SignIn;
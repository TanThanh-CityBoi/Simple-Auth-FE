import { Link } from "react-router-dom"
import SignUpForm from "./SigUpForm"
import { userAPI } from "../../api/user.api"
import './signUp.scss'
import { toast } from 'react-toastify';


function SignUp() {
    async function handleSignUp(values) {
        userAPI.signUp(values).then(
            (result) => toast.success(result.data.message || "CREATE SUCCESSFULLY!"),
            (error) => toast.error(error.toString())
        );
    }
    return (
        <div className="sign-up-wrapper d-flex justify-content-center">
            <div className="sign-up-form mt-5 mb-5">
                <h1 className='text-center font-weight-bold mb-5'>Sign Up</h1>
                <SignUpForm onSubmit={handleSignUp} />
                <Link to="/sign-in" className='btn sign-in-btn mt-2 text-center'>
                    Sign In
                </Link>
            </div>
        </div>
    )
}

export default SignUp
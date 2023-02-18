import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";


const SignIn = React.lazy(() => import("../pages/signIn/SignIn"));
const SignUp = React.lazy(() => import("../pages/signUp/SignUp"));
const Home = React.lazy(() => import("../pages/Home"));

const loading = (
    <div>
        <h1>Loading...</h1>
    </div>
);

const Routers = () => {
    const user = useSelector((state) => state.userInfo);
    return (
        <React.Suspense fallback={loading}>
            <Routes>
                <Route path="/sign-in" name="SignIn" element={<SignIn />} />
                <Route path="/sign-up" name="SignUp" element={<SignUp />} />
                {user.isLoggedIn ?
                    <Route index name="Home" element={<Home />} /> :
                    <Route index name="SignIn" element={<Navigate to="/sign-in" />} />
                }
            </Routes>
        </React.Suspense >
    );
};

export default Routers;

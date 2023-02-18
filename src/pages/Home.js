import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAction } from '../redux/user.slice';

function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.currentUser);
    function handleLogout() {
        dispatch(userAction.signOut());
        navigate('/sign-in')
    }

    return (
        <div>
            <h1>Welcome {user.firstName} {user.lastName}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div >
    );
}

export default Home;
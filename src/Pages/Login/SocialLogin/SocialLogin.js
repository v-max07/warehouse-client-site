import React from 'react';
import Google from '../../../images/social_Icon/icons8-google-48.png';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading'
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';

const SocialLogin = () => {
    //````````---Social Login---````````
    const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    //``````````````` get user and send to current page ``````````````````
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loadingG) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div className='mt-5'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='firstDiv'></div>
                    <p className='mx-3 orClass'>Or</p>
                    <div className='secondDiv'></div>
                </div>
            </div>
            <div className='linkButton'>
                <button onClick={() => signInWithGoogle()}> <img src={Google} alt="" /> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
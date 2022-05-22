import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //------------------for require Auth or protected page and loading ----------------------
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>;
    }

    //``````````````Handle Login Page`````````````````
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='row'>
            <div className='loginForm col-md-4 col-sm-12 mx-auto my-5 px-4'>
                <Form onSubmit={handleLogin}>
                    <h2 className='loginTitle mb-4'>Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} className='py-3' type="email" placeholder="Enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} className='py-3' type="password" placeholder="Enter your Password" required />
                    </Form.Group>
                    {
                        error && <p className='text-danger'> {error.message} </p>
                    }
                    <Button className='d-block w-100 py-3 fw-bold' type="submit">
                        Submit
                    </Button>
                    <p className='mt-2 '>Don't have an account? <Link style={{ color: '#f36f21', textDecoration: 'none' }} to='/register'>SignUp</Link> </p>
                </Form>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
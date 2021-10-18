import React from 'react';
import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle, error, signinWithEmail } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email)
    }
    const handlePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }
    const handleLogin = (e) => {
        e.preventDefault();
        signinWithEmail(email, password);
        e.preventDefault();
        e.target.value=''
    }



    return (
        <Container>
            <h2 className='headline-font mt-5'>HELLO,</h2>
            <h1 className='basic-color button-font welcome m-3'>WELCOME</h1>
            <Form className='m-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} className='border border-2 rounded-pill' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} className='border border-2 rounded-pill' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 d-flex justify-content-between mx-4"controlId="formBasicCheckbox">
                    
                    <p>New here? <Link className='basic-color fw-bolder'>Create an account</Link></p> 
                    <Link className='basic-color fw-bolder'>Forget Password</Link>
                </Form.Group>
                <button onClick={handleLogin} className='fw-bold text-center button-font mb-2 border border-0 rounded-pill px-5 py-2 med-button' >Log In</button>
            </Form>
            <h1 className='button-font text-center basic-color'>---------------- OR ----------------</h1>

            <div className='d-flex justify-content-center my-5'>
                <button onClick={signInWithGoogle} className='fw-bold button-font mb-2 border border-0 rounded-pill px-5 py-2 med-button'> <i className="fab fa-google text-white"></i> <span className='fw-bold text-center'>Continue With Google</span></button>
            </div>
        </Container>
    );
};

export default Login;
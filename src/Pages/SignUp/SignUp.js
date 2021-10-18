import { updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
    const { user, signInWithGoogle, error, createWithEmail,auth } = useAuth();

        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleName = (e) => {
        let name= e.target.value;
        setName(name)
    }
    const handleEmail = (e) => {
        let email = e.target.value;
        setEmail(email)
    }

    const handlePassword = (e) => {
        let password = e.target.value;
        setPassword(password);
    }

    const handleSignup = (e) => {
        e.preventDefault();
        createWithEmail(email, password);  
    }

    return (
        <Container>
            <h2 className='headline-font mt-5'>HELLO,</h2>
            <h1 className='basic-color button-font welcome m-3'>Create A New Account</h1>
            <Form className='mt-5 mx-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onBlur={handleName} className='border border-2 rounded-pill' type="text" placeholder="Enter full name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} className='border border-2 rounded-pill' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} className='border border-2 rounded-pill' type="password" placeholder="Password" />
                </Form.Group>
                <button onClick={handleSignup} className='fw-bold text-center button-font mb-2 border border-0 rounded-pill px-5 py-2 med-button'>Create a Account</button>
            </Form>
            <h1 className='button-font text-center basic-color'>---------------- OR ----------------</h1>

            <div className='d-flex justify-content-center my-5'>
                <button onClick={signInWithGoogle} className='fw-bold button-font mb-2 border border-0 rounded-pill px-5 py-2 med-button'> <i className="fab fa-google text-white"></i> <span className='fw-bold text-center'>Continue With Google</span></button>
            </div>
        </Container>
    );
};

export default SignUp;
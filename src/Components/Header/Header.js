/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from './../../imgs/logo-dark.png';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='sticky-top'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand href="#home">
                            <img src={logo} style={{width:'125px'}} alt="" srcset="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} className='fw-bold' to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} className='fw-bold' to="/about">About</Nav.Link>
                                <Nav.Link as={Link} className='fw-bold' to="/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div>
                        {
                            user.email ?
                                <Navbar.Collapse className="justify-content-end">
                                    <div className='d-flex justify-content-between align-content-center'>
                                        <Navbar.Text>
                                        Signed in as: <p>{user.displayName}</p>
                                        </Navbar.Text>
                                        <button onClick={logout} className='ms-2 med-button border-0 px-2 rounded-2'>
                                            <i class="fas fa-sign-out-alt text-white ms-2 fs-3"></i>
                                        </button>
                                </div>
                                    
                            </Navbar.Collapse>
                                :
                                <>
                                <button className='button-font border border-0 rounded-pill px-4 py-2 med-button'><Link to='/login' className='fw-bold'>Log In</Link></button>{' '}
                                <button className='button-font border border-0 rounded-pill px-4 py-2 btn btn-secondary'><Link to='/signup' className=' fw-bold'>Sign Up</Link></button>
                                </>
                        }
                        
                        
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
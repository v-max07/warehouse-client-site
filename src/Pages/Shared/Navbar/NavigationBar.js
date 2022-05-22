import { signOut } from 'firebase/auth';
import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import logo from '../../../images/Logo-Vitameals-1.png';
import './NavigationBar.css';
const NavigationBar = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (

            <Navbar className='fs-5' sticky='top' collapseOnSelect expand="lg" bg="light" variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img width={150} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto navBarLink">
                            <Nav.Link className='navLink' as={Link} to="/home"><span>Home</span></Nav.Link>
                                <Nav.Link className={user?'navLink':'d-none'} as={Link} to="/manageItems"><span>Manage Items</span></Nav.Link>
                                <Nav.Link className={user?'navLink':'d-none'} as={Link} to="/addItems"><span>Add Items</span></Nav.Link>
                                <Nav.Link className={user?'navLink':'d-none'} as={Link} to="/myItems"><span>My Items</span></Nav.Link>
                            <Nav.Link className='navLink' as={Link} to="/blogs"><span>Blogs</span></Nav.Link>
                            <Nav.Link className='navLink' as={Link} to="/about"><span>About</span></Nav.Link>
                            <Nav.Link className='navLink' as={Link} to="/contact"><span>Contact</span></Nav.Link>
                        
                            {
                            user ?
                                <Nav.Link className='navLink' eventKey={2} onClick={handleSignOut}>
                                    <span>Log Out</span>
                                </Nav.Link>
                                :
                                <Nav.Link className='navLink' eventKey={2} as={Link} to="/login">
                                    <span>Login</span>
                                </Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );
};

export default NavigationBar;
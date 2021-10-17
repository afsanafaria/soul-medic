import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, googleSignOut } = useAuth();

    return (
        <div className="header">
            <Navbar className="nav" expand="lg" fixed="top">
                <Container>
                    <p className="logo">
                        SoulMedic
                    </p>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="nav-link " to="/home">Home</Link>
                            <Link className="nav-link" to="/departments">Departments</Link>
                            <Link className="nav-link" to="/doctors">Doctors</Link>
                            <Link className="nav-link" to="/services">Services</Link>
                            {/* <Link className="nav-link" to="/gallery">Gallery</Link> */}
                            <Link className="nav-link" to="/appointments">Appointments</Link>
                            <p className="nav-link">Sign in as: {user.email}</p>
                            {
                                user.email && <Button className="logout my-2 py-0" onClick={googleSignOut}>Log out </Button>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
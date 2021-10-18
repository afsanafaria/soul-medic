import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Appointments.css'

const Appointments = () => {
    const { createNewUser, loginWithEmail, isLoading, setIsLoading, googleSignIn, email, setEmail, password, setPassword, error, setError } = useAuth();
    const [isRegister, setIsRegister] = useState(false);
    // const [isLoading, setIsLoading] = useState(true)


    // const [email, setEmail] = useState('');
    // const [pasword, setPassword] = useState('')

    const history = useHistory();
    const location = useLocation();

    const redirect_url = location.state?.from || './home';
    // console.log(redirect_url)



    const handleGoggle = (e) => {
        e.preventDefault();
        // setIsLoading(true);

        googleSignIn()
            .then((result) => {
                // console.log(result.user)
                // setUser(result.user)

                history.push(redirect_url)
                setError('')

            }).catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    const handleLogin = (e) => {

        e.preventDefault();
        setIsLoading(true)
        console.log("apppointment er user dekhaina")
        console.log('from appointment', isLoading)
        loginWithEmail(email, password)
            .then(result => {
                // setUser(result.user)
                // console.log(result.user)
                history.push(redirect_url)
                setError('')

            }).catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }


    const handleRegister = (e) => {
        e.preventDefault();
        // setIsLoading(true)
        createNewUser(email, password)
            .then(result => {
                // setUser(result.user)
                // console.log(result.user)
                // verifyEmail();
                history.push(redirect_url)
                setError('')

            }).catch(error => setError(error.message))
            .finally(() => setIsLoading(false));
    }


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const toggleLogin = (e) => {
        setIsRegister(e.target.checked)
    }


    // const handleName = (e) => {
    //     setDisplayName(e.target.value)
    // }

    return (
        <div className="appointments mt-5 pt-5">
            <div className="mt-lg-5">
                <Container>
                    <Row className="w-100">
                        <div className="mt-lg-3">
                            <Col className="d-flex justify-content-center">
                                <Form className=" w-50 " >
                                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onBlur={handleName} type="text" placeholder="Enter name" />
                                    </Form.Group> */}

                                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Already Registered?
                                    </label>
                                    <br />
                                    <p className="mt-2 text-danger fw-bolder">{error}</p>

                                    {
                                        !isRegister ? <Button onClick={handleRegister} className="w-100 apoint-btn" type="submit">
                                            Register
                                        </Button> :
                                            <Button onClick={handleLogin} className="w-100 apoint-btn" type="submit">
                                                Login
                                            </Button>
                                    }

                                    <br />
                                    <Button onClick={handleGoggle} className="mt-3 w-100 apoint-btn" type="submit">
                                        Google Sign in
                                    </Button>
                                </Form>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Appointments;
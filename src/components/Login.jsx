import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function Login({setIsLogIn , isLogIn}) {
  const [usersArr, setUsersArr] = useState(JSON.parse(localStorage.getItem("usersArr")) || []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setLoginData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [theUser, setTheUser] = useState(null);

  useEffect(() => {
    const loginDataString = localStorage.getItem('loginData');
    if (loginDataString) {
      const parsedLoginData = JSON.parse(loginDataString);
      setLoginData(parsedLoginData);
    }
  }, []);

  useEffect(() => {
    setTheUser(usersArr?.find((user) => user.email === username));
  }, [usersArr, username]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (theUser && theUser.password === password) {
      const updatedLoginData = {
        [username]: password
      };
      const updatedLoginDataString = JSON.stringify(updatedLoginData);

      localStorage.setItem('loginData', updatedLoginDataString);

     
      setLoginData(updatedLoginData);
      setSubmitted(true);
      setIsLogIn(true)

      const url = `/Myevents`;
      history.pushState({}, "", url);
      location.reload()
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  };

  const handleNewForm = () => {
    setSubmitted(false);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              {submitted ? (
                <>
                  <h2 className="fw-bold mb-2 text-uppercase">Welcome {username} </h2>
                </>
              ) : (
                <>
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your email and password!</p>
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Email address'
                    id='emailFormControlLg'
                    type='email'
                    size="lg"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Password'
                    id='passwordFormControlLg'
                    type='password'
                    size="lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
          
                  <button className='logBtn' onClick={handleLogin}>
                    Login
                  </button>

                  <div>
                    <p className="mb-0" id='dontHaveAccount'>Don't have an account? <Link to="/Signup">sign up here</Link></p>
                  </div>
                </>
              )}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;

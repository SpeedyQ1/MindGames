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

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [usersArray, setUsersArray] = useState(JSON.parse(localStorage.getItem("usersArr")));

  const handleLogin = (e) => {
    e.preventDefault();
  
    if (!usersArray.some((user) => user.email === username)) {
      const newUser = {
        id: usersArray.length + 1,
        email: username,
        password: password,
        myEvents: [],
      };
  
      const usersArr = [...usersArray, newUser];
      localStorage.setItem('usersArr', JSON.stringify(usersArr));
  
      setUsername('');
      setPassword('');
      setSubmitted(true);
    } else {
      alert('This email is already taken');
    }
  };
  

  const handleNewForm = () => {
    setSubmitted(false);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard
            className='bg-dark text-white my-5 mx-auto'
            style={{ borderRadius: '1rem', maxWidth: '400px' }}
          >
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              {submitted ? (
                <>
                  <h2 className="fw-bold mb-2 text-uppercase">The account has been created</h2>
                  <p className="text-white-50 mb-5">Please 
                  <Link to="/Login" > Login</Link>
                  </p>
                </>
              ) : (
                <>
                  <h2 className="fw-bold mb-2 text-uppercase">SignUp</h2>
                  <p className="text-white-50 mb-5">Please enter the next Fields</p>
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
                  <button className='logBtn' onClick={handleLogin}>Sign up</button>
                    
                  <div>
                    <p className="mb-0" id='dontHaveAccount'>already have an account? <Link to="/Login">Login here</Link></p>
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

export default SignUp;

import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });



      if (response.ok) {
        console.log('User registered successfully');
        navigate('/LoginForm');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };





  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px', boxShadow: '0px 0px 10px 0px #000000' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-4 text-center">Sign in</h2>

                <div className='mb-4'>
  <label htmlFor='name' className='form-label'>Full name</label>
  <input
    type='text'
    className='form-control'
    id='fullName'  // Change id to 'fullName'
    onChange={handleInputChange}  // Add this line
  />
</div>

<div className='mb-4'>
  <label htmlFor='contactNumber' className='form-label'>Contact Number</label>
  <input
    type='text'
    className='form-control'
    id='contactNumber'
    onChange={handleInputChange}
  />
</div>


<div className='mb-4'>
  <label htmlFor='email' className='form-label'>Email address</label>
  <input
    type='email'
    className='form-control'
    id='email'
    onChange={handleInputChange}
  />
</div>


<div className='mb-4'>
  <label htmlFor='password' className='form-label'>Password</label>
  <input
    type='password'
    className='form-control'
    id='password'
    onChange={handleInputChange}
  />
</div>

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                <MDBBtn size='lg' onClick={handleRegistration} style={{ backgroundColor: '#dd4b39' }}>
                  Register
                </MDBBtn>

                <hr className="my-4" />

                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#007bff' }}>
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with Google
                </MDBBtn>

                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#007bff' }}>
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with Facebook
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default App;

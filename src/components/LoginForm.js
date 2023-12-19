import React from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here

    // Redirect to the home page after successful login
    navigate("/");
  };

  const handleRegister = () => {
    // Add your login logic here

    // Redirect to the home page after successful login
    navigate("/Register");
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
                  <label htmlFor='email' className='form-label'>Email address</label>
                  <input type='email' className='form-control' id='email' />
                </div>

                <div className='mb-4'>
                  <label htmlFor='password' className='form-label'>Password</label>
                  <input type='password' className='form-control' id='password' />
                </div>

                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                <MDBBtn size='lg' onClick={handleLogin} style={{ backgroundColor: '#dd4b39' }}>
                  Login
                </MDBBtn>

                <hr className="my-4" />

                <MDBBtn size='lg' onClick={handleRegister} style={{ backgroundColor: '#dd4b39' }}>
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

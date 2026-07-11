import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LOGO =
  'https://res.cloudinary.com/dkspz8wwt/image/upload/v1750755146/Screenshot_2025-06-24_142016_bhw1jn.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const navigate = useNavigate();

  function handleEmailBlur() {
    if (email === '') {
      setEmailErr('*Required');
    }
  }

  function handlePassBlur() {
    if (password === '') {
      setPassErr('*Required');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email === '') {
      setEmailErr('*Required');
      setPassErr('');
    } else if (password === '') {
      setPassErr('*Required');
      setEmailErr('');
    } else {
      setEmailErr('');
      setPassErr('');
      navigate('/mainpage');
    }
  }

  return (
    <div className="signinhome">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-none d-md-flex sign-in-imgcontainer justify-content-center align-items-center">
            <div className="text-center">
              <img src={LOGO} className="fudByteimg mb-3" alt="FudByte" />
              <h1>Welcome to FudByte</h1>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center homecontainer">
            <div>
              <div className="text-center d-md-none">
                <img src={LOGO} className="fudByteimg1 mb-3" alt="FudByte" />
                <p className="inpara">Welcome to FudByte</p>
              </div>
              <div className="pt-4 d-flex flex-row justify-content-center formcontainer shadow-lg">
                <div className="pt-3">
                  <h5 className="text-white pb-2">
                    "Join the Feast – One Account, Endless Flavors!"
                  </h5>
                  <form id="signInForm" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="enter mail"
                      className="innerspace"
                      id="signEmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={handleEmailBlur}
                    />
                    <p id="emailerr" style={{ color: 'red' }}>
                      {emailErr}
                    </p>
                    <br />
                    <input
                      type="password"
                      placeholder="enter your pass"
                      className="innerspace"
                      id="signpass"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={handlePassBlur}
                    />
                    <p id="passerr" style={{ color: 'red' }}>
                      {passErr}
                    </p>
                    <br />
                    <input type="checkbox" id="scbox" />
                    <label htmlFor="scbox" style={{ color: 'white' }}>
                      remember me
                    </label>
                    <br />
                    <button
                      className="btn btn-primary formbtn"
                      type="submit"
                      id="formBtn"
                    >
                      sign up
                    </button>
                    <p className="text-white">
                      already have an account?<a href="#!">Sign in</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

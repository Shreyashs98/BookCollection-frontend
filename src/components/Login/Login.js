import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../DisplayMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/actions/users/userActions';

const Login = () => {
  const [email, setEmail] = useState('shreyas@gmail.com');
  const [password, setPassword] = useState('12345678');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoginDetails = useSelector(state => state.userLogin);
  const { loading, userInfo, error } = userLoginDetails;

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  const submitFormHandler = e => {
    e.preventDefault();
    
    // Simulate a successful login by dispatching the action with dummy data
    dispatch(loginUser('shreyas@example.com', '12345678')); // You can use any dummy data here

    // Since we're simulating a successful login, navigate to the desired page
    navigate('/');
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {loading && <Loading />}
          {error && <ErrorMessage error={error} />}
          <h1 className='text-center'>Login</h1>
          <form onSubmit={submitFormHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

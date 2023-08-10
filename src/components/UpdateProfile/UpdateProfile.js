import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/users/userActions';
import SuccessMessage from '../DisplayMessage/SuccessMessage';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  //Get the user from localstorage and pass to the initial states
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const [name, setname] = useState(userInfo ? userInfo.name : '');
  const [email, setemail] = useState(userInfo ? userInfo.email : '');
  const [password, setpassword] = useState('');

  //Get the updated user details from store and display message
  const updatedUser = useSelector(state => state.updatedUser);
  const { user, loading, success } = updatedUser;

  //dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //submit
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(updateUser(name, email, password));
    console.log(user, loading, success);
    navigate('/profile');

  };

  // If user details have been updated successfully, show success message
  if (user && !loading && success) {
    return (
      <SuccessMessage msg='Updated successfully. Logout and login with your new credentials' />
    );
  }

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <h1 className='text-center'>Update</h1>
          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                  value={name}
                  onChange={e => setname(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setemail(e.target.value)}
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
                  onChange={e => setpassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-primary m-auto'>
                Update your profile
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;

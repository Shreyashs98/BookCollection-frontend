import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Book store
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
  <button
    type='button'
    className='btn text-white'
    data-toggle='modal'
    data-target='#aboutModal'>
    About
  </button>
  <div className='modal fade' id='aboutModal' tabIndex='-1' role='dialog' aria-labelledby='aboutModalLabel' aria-hidden='true'>
    <div className='modal-dialog modal-dialog-centered' role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title' id='aboutModalLabel'>
            App functionalities
          </h5>
          <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div className='modal-body'>
          <ul className='list-group'>
            <li className='list-group-item active'>
              <i className='fas fa-clipboard-list text-white mr-3' style={{ fontSize: '1.5rem' }}></i>
              Register User
              <hr />
            </li>
            <li className='list-group-item'>
              <i className='fas fa-clipboard-list text-white mr-3' style={{ fontSize: '1.5rem' }}></i>
              Update Profile
              <hr />
            </li>
            <li className='list-group-item'>
              <i className='fas fa-clipboard-list text-white mr-3' style={{ fontSize: '1.5rem' }}></i>
              Login
              <hr />
            </li>
            <li className='list-group-item'>
              <i className='fas fa-clipboard-list text-white mr-3' style={{ fontSize: '1.5rem' }}></i>
              User Dashboard
              <hr />
            </li>
            <li className='list-group-item'>
              <i className='fas fa-clipboard-list text-white mr-3' style={{ fontSize: '1.5rem' }}></i>
              List of Users
              <hr />
            </li>
            <li className='list-group-item'>
              <i className='fas fa-clipboard-list text-white mr-3' style={{ fontSize: '1.5rem' }}></i>
              List of Books
              <hr />
            </li>
            <li className='list-group-item'>
              <i className='fas fa-clipboard-list text-white mr-3' style={{ fontSize: '1.5rem' }}></i>
              Many more
              <hr />
            </li>
          </ul>
        </div>
        <div className='modal-footer'>
          <a className='mr-5' href='https://github.com/shreyashs98' target='_'>
            developed by: Shreyas H S
          </a>
          <button type='button' className='btn btn-danger' data-dismiss='modal'>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</li>

            <li className='nav-item'>
              <Link className='nav-link' to='/books'>
                Books
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/addbook'>
                Add book
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/users'>
                Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/register'>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

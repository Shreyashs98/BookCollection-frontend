import React from 'react';
import { deleteBook } from '../../redux/actions/books/bookActions';
import { useDispatch } from 'react-redux';

const Book = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className='card mb-3' style={{ maxWidth: '540px' }}>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img src='...' className='card-img' alt='...' />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>Book</h5>
              <p className='card-text'>Book detail</p>
              <p className='card-text'>
                <small className='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

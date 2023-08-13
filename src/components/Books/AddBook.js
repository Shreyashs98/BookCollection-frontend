import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookImage, setBookImage] = useState('');

  const navigate = useNavigate();

  const formSubmitHandler = e => {
    e.preventDefault();
    // Simulate adding a book locally (no backend)
    const newBook = {
      category,
      title,
      author,
      bookImage
    };
    console.log('Added book:', newBook);

    // Clear the form fields
    setCategory('');
    setTitle('');
    setAuthor('');
    setBookImage('');

    // Navigate to the desired page (you can adjust the path accordingly)
    navigate('/books');
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            Add Book
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content backg-color'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create Book
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <h1 className='text-center'>Add Book</h1>
                  <form onSubmit={formSubmitHandler}>
                    <fieldset>
                      <div className='form-group'>
                        <select
                          value={category}
                          onChange={e => setCategory(e.target.value)}
                          className='custom-select'
                        >
                          <option value='' disabled>Select Any Genre</option>
                          <option value='programming'>Programming</option>
                          <option value='religion'>Religion</option>
                          <option value='life'>Life</option>
                          <option value='culture'>Culture</option>
                          <option value='history'>History</option>
                          <option value='science'>Science</option>
                          <option value='fantasy'>Fantasy</option>
                          <option value='romance'>Romance</option>
                          <option value='mystery'>Mystery</option>
                          <option value='education'>Education</option>
                          <option value='self-help'>Self-Help</option>
                          <option value='biography'>Biography</option>
                          <option value='cooking'>Cooking</option>
                          <option value='travel'>Travel</option>
                          <option value='health'>Health</option>
                          <option value='sports'>Sports</option>
                          <option value='technology'>Technology</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                      {/* Rest of the form fields */}
                    </fieldset>
                    <div className='form-group'>
                      <label className="white-text" htmlFor='exampleInputEmail1'>Author </label>
                      <input
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        type='text'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='Author name'
                      />
                    </div>
                    <div className='form-group'>
                      <label className="white-text" htmlFor='exampleInputPassword1'>Title</label>
                      <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type='text'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Book title'
                      />
                    </div>
                    <div className='form-group'>
                      <label className="white-text" htmlFor='exampleInputPassword1'>Book Image URL</label>
                      <input
                        value={bookImage}
                        onChange={e => setBookImage(e.target.value)}
                        type='text'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Enter image URL'
                      />
                    </div>
                    <button type='submit' className='btn btn-warning m-auto'>
                      Create Book
                    </button>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, updateBook } from '../../redux/actions/books/bookActions';

const BookDetail = () => {
  const { id } = useParams();

  // Get the book details and fill it in the form
  const bookDetails = useSelector(state => state.bookDetails);
  const { book, loading } = bookDetails;

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookImage, setBookImage] = useState('');

  useEffect(() => {
    if (!loading && book) {
      setCategory(book.category);
      setTitle(book.title);
      setAuthor(book.author);
      setBookImage(book.bookImage); // Add this line to set the initial value for bookImage
    }
  }, [loading, book]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  const navigate = useNavigate();

  const formSubmitHandler = e => {
    e.preventDefault();
    const data = {
      category,
      title,
      author,
      bookImage, // Add bookImage to the data object
    };
    dispatch(updateBook(id, data));
    navigate('/books');
    window.location.reload();
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {book ? (
            <>
              <h1 className='text-center'>Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                  <div className='form-group'>
                    <select
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      className='custom-select'
                    >
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

                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Author </label>
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
                    <label htmlFor='exampleInputPassword1'>Title</label>
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
                    <label htmlFor='exampleInputPassword1'>Book Image URL</label>
                    <input
                      value={bookImage}
                      onChange={e => setBookImage(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='Enter image URL'
                    />
                  </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                    Update Book
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            'No'
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

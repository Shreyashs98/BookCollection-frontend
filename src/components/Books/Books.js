import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Loading from '../Loading/Loading';

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const defaultBooks = [
    {
      _id: '1',
      title: 'Book Title',
      author: 'Author',
      bookImage: 'https://www.mswordcoverpages.com/wp-content/uploads/2018/10/Book-cover-page-3-CRC.png',
    },
    {
      _id: '2',
      title: 'C programming',
      author: 'Dennis Ritchie',
      bookImage: 'https://m.media-amazon.com/images/I/41vUdzcR8cL.jpg',
    },
    {
      _id: '3',
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      bookImage: 'https://m.media-amazon.com/images/I/51M-mIhC35L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    },
    {
      _id: '4',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      bookImage: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif',
    },
    {
      _id: '5',
      title: 'The Immortal Life of Henrietta Lacks',
      author: 'Rebecca Skloot',
      bookImage: 'https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-270/edition/9781509877027.jpg',
    },
    {
      _id: '6',
      title: 'Atomic Habits',
      author: 'James Clear',
      bookImage: 'https://m.media-amazon.com/images/I/51-nXsSRfZL.jpg',
    },
    {
      _id: '7',
      title: 'Becoming',
      author: 'Michelle Obama',
      bookImage: 'https://m.media-amazon.com/images/I/41gX3bJ-lcL.jpg',
    },
    {
      _id: '8',
      title: 'Control your mind and master your feelings',
      author: 'Eric Robertson',
      bookImage: 'https://covers.openlibrary.org/b/id/12009823-L.jpg',
    },
    {
      _id: '9',
      title: 'The World',
      author: '',
      bookImage: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTdFjm-nvxwdcqIy1htQk0gFOOahLlXX76nnIX5LYnMvhH_WfFx',
    },
    // Add more default books as needed
  ];

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <div className='mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Search by book name...'
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Book Image</th>
                <th scope='col'>Book Name</th>
                <th scope='col'>Author</th>
              </tr>
            </thead>
            <tbody>
              {defaultBooks
                .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(book => (
                  <tr className='table-dark' key={book._id}>
                    <td>
                      <img src={book.bookImage} alt='Book Cover' style={{ width: '100px' }} />
                    </td>
                    <th scope='row'>{book.title}</th>
                    <td>{book.author}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Books;

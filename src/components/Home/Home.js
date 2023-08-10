import React from 'react';
import './Home.css'; // Import custom styles for Home component
import videoSource from '../../assets/books.mp4'; // Import the video source
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Book Collection</h1>
          <p>Manage your Books</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

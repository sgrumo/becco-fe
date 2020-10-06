import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className="container">
      <section className="title-container">
        <h1>
          Becco
      </h1>
        <h3>
          Beccacino online, Il gioco più bello di sempre
      </h3>
      </section>
      <Link to="/signin">
        <button className="btn btn-primary">Vai al gioco!</button>
      </Link>
    </div>
  )

}

export default Home;

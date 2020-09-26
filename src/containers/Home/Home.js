import React from 'react';
import { Link } from 'react-router-dom'
import './Home.scss';

const Home = () => {
  return (
    <section className="section home-section">
      <div className="container">
        <h1 className="title">
          Becco Online
        </h1>
        <h2 className="subtitle">
          Il gioco più bello di sempre
        </h2>
      </div>
      <Link to="/about">
        <button className="button is-primary regolamento-button">Regolamento
        </button>
      </Link>
    </section>
  )

}

export default Home;

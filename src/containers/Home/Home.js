import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Home.scss';

const Home = () => {
  return (
    <div className="container">
      <h1>
        Becco Online
      </h1>
      <h2>
        Il gioco più bello di sempre
      </h2>
      <LoginForm />
    </div>
  )

}

export default Home;

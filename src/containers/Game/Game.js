import React, { useEffect, useState } from 'react';
import CreateMatchModal from '../../components/CreateMatchModal/CreateMatchModal';
import PasswordMatchModal from '../../components/PasswordMatchModal/PasswordMatchModal';
import { getMatches } from '../../utils/api';
import './Game.scss';

const Game = () => {
  const username = sessionStorage.getItem('username');

  const [matches, setMatches] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedMatch, setSelectedMatch] = useState(matches[0]);

  const handleJoin = (match) => {
    setSelectedMatch(match);
  }

  useEffect(() => {
    getMatches().then(res => {
      setMatches(res.data);
      setSelectedMatch(res.data[0])
    }).catch(err => setErrorMessage(err.response.data.message));
  }, []);

  const listOfMatches = matches.map((match, index) => (
    <div className="match-item" key={index}>
      <b>{match.name}</b>
      <span>{match.numPlayers} / 4</span>
      {match.visibility === 'private' && <i>Privata</i>}
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#passwordMatchModal" onClick={() => handleJoin(match)}>Joina</button>
    </div>)
  );

  return (
    <div className="container">
      Logged as: <b>{username}</b>
      <h3>Partite</h3>
      {/* <input className="form-control" type="text" placeholder="Search" aria-label="Search" /> */}
      <div className="matches-container">
        {matches.length !== 0 && listOfMatches}
        {matches.length === 0 && <span>Nessuna partita</span>}
      </div>
      <button className="btn btn-warning" data-toggle="modal" data-target="#createMatchModal">Crea match</button>
      {errorMessage &&
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      }
      <CreateMatchModal />
      {selectedMatch && <PasswordMatchModal match={selectedMatch} />}
    </div>
  )

}

export default Game;

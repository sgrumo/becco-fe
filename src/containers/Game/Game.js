import React, { useEffect, useState } from 'react';
import './Game.scss';
import { getMatches } from '../../utils/api';

const Game = () => {
  const username = sessionStorage.getItem('username');
  const [matches, setMatches] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getMatches().then(res => setMatches(res.data)).catch(err => setErrorMessage(err.response.data.message));
  }, []);

  const listOfMatches = matches.map((match, index) => (
    <div className="match" key={index}>
      <b>{match.name}</b>
      <span>{match.numPlayers} / 4</span>
      {match.visibility === 'private' && <i>Privata</i>}
      <button className="btn btn-primary">Joina</button>
    </div>)
  );

  return (
    <div className="container">
      Logged as: <b>{username}</b>
      <h3>Partite</h3>
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      <div className="matches-container">
        {listOfMatches}
      </div>
      {errorMessage &&
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      }
      {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )

}

export default Game;

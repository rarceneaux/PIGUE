import React from 'react';
import { Link } from 'react-router-dom';

import './PlayCard.scss';

class PlayCard extends React.Component {
  render() {
    const { play } = this.props;
        return (
                <div className="PlayCard-jumbotron">
                    <div className="card-body text-center play ">
                    <img className="card-img-top" src={'https://reactnativestarter-hosting-mobilehub-132039435.s3.amazonaws.com/black8.jpg'} alt="player-wrist"></img>
                    <h1 className="card-title">{play.formationName}</h1>
                    <h2 className="card-title">{play.name}</h2>
                    <h3 className="card-title">{play.type}</h3>
                    <Link className="btn btn-dark btn-outline-dark black" to={`/playbook/${play.id}`}>View Play</Link>    
                    </div>
                </div>
    );
  }
}

export {PlayCard};

import React from 'react';
import { Link } from 'react-router-dom';
import playShape from '../../../helpers/propz/playShape';
import './PlayCard.scss';



class PlayCard extends React.Component {
  

    render() {
        const { play } = this.props;
        return (
          <div className="PlayCard-jumbotron">
            <div className="card-body text-center play ">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h2 className="card-title">{play.formationName}</h2>
            <h3 className="card-title">{play.name}</h3>
            <br></br>
            <br></br>
            <br></br>
            <Link className="btn btn-dark" to={`/playbook/${play.id}`}>View Play</Link>    
      </div>
    </div>
        );
      }
}

export {PlayCard};

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
            {/* <h3>Play Name:</h3> */}
            <br></br>
            <br></br>
            <h3 className="card-title">{play.formationName}</h3>
            <h3 className="card-title">{play.name}</h3>
            {/* <h2>Play Formation:</h2>           */}
            <br></br>
            <br></br>
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

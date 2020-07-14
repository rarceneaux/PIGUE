import React from 'react';
import { Link } from 'react-router-dom';
import playShape from '../../../helpers/propz/playShape';
import './PlayCard.scss';



class PlayCard extends React.Component {
    static propTypes = {
        play: playShape,
    }

    render() {
        const { play, SinglePlayView } = this.props;
        return (
          <div className="PlayCard">
            <div className="card-body text-center play">
            <h2>Play Name:</h2>
            <h3 className="card-title">{play.name}</h3>
            <h2>Play Formation:</h2>          
            <h3 className="card-title">{play.formationName}</h3>
            <Link className="btn btn-dark " to={`/SinglePlayView/${SinglePlayView}/play`}>View</Link>    
      </div>
    </div>
        );
      }
}

export {PlayCard};

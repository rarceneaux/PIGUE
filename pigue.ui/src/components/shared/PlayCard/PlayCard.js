import React from 'react';

import playShape from '../../../helpers/propz/playShape';
import './PlayCard';



class PlayCard extends React.Component {
    static propTypes = {
        play: playShape,
    }

    render() {
        const { play } = this.props;
        return (
          <div className="PlayCard">
            <div className="card-body text-center">
            <h1 className="card-title">{play.name}</h1>
            <h1 className="card-title">{play.id}</h1>

      </div>
    </div>
        );
      }
}

export {PlayCard};

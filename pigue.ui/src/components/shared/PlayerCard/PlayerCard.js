import React from 'react';

import {playerShape} from '../../../helpers/propz/playerShape';
import './PlayerCard';



class PlayerCard extends React.Component {
    static propTypes = {
        player: playerShape,
    }

    render() {
        const { player } = this.props;
        return (
          <div className="PlayerCard">
            <div className="card-body text-center">
            <h1 className="card-title">{player.firstName} {player.lastName}</h1>
            <h1 className="card-title">{player.position}</h1>
            {/* <h1 className="card-title">{play.Img}</h1> */}

      </div>
    </div>
        );
      }
}

export {PlayerCard};

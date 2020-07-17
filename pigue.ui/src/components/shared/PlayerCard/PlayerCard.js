import React from 'react';
import PropTypes from 'prop-types';
import {playerShape} from '../../../helpers/propz/playerShape';
import './PlayerCard.scss';



class PlayerCard extends React.Component {
    static propTypes = {
        player: playerShape,
    }

    render() {
        const { player } = this.props;
        return (
          <div className="PlayerCard">
            <div className="card-body text-center">
            <img className="topps" src={player.img}  alt="..."/>
            <h1 className="card-title">{player.firstName} {player.lastName}</h1>
            <h1 className="card-title">{player.position}</h1>

      </div>
    </div>
        );
      }
}

export {PlayerCard};

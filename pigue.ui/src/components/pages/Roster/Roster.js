import React from 'react';
import {PlayerCard} from '../../shared/PlayerCard/PlayerCard';
import {getAllPlayers} from '../../../helpers/data/playerData';

import './Roster.scss';


class Roster extends React.Component {
    state = {
        players:[],
    }

componentDidMount(){
    getAllPlayers()
    .then(players => this.setState({players:players}));
}


    render() {
        return(
            <div className="Roster">
            {this.state.players.map((player) => <PlayerCard key={player.id} player={player}/>)}
            </div>
        )
    }

}

export   { Roster } ;

import React from 'react';
import {PlayerCard} from '../../shared/PlayerCard/PlayerCard';
import {getAllPlayers} from '../../../helpers/data/playerData';
import { Link } from 'react-router-dom';
import Drone from '../../video/drone.mp4';
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
            <div className="team">
<video autoPlay loop muted style={{
    position: "fixed",
    width:"100%",
    left:"50%",
    top:"50%",
    height:"100%",
    objectFit:"cover",
    transform:"translate(-50%,-50%)",
    zIndex:"-10"
}} >
    <source src={Drone} type="video/mp4"/>
</video>
            {/* <Link className="btn btn-primary btn-lg" to={'/huddle'}>Add Player</Link>    */}

            </div>
            {this.state.players.map((player) => <PlayerCard key={player.id} player={player}/>)}
            </div>
        )
    }

}

export   { Roster } ;

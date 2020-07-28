import React from 'react';
import {PlayerCard} from '../../shared/PlayerCard/PlayerCard';
import getAllPlayers from '../../../helpers/data/playerData';
import playerData from '../../../helpers/data/playerData';
import { Link } from 'react-router-dom';
import Drone from '../../../assets/video/drone.mp4';


import './Roster.scss';

class Roster extends React.Component {
    state = {
        players: [],
    }

componentDidMount(){
    const { playerId } = this.props.match.params;
    playerData.getAllPlayers( playerId )
    .then(players => this.setState({players:players}));
}

getPlayers = () => {
    getAllPlayers()
    .then((players) => {
      this.setState({players});
    })
    .catch((errFromPlayers) => console.error({ errFromPlayers}));
  }

render() {
        return(<div className="Roster">
                <video  autoPlay loop muted style={{
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
                <div className="add-player">
                        <Link className="btn btn-primary btn-lg btn-outline-dark" to={'/roster/new'}>Add Player</Link>  
                </div>
                <div className="daPlayas">
                        {this.state.players.map((player) => <PlayerCard key={player.id} player={player} />)}
                </div>
                </div>);
        }
}

export   { Roster } ;

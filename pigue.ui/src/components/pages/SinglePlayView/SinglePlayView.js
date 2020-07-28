import React from 'react';
import { Link } from 'react-router-dom';
import {getPlayById} from '../../../helpers/data/playData';
import {getFormationById} from '../../../helpers/data/formationData';
import {PlayerCard} from '../../shared/PlayerCard/PlayerCard';
import SinglePlay from '../../../assets/video/SinglePlayView.mp4';

import './SinglePlayView.scss';

class SinglePlayView extends React.Component {
  state = {
    play:{},
    formation:{},
  }

componentDidMount() {
  const id = this.props.match.params.id;
    getFormationById(id)
         .then(formation => this.setState({formation:formation.data}));
    getPlayById(id)
          .then(play => this.setState({play:play.data}));
}

render() {
            const { play } = this.state;
        if(play.players){
          return (
            <div className="SinglePlayView">
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
                  <source src={SinglePlay} type="video/mp4"/>
            </video>
            <div className="PlayBackGround">
              <h1 className="play1">Play: {play.playName}</h1>
              <h2 className="play1">Formation: {play.formationName}</h2>
                <Link className="btn btn-primary btn-lg btn-outline-dark" to={'/huddle'}>Run Play</Link>
                <Link className="btn btn-primary btn-lg btn-outline-dark" to={'/playbook'}>Audible</Link> 
                <Link className="btn btn-primary btn-lg btn-outline-dark" to={'/huddle'}>Timeout</Link>   
            </div>  
                <div className="daPlay">
                      {play.players.map((p) => <PlayerCard key={p.id} player={p} play={play}/>)}
                </div>
            </div>
          );
        }
        else{
            return (<div className="spinner-border text-primary"  role="status">
              <span className="sr-only">Loading...</span>
        </div>)
        }
      }
}

export {SinglePlayView} ;
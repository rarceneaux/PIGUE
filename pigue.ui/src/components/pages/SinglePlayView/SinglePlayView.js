import React from 'react';
import { Link } from 'react-router-dom';
import playShape from '../../../helpers/propz/playShape';
import Proptypes from 'prop-types';
import {getPlayById} from '../../../helpers/data/playData';
import {PlayerCard} from '../../shared/PlayerCard/PlayerCard';
import SinglePlay from '../../video/SinglePlayView.mp4';
import './SinglePlayView.scss';


class SinglePlayView extends React.Component {
  state = {
    play:{},
  }

componentDidMount() {
 const id = this.props.match.params.id;
  getPlayById(id)
  .then(play => this.setState({play:play.data}));
}


    render() {
        const { play } = this.state;
        console.log(play)
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
              <h2 className="play1">{play.playName}</h2>
              <h3 className="play1">{play.formationName}</h3>
            <Link className="btn btn-primary btn-lg" to={'/huddle'}>Run Play</Link>
            <Link className="btn btn-dark btn-lg" to={'/playbook'}>Audible</Link> 
            <Link className="btn btn-primary btn-lg" to={'/huddle'}>Timeout</Link>   
            </div>  
              <div className="daPlay">
              {/* <img className="formations" src={play.formationimg}  alt="..."/> */}
            {play.players.map((p) => <PlayerCard key={p.id} player={p} play={play} />)}
        </div>
      </div>);
        }
        else{
          return (<div className="spinner-border text-primary"  role="status">
          <span className="sr-only">Loading...</span>
        </div>)
        }
      }
}

export {SinglePlayView}
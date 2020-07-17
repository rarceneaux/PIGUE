import React from 'react';
import { Link } from 'react-router-dom';
import playShape from '../../../helpers/propz/playShape';
import Proptypes from 'prop-types';
import {getPlayById} from '../../../helpers/data/playData';
import {PlayerCard} from '../../shared/PlayerCard/PlayerCard';
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
              <div className="daPlay">
              <h3 className="play1">{play.playName}</h3>
              <h3 className="play1">{play.formationName}</h3>
            <Link className="btn btn-dark btn-lg" to={'/playbook'}>Audible</Link>   
            <Link className="btn btn-primary btn-lg" to={'/huddle'}>Timeout</Link>   
            {play.players.map((p) => <PlayerCard key={p.id} player={p} />)}
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
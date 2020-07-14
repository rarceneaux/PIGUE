import React from 'react';
import { Link } from 'react-router-dom';
import playShape from '../../../helpers/propz/playShape';
import Proptypes from 'prop-types';
import {getPlayById} from '../../../helpers/data/playData';
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
        return (
          <div className="SinglePlayView">
            <div className="card-body text-center play">
            <h2>Play Name:</h2>
            <h3 className="card-title">{play.name}</h3>
            <h2>Play Formation:</h2>          
            <h3 className="card-title">{play.formationName}</h3>
            <Link className="btn btn-dark" to={'/playbook'}>Playbook</Link>   
            <Link className="btn btn-danger" to={'/huddle'}>Delete</Link>   

      </div>
    </div>
        );
      }
}

export {SinglePlayView};

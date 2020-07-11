import React, { Component } from 'react';
import {PlayCard} from '../../shared/PlayCard/PlayCard';
import {getAllPlays} from '../../../helpers/data/playData';


class Playbook extends Component {
    state = {
        plays:[],
    }


componentDidMount() {
    getAllPlays()
    .then(plays => this.setState({plays:plays}));
}


    render() {
        return(
            <div className="Playbook">
                {this.state.plays.map((play) => <PlayCard key={play.id} play={play}/>)}
            </div>
        )
    }
}

export { Playbook };

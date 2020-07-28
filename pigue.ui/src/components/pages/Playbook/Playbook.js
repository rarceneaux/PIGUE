import React, { Component } from 'react';
import {PlayCard} from '../../shared/PlayCard/PlayCard';
import {getAllPlays} from '../../../helpers/data/playData';

import './Playbook.scss';

class Playbook extends Component {
    state = {
        plays: [],
    }

componentDidMount() {
    getAllPlays()
        .then(plays => this.setState({plays:plays}));
}
    render() {
        return(
            <div className="Playbook">
                {this.state.plays.map((p) => <PlayCard key={p.id} play={p} />)}
            </div>
        )
    }
}

export { Playbook };

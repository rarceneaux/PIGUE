import React, { Component } from 'react';
import {getAllPlays} from '../../../helpers/data/playData';


class Playbook extends Component {
    state = {
        plays:[]
    };


componentDidMount() {
    getAllPlays()
    .then(plays => this.setState({plays:plays}));
}


    render() {
        const { plays } = this.state;
        return(
            <div className="Playbook">
                
            </div>
        )
    }
}
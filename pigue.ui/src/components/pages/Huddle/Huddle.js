import React from 'react';
import { Link } from 'react-router-dom';
import { Timer } from '../../shared/Timer/Timer';

import './Huddle.scss';

class Huddle extends React.Component {
    render() {
        return(
            <div className="Huddle">
              <div className="card-body text-center play">
                    <h1 className="gametime"><Timer/></h1>
                    <Link className="btn btn-primary btn-lg btn-outline-dark" to={'/playbook'}>Playbook</Link>    
                    <Link className="btn btn-success btn-lg btn-outline-dark" to={'/playbook/new'}>Add Play</Link>    
                    <Link className="btn btn-secondary btn-lg btn-outline-dark" to={'/roster'}>Roster</Link>
                    <Link className="btn btn-secondary btn-lg btn-outline-dark" to={'/'}>Timeout</Link>    
                </div>
            </div>
        )
    }
}

export  {Huddle};

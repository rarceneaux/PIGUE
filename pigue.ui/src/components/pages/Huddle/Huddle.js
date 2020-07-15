import React from 'react';
import { Link } from 'react-router-dom';
import './Huddle.scss';


class Huddle extends React.Component {
    render() {
        return(
            <div className="Huddle">
              <div className="card-body text-center play">
            <h2>GAME TIME:</h2>
            <Link className="btn btn-primary" to={'/playbook'}>Playbook</Link>    
            <Link className="btn btn-success" to={'/playbook/new'}>Add Play</Link>    
            <Link className="btn btn-secondary" to={'/roster'}>Roster</Link>    
            </div>
            </div>
        )
    }

}

export  {Huddle};

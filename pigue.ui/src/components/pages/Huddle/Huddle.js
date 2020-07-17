import React from 'react';
import { Link } from 'react-router-dom';
import './Huddle.scss';


class Huddle extends React.Component {
    render() {
        return(
            <div className="Huddle">
              <div className="card-body text-center play">
            <h1 className="gametime">GAME TIME</h1>
            <Link className="btn btn-primary btn-lg btn-outline-dark" to={'/playbook'}>Playbook</Link>    
            <Link className="btn btn-success btn-lg btn-outline-dark" to={'/playbook/new'}>Add Play</Link>    
            <Link className="btn btn-secondary btn-lg btn-outline-dark" to={'/roster'}>Roster</Link>    
            </div>
            </div>
        )
    }

}

export  {Huddle};

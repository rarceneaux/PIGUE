import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.scss';

class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/"><img src="https://reactnativestarter-hosting-mobilehub-132039435.s3.amazonaws.com/PIGUE_Logo.png" width="300" height="125" alt=""/></Link>
                <Link className="nav-item nav-link" to="/">Sideline</Link>
                <Link className="nav-item nav-link" to="/huddle">Huddle</Link>
                <Link className="nav-item nav-link" to="/playbook">Playbook</Link>
                <Link className="nav-item nav-link" to="/roster">Roster</Link>
            </nav>
            </div>
        )
    }
}

export {Navbar};

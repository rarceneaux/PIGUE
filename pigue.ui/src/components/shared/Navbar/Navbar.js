import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.scss';

class Navbar extends React.Component {
    render() {
        return(
            <div className="Navbar">
                <nav className="navbar navbar-static-top navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"/>
                <Link className="navbar-brand pigue" to="/"><img src="https://reactnativestarter-hosting-mobilehub-132039435.s3.amazonaws.com/PIGUE_Logo.png" width="300" height="125" alt=""/></Link>
                <Link className="nav-item nav-link ml-auto" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/huddle">Huddle</Link>
                <Link className="nav-item nav-link" to="/playbook">Playbook</Link>
                <Link className="nav-item nav-link" to="/roster">Roster</Link>
            </nav>
            </div>
        )
    }
}

export {Navbar};

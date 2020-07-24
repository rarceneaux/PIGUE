import React from 'react';
import './Home.scss';

class Home extends React.Component {

render() {
    return(
        <div className="Home">
            <img src="https://reactnativestarter-hosting-mobilehub-132039435.s3.amazonaws.com/Home.jpg" width="100%" height=""  alt="football-player"/>
            <audio controls autoPlay>
                <source src="https://reactnativestarter-hosting-mobilehub-132039435.s3.amazonaws.com/MNF.m4a"></source>
            </audio>
        </div>)
    }
}   

export  {Home};

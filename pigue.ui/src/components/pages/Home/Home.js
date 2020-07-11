import React from 'react';
/*import { Link } from 'react-router-dom';*/
import './Home.scss';


class Home extends React.Component {
    render() {
        return(
            <div className="home-background-img">
                <img src="https://reactnativestarter-hosting-mobilehub-132039435.s3.amazonaws.com/Home.jpg" alt="football-player"/>
            </div>
        )
    }

}

export default Home;
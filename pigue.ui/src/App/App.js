import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Navbar from '../components/shared/Navbar/Navbar';
import './App.scss';



const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};


class App extends React.Component {
  render() { 
  return(
    <div className="App">
      <Router>
      <Navbar/>
      <Home/>
        <Switch>
        <PublicRoute path="/" exact component={Home}/>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;
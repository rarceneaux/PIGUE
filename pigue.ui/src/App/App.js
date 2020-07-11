import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {Home} from '../components/pages/Home/Home';
import {Playbook} from '../components/pages/Playbook/Playbook';
import {Navbar} from '../components/shared/Navbar/Navbar';
import './App.scss';






class App extends React.Component {
  render() { 
  return(
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/Home" exact component={Home}/>
        <Route path="/playbook" exact component={Playbook} />
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;

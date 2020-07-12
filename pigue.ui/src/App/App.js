import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Huddle} from '../components/pages/Huddle/Huddle';
import {Playbook} from '../components/pages/Playbook/Playbook';
import {Roster} from '../components/pages/Roster/Roster';
import {Navbar} from '../components/shared/Navbar/Navbar';
import {Home} from '../components/pages/Home/Home';
import {Formation} from '../components/pages/Formation/Formation'

import './App.scss';

class App extends React.Component {
  render() { 
  return(
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/huddle" exact component={Huddle}/>
        <Route path="/playbook" exact component={Playbook}/>
        <Route path="/formations" exact component={Formation}/>
        <Route path="/roster" exact component={Roster}/>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;

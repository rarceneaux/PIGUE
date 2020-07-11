import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Huddle} from '../components/pages/Huddle/Huddle';
import {Playbook} from '../components/pages/Playbook/Playbook';
import {Roster} from '../components/pages/Roster/Roster';
import {Navbar} from '../components/shared/Navbar/Navbar';

import './App.scss';

class App extends React.Component {
  render() { 
  return(
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/" exact component={Huddle}/>
        <Route path="/playbook" exact component={Playbook} />
        <Route path="/roster" exact component={Roster} />
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;

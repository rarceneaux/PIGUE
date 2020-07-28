import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import firebaseConnection from '../helpers/data/connections';
import {Huddle} from '../components/pages/Huddle/Huddle';
import {Playbook} from '../components/pages/Playbook/Playbook';
import {Formation} from '../components/pages/Formation/Formation';
import {Roster} from '../components/pages/Roster/Roster';
import {Navbar} from '../components/shared/Navbar/Navbar';
import {Timer} from '../components/shared/Timer/Timer';
import {Home} from '../components/pages/Home/Home';
import {AddPlayForm} from '../components/pages/AddPlayForm/AddPlayForm';
import {AddPlayerForm} from '../components/pages/AddPlayerForm/AddPlayerForm';
import {SinglePlayView} from '../components/pages/SinglePlayView/SinglePlayView';

import './App.scss';

firebaseConnection();

class App extends React.Component {
  render() { 
  return(
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/huddle" exact component={Huddle} Timer={Timer}/>
        <Route path="/playbook" exact component={Playbook}/>
        <Route path="/playbook/new" exact component={AddPlayForm}/>
        <Route path="/playbook/:id" exact component={SinglePlayView}/>
        <Route path="/roster" exact component={Roster}/>
        <Route path="/roster/new" exact component={AddPlayerForm}/>
        <Route path="/formations" exact component={Formation}/>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;

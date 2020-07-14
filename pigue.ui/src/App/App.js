import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connections';
import {Huddle} from '../components/pages/Huddle/Huddle';
import {Playbook} from '../components/pages/Playbook/Playbook';
import {Roster} from '../components/pages/Roster/Roster';
import {Navbar} from '../components/shared/Navbar/Navbar';
import {Home} from '../components/pages/Home/Home';
import {AddPlayForm} from '../components/pages/AddPlayForm/AddPlayForm';
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
        <Route path="/huddle" exact component={Huddle}/>
        <Route path="/playbook" exact component={Playbook}/>
        <Route path="/playbook/new" exact component={AddPlayForm}/>
        {/* <Route path="/roster/new" exact component={AddPlayerForm}/> */}
       <Route path="/playbook/:playId" exact component={SinglePlayView}/>
      <Route path="/roster" exact component={Roster}/>
        </Switch>
      </Router>
    </div>
    )
  }
}

export default App;

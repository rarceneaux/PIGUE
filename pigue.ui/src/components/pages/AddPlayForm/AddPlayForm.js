import React from 'react';
import { Link } from 'react-router-dom';
import  {getAllPlays, addNewPlay} from '../../../helpers/data/playData';
import {getAllFormations} from '../../../helpers/data/formationData'
 
import './AddPlayForm.scss';


class AddPlayForm extends React.Component {
    state = {
        Name: '',
        Type: '',
        FormationName: '', 
        Type: ''
    }


    componentDidMount() {
    // get all the formation names with IDs
    // put in state
    // build the dropdown value={formation.ID}

        const { playId } = this.props.match.params;
        if (playId) {
          getAllPlays((playId))
            .then((response) => {
              const play = response.data;
              this.setState({ Name: play.Name, Type: play.Type, FormationName: play.FormationName });
            })
            .catch((err) => console.error('err', err));
        }
      }
    
      nameChange = (e) => {
        e.preventDefault();
        this.setState({ Name: e.target.value });
      }
      
      typeChange = (e) => {
        e.preventDefault();
        this.setState({ Type: e.target.value });
      }
      
      formationNameChange = (e) => {
        e.preventDefault();
        this.setState({ FormationName: e.target.value})

    }

    savePlayAEvent = (e) => {
        e.preventDefault();
        const newPlay = {
          name: this.state.Name,
          type: this.state.Type,
          formationName: this.state.FormationName
        };
        addNewPlay((newPlay))
        .then(() => this.props.history.push('/playbook'))
      };

      render() {
        const 
        { Name, 
          Type, 
          FormationName } = this.state; 
                 return (
            <div className="PlayForm">
            <form className="play-details">
          <div className="form-group">
            <label htmlFor="play-title"><h3 className="attheline"> PLAY NAME</h3></label>
            <input
            type="text"
            className="form-control"
            id="play-name"
            placeholder="Enter Play Name"
            value={Name}
            onChange={this.nameChange}/>
          </div>
          <div className="input-group mb-3">
            <label htmlFor="play-type"></label>
            <select
            type="text"
            className="form-control"
            id="Type"
            value={Type}
            onChange={this.typeChange}>
            <option defaultValue>Choose Play Type...</option>
            <option>Run</option>
            <option>Pass</option>
           </select>
          </div>
          <div className="input-group mb-3">
            <label htmlFor="FormationName"></label>
            <select
            type="text"
            className="form-control"
            id="FormationName"
            value={FormationName}
            onChange={this.formationNameChange}>
            <option defaultValue>Choose Formation...</option>
            <option>Wing Right</option>
            <option>Wing Left</option>
            <option>Wing Right & Left </option>
            {/* <option>Pass</option>    
            <option>Pass</option>
            <option>Run</option>
            <option>Pass</option> */}
           </select>
          </div>
          <button className="btn btn-dark btn-lg saveplay" onClick={this.savePlayAEvent}>Save Play</button>
          <Link className="btn btn-dark btn-lg cancel" to={'/huddle'}>Cancel</Link>
         </form>
         </div>
         );
      }
}
       
  

export  { AddPlayForm };
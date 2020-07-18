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
              this.setState({ Name: play.Name, Type: play.Type, FormationName: play.formationName });
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
          formationName } = this.state;
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
          <div className="form-group">
            <label htmlFor="play-type"><h3 className="attheline">RUN or PASS</h3></label>
            <input
            type="text"
            className="form-control"
            id="play-type"
            placeholder="Run or Pass"
            value={Type}
            onChange={this.typeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formation-name"><h3 className="attheline">FORMATION NAME</h3></label>
            <input
            type="text"
            className="form-control"
            id="formation-name"
            placeholder="Formation"
            value={formationName}
            onChange={this.formationNameChange}
            />
          </div>
          <button className="btn btn-dark btn-lg saveplay" onClick={this.savePlayAEvent}>Save Play</button>
          <Link className="btn btn-dark btn-lg cancel" to={'/huddle'}>Cancel</Link>
         </form>
         </div>
         );
      }
}
       
  

export  { AddPlayForm };
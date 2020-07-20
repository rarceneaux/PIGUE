import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MultiSelect from "react-multi-select-component";
import PropTypes from 'prop-types';
import {getAllPlays, addNewPlay} from '../../../helpers/data/playData';
import {playerShape} from '../../../helpers/propz/playerShape';
import {getAllPlayers} from '../../../helpers/data/playerData';
import {getAllFormations} from '../../../helpers/data/formationData'
 
import './AddPlayForm.scss';


class AddPlayForm extends React.Component {
    state = {
      players: [],
      selectedPlayers: [],
      Name: '',
      Type: '',
      FormationName: '', 
      filterPlayers: ''
  }

    componentDidMount() {
    // get all the formation names with IDs
    // put in state
    // build the dropdown value={formation.ID}
        this.getPlayers();
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
    
      getPlayers = () => {
       getAllPlayers()
       .then((players) => {
         this.setState({players});
       })
       .catch((errFromPlayers) => console.error({ errFromPlayers}));
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

    
      playerChange = (playersFromMultiSelect) => {
        console.log(playersFromMultiSelect);
        this.setState({ selectedPlayers: playersFromMultiSelect })
}

    savePlayAEvent = (e) => {
        e.preventDefault();
        const newPlay = {
          name: this.state.Name,
          type: this.state.Type,
          formationName: this.state.FormationName,
          players: this.state.selectedPlayers,
      };
        axios.post("https://localhost:44307/api/playbook", newPlay)
        .then(() => this.props.history.push('/playbook'))
      };

      render() {
        const { Name, Type, FormationName, players } = this.state; 
        const playersForSelect =   players.map((player) => {
          return { label: player.firstName + " " + player.lastName, value: player.id }
        });
        return (
            <div className="PlayForm">
            <form className="play-details">
          <div className="form-group">
            <label htmlFor="play-title"><h3 className="attheline">Playbook Entry</h3></label>
            <input
            type="text"
            className="form-control"
            id="play-name"
            placeholder="Type Play Name"
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
            className="form-control"
            id="FormationName"
            value={FormationName}
            onChange={this.formationNameChange}>
            <option defaultValue>Choose Formation...</option>
            <option>Wing Right</option>
            <option>Wing Left</option>
            <option>Wing Right & Left </option>
           <option>Trips Right</option>    
            <option>Power I Stovepipe</option>
            <option>Power II Stovepipe</option>
           </select>
          </div>
          <div className="">
            <label htmlFor="players"></label>
            <MultiSelect
                  options={playersForSelect}
                  value={this.state.selectedPlayers}
                  onChange={this.playerChange}
                  labelledBy={"Select"}
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn btn-dark btn-lg saveplay" onClick={this.savePlayAEvent}>Save Play</button>
          <Link className="btn btn-dark btn-lg cancel" to={'/huddle'}>Cancel</Link>
         </form>
         </div>
         );
      }
}
       
  

export  { AddPlayForm };
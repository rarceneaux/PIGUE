import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MultiSelect from "react-multi-select-component";
import playerData from '../../../helpers/data/playerData';
import formationData from '../../../helpers/data/formationData';
 
import './AddPlayForm.scss';

class AddPlayForm extends React.Component {
    state = {
      players: [],
      selectedPlayers: [],
      Name: '',
      Type: '',
      FormationId: 1, 
      filterPlayers: '',
      formations: [],
  }

    componentDidMount() {
        this.getPlayers();
        this.getFormations();
      }
    
    getPlayers = () => {
      playerData.getAllPlayers()
      .then((players) => {
        this.setState({players});
      })
      .catch((errFromPlayers) => console.error({ errFromPlayers}));
    }

    getFormations = () => {
      formationData.getAllFormations()
      .then((formations) => {
        this.setState({formations});
      })
      .catch((errFromFormations) => console.error({ errFromFormations}));
    }

      nameChange = (e) => {
        e.preventDefault();
        this.setState({ Name: e.target.value });
      }
      
      typeChange = (e) => {
        e.preventDefault();
        this.setState({ Type: e.target.value });
      }
      
      formationIdChange = (e) => {
        e.preventDefault();
        this.setState({ FormationId: e.target.value})
      }

      playerChange = (playersFromMultiSelect) => {
        this.setState({ selectedPlayers: playersFromMultiSelect })
      }

    savePlayAEvent = (e) => {
      e.preventDefault();
      const newPlay = {
        name: this.state.Name,
        type: this.state.Type,
        formationId: parseInt(this.state.FormationId),
        players: this.state.selectedPlayers,
      };

      axios.post("https://localhost:44307/api/playbook", newPlay)
      .then(() => {
        this.props.history.push('/playbook')
      });
    };

    render() {
        const { Name, Type, FormationId, players, formations } = this.state; 
        const playersForSelect =   players.map((player) => {
          return { label: player.firstName + " " + player.lastName + " " + player.position , value: player.id }
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
            placeholder="Play Name"
            required
            value={Name}
            onChange={this.nameChange}
            />
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
            value={FormationId}
            onChange={this.formationIdChange} placeholder='Select Formation'>
          {
            formations.map(formation => <option key={formation.id} value={formation.id}>{formation.name}</option> )
          }
           </select>
          </div>
          <div className="">
            <label htmlFor="players"></label>
            <MultiSelect
                  options={playersForSelect}
                  value={this.state.selectedPlayers}
                  onChange={this.playerChange}
                  labelledBy={"select"}
                  hasSelectAll={false}
                             />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn btn-dark btn-lg saveplay" onClick={this.savePlayAEvent}>SAVE</button>
          <Link className="btn btn-dark btn-lg cancel" to={'/huddle'}>CANCEL</Link>
         </form>
         </div>
         );
      }
}
       
export  { AddPlayForm };

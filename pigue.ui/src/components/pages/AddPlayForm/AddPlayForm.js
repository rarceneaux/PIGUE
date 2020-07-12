import React from 'react';
import { Link } from 'react-router-dom';
import playData from '../../../helpers/data/playData';

import './AddPlayForm.scss';


class AddPlayForm extends React.Component {
    state = {
        Name: '',
        Type: '',
        FormationId: '', 
    }


    componentDidMount() {
        const { playId } = this.props.match.params;
        if (playId) {
          playData.getAllPlays(playId)
            .then((response) => {
              const play = response.data;
              this.setState({ Name: play.Name, Type: play.Type, FormationId: play.FormationId });
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
      
      formationIdChange = (e) => {
        e.preventDefault();
        this.setState({ FormationId: e.target.value})



    savePlayAEvent = (e) => {
        e.preventDefault();
        const newPlay = {
          Name: this.state.Name,
          Type: this.state.Run,
          FormationId: this.state.FormationId,
        };
        playData.addNewPlay(newPlay)
          .then(() => this.props.history.push('/playbook'))
          .catch((err) => console.error('err', err));
      };

      render() {
        const {
        Name,
        Type,
        FormationId,
        } = this.state;
        const { playId } = this.props.match.params;
        return (
            <div className="EventForm">
            <form className="play-details">
          <div className="form-group">
            <label htmlFor="event-title"><h3>Name of Play</h3></label>
            <input
            type="text"
            className="form-control"
            id="play-name"
            placeholder="Enter Play "
            value={Name}
            onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="play-type"><h3>Type of Play</h3></label>
            <input
            type="text"
            className="form-control"
            id="play-type"
            placeholder="RUN or  PASS"
            value={Type}
            onChange={this.typeChange}
            />
          </div>
          <div className="input-group mb-3">
            <label htmlFor="employeeName">Wa: </label>
            <select
              className="form-control"
              id="employeeName"
              value={ employeeName }
              onChange={this.handleEmployeeChange}>
              <option defaultValue>Choose One...</option>
              {
              employees.map((employee) => (
                (<option key={employee.id} value={employee.id}>{employee.firstName} {employee.lastName}</option>)))
              }
            </select>
          </div>
            />
          </div>
          { eventId
            ? <button className="btn btn-dark" disabled={isUploading} onClick={this.editEventAEvent}>Save Dash</button>
            : <button className="btn btn-dark" disabled={isUploading} onClick={this.saveEventAEvent}>Save Dash</button>
          }
          <Link className="btn btn-dark cancel" to={'/'}>Cancel</Link>
         </form>
         </div>













        );
            
    
    }
  

}




export { AddPlayForm };

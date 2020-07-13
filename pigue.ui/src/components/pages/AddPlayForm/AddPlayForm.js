import React from 'react';
import { Link } from 'react-router-dom';
import  {getAllPlays, addNewPlay} from '../../../helpers/data/playData';

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
          getAllPlays((playId))
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

    }

    savePlayAEvent = (e) => {
        e.preventDefault();
        const newPlay = {
          name: this.state.Name,
          type: this.state.Type,
          formationId: this.state.FormationId,
        };
        addNewPlay((newPlay))
      };

      render() {
        const 
        { Name, 
          Type, 
          FormationId } = this.state;
        return (
            <div className="PlayForm">
            <form className="play-details">
          <div className="form-group">
            <label htmlFor="play-title"><h3>Name of Play</h3></label>
            <input
            type="text"
            className="form-control"
            id="play-name"
            placeholder="Enter Play "
            value={Name}
            onChange={this.nameChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="play-type"><h3>Type of Play</h3></label>
            <input
            type="text"
            className="form-control"
            id="play-type"
            placeholder="RUN or PASS"
            value={Type}
            onChange={this.typeChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formation-id"><h3>FormationId</h3></label>
            <input
            type="text"
            className="form-control"
            id="formation-name"
            placeholder="Formation"
            value={FormationId}
            onChange={this.formationIdChange}
            />
          </div>
          <button className="btn btn-dark" onClick={this.savePlayAEvent}>Save Play</button>
          <Link className="btn btn-dark cancel" to={'/huddle'}>Cancel</Link>

         </form>
         </div>
         );
      }
}
       
  

export  { AddPlayForm };

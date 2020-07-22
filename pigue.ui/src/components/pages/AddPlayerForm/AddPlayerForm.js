import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import FileUploader from 'react-firebase-file-uploader';
import MultiSelect from "react-multi-select-component";
import PropTypes from 'prop-types';
import 'firebase/storage';
import getAllPlayers from '../../../helpers/data/playerData';
import playerData from '../../../helpers/data/playerData';

import './AddPlayerForm.scss';

class AddPlayerForm extends React.Component{
    state = {
        players:[],
        FirstName: '',
        LastName:'',
        Position:'',
        Img: '',

    }
   
componentDidMount(){
    const { playerId } = this.props.match.params;
    playerData.getAllPlayers( playerId )
    .then(players => this.setState({players:players}));
}

getPlayers = () => {
    getAllPlayers()
    .then((players) => {
      this.setState({players});
    })
    .catch((errFromPlayers) => console.error({ errFromPlayers}));
  }

//     componentDidMount() {
//         this.getPlayers();
//     }

// getPlayers = () => {
//     getAllPlayers()
//     .then((players) => {
//       this.setState({players});
//     })
//     .catch((errFromPlayers) => console.error({ errFromPlayers}));
//   }

  firstNameChange = (e) => {
    e.preventDefault();
    this.setState({ FirstName: e.target.value });
  }
  
  lastNameChange = (e) => {
    e.preventDefault();
    this.setState({ LastName: e.target.value });
  }
  
  positionChange = (e) => {
    e.preventDefault();
    this.setState({ Position: e.target.value})
  }

    
  imgChange = (e) => {
    e.preventDefault();
    this.setState({ Img: e.target.value})
  }

savePlayerEvent = (e) => {
    e.preventDefault();
    const newPlayer = {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Position: this.state.Position,
        Img: this.state.imgUrl
    };
    axios.post("https://localhost:44307/api/players", newPlayer)
    .then(() => this.props.history.push('/roster'))
}

handleUploadStart =() => this.setState({ isUploading: true, progress: 0 });

handleUploadSuccess = (filename) => {
    this.setState({
      image: filename,
      isUploading: false,
      progress: 100,
    });
    firebase.storage().ref('images').child(filename).getDownloadURL()
      .then((url) => {
        this.setState({ imgUrl: url });
      })
      .catch((err) => console.error('no image url', err));
  };

render() {
  const {
    FirstName,
    LastName,
    Position,
    Img,
    isUploading,
  } = this.state;
  const { playerId } = this.props.match.params;
  return (
      <div className="PlayerForm">
         <form className="player-details">
       <div className="form-group">
         <label htmlFor="player-FirstName"><h3>First Name</h3></label>
         <input
         type="text"
         className="form-control"
         id="FirstName"
         placeholder=""
         value={FirstName}
         onChange={this.firstNameChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="player-LastName"><h3>Last Name</h3></label>
         <input
         type="text"
         className="form-control"
         id="LastName"
         placeholder=""
         value={LastName}
         onChange={this.lastNameChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="player-position"><h3>Position</h3></label>
         <input
         type="text"
         className="form-control"
         id="Position"
         placeholder=""
         value={Position}
         onChange={this.positionChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="event-image"> Upload Player Picture</label>
         {this.state.image && (
              <img className="uploadedImg" src={this.state.imgUrl} alt="" />
            )}
         <FileUploader
         accept="image/*"
         name="image"
        //  id="imgUrl"
         storageRef={firebase.storage().ref('images/')}
         onUploadStart ={this.handleUploadStart}
         onUploadSuccess={this.handleUploadSuccess}
        className="uploadFileArea"
         />
        </div>
       { playerId
         ? <button className="btn btn-dark" disabled={isUploading} onClick={this.editEventAEvent}>Save</button>
         : <button className="btn btn-primary" disabled={isUploading} onClick={this.savePlayerEvent}>Save</button>
       }
       <Link className="btn btn-dark primar" to={'/roster'}>Cancel</Link>
      </form>
      </div>
  );
    }

};
export  { AddPlayerForm };

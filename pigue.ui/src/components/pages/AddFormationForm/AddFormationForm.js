import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import FileUploader from 'react-firebase-file-uploader';
import 'firebase/storage';
import getAllFormations from '../../../helpers/data/formationData';
import formationData from '../../../helpers/data/formationData';

import './AddFormationForm.scss';

class AddFormationForm extends React.Component{
    state = {
        Formations: [],
        Name: '',
        FormationImg: '',
}
   
componentDidMount(){
    const { formationId } = this.props.match.params;
    formationData.getAllFormations( formationId )
    .then(formations => this.setState({formations: formations}));
}

getFormations = () => {
    getAllFormations()
    .then((formations) => {
      this.setState({formations});
    })
    .catch((errFromFormations) => console.error({ errFromFormations}));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ Name: e.target.value });
  }

  imgChange = (e) => {
    e.preventDefault();
    this.setState({ FormationImg: e.target.value})
  }

saveFormationEvent = (e) => {
    e.preventDefault();
    const newFormation = {
        Name: this.state.Name,
        FormationImg: this.state.imgUrl
    };
    axios.post("https://localhost:44307/api/formations", newFormation)
    .then(() => this.props.history.push('/formations'))
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
    Name,
    isUploading,
  } = this.state;
  const { formationId } = this.props.match.params;
  return (
      <div className="FormationForm">
         <form className="formation-details">
       <div className="form-group">
         <label htmlFor="formation-Name"><h3 className="FN">Formation Name</h3></label>
         <input
         type="text"
         className="form-control"
         id="Name"
         placeholder=""
         value={Name}
         onChange={this.nameChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="formation-image"> Upload Formation Image</label>
         {this.state.image && (
              <img className="uploadedImg" src={this.state.imgUrl} alt="" />
            )}
         <FileUploader
         accept="image/*"
         name="image"
         storageRef={firebase.storage().ref('images/')}
         onUploadStart ={this.handleUploadStart}
         onUploadSuccess={this.handleUploadSuccess}
        className="uploadFileArea"
         />
        </div>
       { formationId
         ? <button className="btn btn-dark btn-lg saveplay" disabled={isUploading} onClick={this.editEventAEvent}>Save</button>
         : <button className="btn btn-dark btn-lg saveplay" disabled={isUploading} onClick={this.saveFormationEvent}>SAVE</button>
       }
       <Link className="btn btn-dark btn-lg cancel" to={'/formations'}>CANCEL</Link>
      </form>
      </div>
  );
    }

};

export  { AddFormationForm };

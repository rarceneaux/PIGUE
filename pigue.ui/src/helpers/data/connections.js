import firebase from 'firebase/app';
import 'firebase/storage';
import apiKeys from '../apiKeys.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseKeys);
    firebase.storage();
  }
};

export default firebaseApp;
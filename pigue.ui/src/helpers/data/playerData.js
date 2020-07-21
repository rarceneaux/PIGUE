import axios from 'axios';

const getAllPlayers = () =>  new Promise((resolve, reject) => {
    axios.get("https://localhost:44307/api/players")
    .then((result) => resolve(result.data))
    .catch(error => reject(error));
    });


const addNewPlayer = (newPlayer) => axios.post("https://localhost:44307/api/roster", newPlayer);


export  { getAllPlayers, addNewPlayer };
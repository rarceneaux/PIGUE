import axios from 'axios';

const getAllPlayers = () =>  new Promise((resolve, reject) => {
    axios.get("https://localhost:44307/api/players")
    .then((result) => resolve(result.data))
    .catch(error => reject(error));
    });


export { getAllPlayers };
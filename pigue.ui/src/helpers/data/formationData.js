import axios from 'axios';

const getAllFormations = () =>  new Promise((resolve, reject) => {
    axios.get("https://localhost:44307/api/formations")
    .then((result) => resolve(result.data))
    .catch(error => reject(error));
    });


export { getAllFormations };
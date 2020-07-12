import axios from 'axios';



const getAllPlays = () =>  new Promise((resolve, reject) => {
    axios.get("https://localhost:44307/api/playbook")
    .then((result) => resolve(result.data))
    .catch(error => reject(error));
    });


    


export { getAllPlays };

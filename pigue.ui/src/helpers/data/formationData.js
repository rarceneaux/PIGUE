import axios from 'axios';

const getAllFormations = () =>  new Promise((resolve, reject) => {
    axios.get("https://localhost:44307/api/formations")
        .then((result) => resolve(result.data))
        .catch(error => reject(error));
});

const getFormationById = (formationId) => axios.get("https://localhost:44307/api/formations/" + formationId);

const addNewFormation = (newFormation) => axios.post("https://localhost:44307/api/formations", newFormation);


export default { getAllFormations, getFormationById, addNewFormation };

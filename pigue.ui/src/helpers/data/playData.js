import axios from 'axios';



const getAllPlays = () =>  new Promise((resolve, reject) => {
    axios.get("https://localhost:44307/api/playbook")
    .then((result) => resolve(result.data))
    .catch(error => reject(error));
    });

const addNewPlay = (newPlay) => {
    console.log(newPlay);
    axios.post("https://localhost:44307/api/playbook", newPlay)
        //     .then(() => this.props.history.push('playbook'))
        // .catch((err) => console.error('err', err));;
}


export { getAllPlays, addNewPlay };

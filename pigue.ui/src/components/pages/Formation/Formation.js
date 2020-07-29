import React  from 'react';
import { Link } from 'react-router-dom';
import {FormationCard} from '../../shared/FormationCard/FormationCard';
import getAllFormations  from '../../../helpers/data/formationData';
import formationData  from '../../../helpers/data/formationData';

import './Formation.scss';

class Formation extends React.Component{
    state = {
        formations: [],
    }

    componentDidMount() {
        // getAllFormations()
        // .then(formations => this.setState({formations:formations}));
        const { formationId } = this.props.match.params;
        formationData.getAllFormations( formationId )
        .then(formations => this.setState({formations:formations}));
        
            }
        
            getMyFormations = () => {
              getAllFormations()
              .then((formations) => {
              this.setState({formations});
              })
              .catch((errFromPlayers) => console.error({ errFromPlayers}));
            }


    render() {
        return(<div className="Formation">
                <div className="add-formation">
                <Link className="btn btn-primary btn-lg btn-outline-dark" to={'/formations/new'}>Add Formation</Link>  
                </div>
                <div className="daFormations"></div>
                    {this.state.formations.map((formation) => <FormationCard key={formation.id} formation={formation}/>)}
                </div>
            );
        }
}

export { Formation };

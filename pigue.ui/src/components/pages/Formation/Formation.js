import React  from 'react';
import {FormationCard} from '../../shared/FormationCard/FormationCard';
import {getAllFormations}  from '../../../helpers/data/formationData';

import './Formation.scss';

class Formation extends React.Component{
    state = {
        formations: [],
    }

    componentDidMount() {
        getAllFormations()
        .then(formations => this.setState({formations:formations}));
    }
    
    render() {
        return(<div className="Formation">
                    {this.state.formations.map((formation) => <FormationCard key={formation.id} formation={formation}/>)}
                </div>
            )
        }
}

export { Formation };

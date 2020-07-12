import React from 'react';

import {formationShape} from '../../../helpers/propz/';
import './FormationCard';



class FormationCard extends React.Component {
    static propTypes = {
        formation: formationShape,
    }

    render() {
        const { formation } = this.props;
        return (
          <div className="FormationCard">
            <div className="card-body text-center">
            <h1 className="card-title">{formation.name}</h1>
            <h1 className="card-title">{formation.id}</h1>
      </div>
    </div>
        );
      }
}

export {FormationCard};
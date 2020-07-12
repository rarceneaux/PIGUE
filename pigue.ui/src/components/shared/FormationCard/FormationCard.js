import React from 'react';
import formationShape from '../../../helpers/propz/formationShape';
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
            {/* <h1 className="card-title">{formation.id}</h1> */}
            {/* <img src="" className="card-title" alt="">{formation.id}</img> */}

      </div>
    </div>
        );
      }
}

export {FormationCard};
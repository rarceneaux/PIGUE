import React from 'react';
import getAllFormations from '../../../helpers/data/formationData';
import formationData from '../../../helpers/data/formationData';

import './FormationCard.scss';

class FormationCard extends React.Component {
    state = {
        formation: [],
    }

componentDidMount() {
    // getAllFormations()
    //   .then(formations => this.setState({formations:formations}));
    const { formationId } = this.props;
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
    const { formation } = this.props;
        return (
                <div className="FormationCard">
                      <div className="card-body text-center forms">
                      <h1 className="card-title">{formation.name}</h1>
                      <img src={formation.formationImg} className="card-title former" height="300" width="450" alt=""></img>
                      </div>
                </div>
        );
      }
}

export {FormationCard};

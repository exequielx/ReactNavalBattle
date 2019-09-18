import React from 'react';
import BoardSetup from './board/BoardSetup';
import ConfigSetup from './config/ConfigSetup';

class Setup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <ConfigSetup></ConfigSetup>
          </div>
          <div className="col-sm-7 d-flex justify-content-center">
            <BoardSetup alto={10} ancho={10}></BoardSetup>
          </div>
        </div>

      </div>
    );
  }
}

export default Setup;

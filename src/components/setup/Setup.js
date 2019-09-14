import React from 'react';
import Board from '../board/Board';
/**
 * pantalla de armado de grilla
 */

class Setup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" style={{ "overflow": "auto" }}>
        <div className="justify-content-center d-flex">
          <Board alto={10} ancho={10}></Board>
        </div>
      </div>
    );
  }
}

export default Setup;

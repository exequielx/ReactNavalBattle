import React from 'react';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.createBoard()}
            </div>

        );
    }

    createBoard = () => {
        let rows = [];
        for (let i = 0; i < this.props.alto; i++) {
            let cols = [];
            for (let j = 0; j < this.props.ancho; j++) {
                cols.push(<div className="cell"> {i} - {j} </div>);
            }
            rows.push(<div className="d-flex">{cols}</div>);
        }
        return rows
    }
}

export default Board;
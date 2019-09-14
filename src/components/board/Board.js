import React from 'react';
import './Board.css';
import Cell from '../cell/Cell';

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
                cols.push(<Cell x={i} y={j}></Cell>);
            }
            rows.push(<div className="d-flex">{cols}</div>);
        }
        return rows
    }
}

export default Board;
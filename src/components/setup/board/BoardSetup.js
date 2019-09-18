import React from 'react';
import './BoardSetup.css';

class BoardSetup extends React.Component {
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
                cols.push(
                    <div className="cell">
                        <span>X={j}</span>
                        <span>Y={this.props.alto - 1 - i}</span>
                    </div>
                );
            }
            rows.push(<div className="d-flex">{cols}</div>);
        }
        return rows
    }
}

export default BoardSetup;
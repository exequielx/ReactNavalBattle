import React from 'react';
import './Cell.css';

class Cell extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cell"> {this.props.x} - {this.props.y} </div>
        );
    }
}

export default Cell;
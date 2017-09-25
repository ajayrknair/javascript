/**
 * Created by ajaynair on 1/24/17.
 */

import React from 'react';
import {render} from 'react-dom';

import {square as Square}  from './square.js' ;

export default class Board extends React.Component {
    renderSquare(i,j) {
        return <Square className={this.props.squareClassName} value={this.props.squares[i][j]} onClick={() => this.props.onClick(i, j)}/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0,0)}
                    {this.renderSquare(0,1)}
                    {this.renderSquare(0,2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1,0)}
                    {this.renderSquare(1,1)}
                    {this.renderSquare(1,2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2,0)}
                    {this.renderSquare(2,1)}
                    {this.renderSquare(2,2)}
                </div>
            </div>
        );
    }
}

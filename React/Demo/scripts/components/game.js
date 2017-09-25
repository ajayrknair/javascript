/**
 * Created by ajaynair on 1/24/17.
 */


import React from 'react';
import {render} from 'react-dom';
import Board from './board.js';
import Player from './player.js';

export default class Game extends React.Component {

    constructor() {
        super();

        this.state = {
            history: [{
                squares: Array(3).fill(Array(3).fill(null)),
                position: {i:null , j:null}
            }],
            xIsNext: true,
            stepNumber: 0
        }
    }

    handleClick(i,j) {

        const history = this.state.history;
        const current = history[history.length - 1];
        var squares = JSON.parse(JSON.stringify(current.squares));
        if (calculateWinner(squares) || squares[i][j]) {
            return;
        }
        squares[i][j] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                position: {x:i , y:j},
                squares: squares
            }]),
            stepNumber: this.state.history.length,
            xIsNext: !this.state.xIsNext
        });


    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true,
        });
    }

    render() {
        var player1 = {
            playerName: 'Ajay Nair',
            playerId: '1',
            playerSelect: 'X'
        }

        var player2 = {
            playerName: 'Vijay Nair',
            playerId: '2',
            playerSelect: 'O'
        }
        const history= this.state.history;
        const current= history[this.state.stepNumber];
        const winner= calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move? 'Move #' + move + ' played in square (' + step.position.x + ', ' + step.position.y + ')' : 'Game Start';
            return (
                <li key={move}>
                    <a  href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            )
        })

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next Move: ' + (this.state.xIsNext ? player1.playerName : player2.playerName);
        }



        return (
            <div className="row">
                <div className="col-xs-3">
                    <Player playerName="Ajay Nair" playerId="1" playerSelect="X"/>
                </div>
                <div className="col-xs-6 game">
                    <div className="game-board">
                            <div className="col-xs-9 col-xs-offset-3">
                                <Board squares={current.squares} onClick={(i,j) => this.handleClick(i,j)}/>
                            </div>
                    </div>
                    <div className="game-info">
                        <div className="col-xs-9 col-xs-offset-3">
                            <div>{status}</div>
                            <ol>{moves}</ol>
                        </div>
                    </div>
                </div>
                <div className="col-xs-3">
                    <Player playerName="Vijay Nair" playerId="2" playerSelect="Y"/>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [[a,b], [c,d], [e,f]] = lines[i];
        if (squares[a][b] && squares[a][b] === squares[c][d] && squares[a][b] === squares[e][f]) {
            return squares[a][b];
        }
    }
    return null;
}

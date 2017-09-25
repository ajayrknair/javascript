import ReactDOM from 'react-dom';
import React from 'react';
import {render} from 'react-dom';

/*class Player extends React.Component {
    render() {
        return (
            <button className="player" onClick={() => this.props.onClick()}>
                {this.props.playerName}
            </button>
        );
    }
}*/

class Board extends React.Component {
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

class Game extends React.Component {

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
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }



        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i,j) => this.handleClick(i,j)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('container')
);
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

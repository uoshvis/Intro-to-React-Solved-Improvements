import React from 'react';
import Square from './Square';


class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
        let boardSquares = []
        for (var row = 0; row < 3; row++){
            let boardRow = []
            for(var col = 0; col < 3; col++){
                boardRow.push(
                    <span key={row*3 + col}>
                        {this.renderSquare(row*3 + col)}
                    </span>
                )
            }
            boardSquares.push(<div className='board-row' key={row}>{boardRow}</div>)
        }

      return (
        <div>
            {boardSquares}
        </div>
      );
    }
  }

  export default Board
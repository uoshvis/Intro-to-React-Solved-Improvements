export default function Square(props) {
    const winnerStyle = {
        backgroundColor: 'red'
      }
      return (
      <button
      className="square" onClick={props.onClick}
      style={props.winningSquares ? winnerStyle : null}>
        {props.value}
      </button>
    );
  }
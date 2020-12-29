import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class Square extends React.Component {
  render() {
    return (
      <button className = "square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className = "game">
        <div className = "game-board">
          <Board />
        </div>
      </div>
    )
  }
}

ReactDOM.render (
  <Game />,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

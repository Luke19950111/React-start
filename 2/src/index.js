import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let number = 0;

let onClickAddButton = () => {
  number += 1;
  render();
};
let onClickMinusButton = () => {
  number -= 1;
  render();
};
render();

function render() {
  // let span = React.createElement('span', {className: 'red'}, number)
  // let addButton = React.createElement('button', {onClick: onClickAddButton}, '+')
  // let minusButton = React.createElement('button', {onClick: onClickMinusButton}, '-')
  // let div = React.createElement('div', {}, span, addButton, minusButton)

  ReactDOM.render(
    <div>
      <span className="red">{number}</span>
      <button onClick={onClickAddButton}>+</button>
      <button onClick={onClickMinusButton}>-</button>
    </div>,

    document.getElementById("root")
  );
}

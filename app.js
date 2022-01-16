// Buttons
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

function doMath() {
  let firstOperand;
  let secondOperand;
  let currentOperand;
  let operator;

  function operate(operand1, operand2, operator) {
    if (operator === "add") {
      return Number(operand1) + Number(operand2);
    }
    if (operator === "subtract") {
      return Number(operand1) - Number(operand2);
    }
    if (operator === "multiply") {
      return Number(operand1) * Number(operand2);
    }
    if (operator === "divide") {
      return Number(operand1) / Number(operand2);
    }
  }

  //Button Event Listeners
  zero.addEventListener("click", () => {
    currentOperand + "0";
  });
  one.addEventListener("click", () => {
    currentOperand += "1";
  });
  two.addEventListener("click", () => {
    currentOperand += "2";
  });
  three.addEventListener("click", () => {
    currentOperand += "3";
  });
  four.addEventListener("click", () => {
    currentOperand += "4";
  });
  five.addEventListener("click", () => {
    currentOperand += "5";
  });
  six.addEventListener("click", () => {
    currentOperand += "6";
  });
  seven.addEventListener("click", () => {
    currentOperand += "7";
  });
  eight.addEventListener("click", () => {
    currentOperand += "8";
  });
  nine.addEventListener("click", () => {
    currentOperand += "9";
  });
}
doMath();

function doMath() {
  // const storedValueDisplay = document.getElementById("storedValue");
  const display = document.getElementById("currentValue");

  // Numerical Buttons
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
  const decimal = document.getElementById("decimal");

  //Operation Buttons
  const add = document.getElementById("add");
  const subtract = document.getElementById("subtract");
  const multiply = document.getElementById("multiply");
  const divide = document.getElementById("divide");
  const equals = document.getElementById("equals");

  //Other Buttons
  const clear = document.getElementById("clear");
  const deleteLast = document.getElementById("delete");

  let operands = {
    first: "",
    second: "",
  };

  let currentOperand = "first";
  let operator = null;

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
      if (operands["second"] === "0") {
        return (display.innerHTML =
          "DIVIDE BY ZERO ERROR. SELF DESTRUCT SEQUENCE INITIATED");
      } else {
        return Number(operand1) / Number(operand2);
      }
    }
  }

  //Looks weird but toggles the operand that's being modified
  function toggleOperand() {
    if (currentOperand === "first") {
      return (currentOperand = "second");
    }
    if (currentOperand === "second") {
      return (currentOperand = "first");
    }
  }

  function updateDisplay() {
    display.innerHTML = operands[currentOperand];
  }

  //Button Event Listeners
  zero.addEventListener("click", () => {
    operands[currentOperand] += "0";
    updateDisplay();
  });
  one.addEventListener("click", () => {
    operands[currentOperand] += "1";
    updateDisplay();
  });
  two.addEventListener("click", () => {
    operands[currentOperand] += "2";
    updateDisplay();
  });
  three.addEventListener("click", () => {
    operands[currentOperand] += "3";
    updateDisplay();
  });
  four.addEventListener("click", () => {
    operands[currentOperand] += "4";
    updateDisplay();
  });
  five.addEventListener("click", () => {
    operands[currentOperand] += "5";
    updateDisplay();
  });
  six.addEventListener("click", () => {
    operands[currentOperand] += "6";
    updateDisplay();
  });
  seven.addEventListener("click", () => {
    operands[currentOperand] += "7";
    updateDisplay();
  });
  eight.addEventListener("click", () => {
    operands[currentOperand] += "8";
    updateDisplay();
  });
  nine.addEventListener("click", () => {
    operands[currentOperand] += "9";
    updateDisplay();
  });
  decimal.addEventListener("click", () => {
    if (operands[currentOperand].includes(".") === false) {
      operands[currentOperand] += ".";
      updateDisplay();
    }
  });

  //Operator event listeners
  add.addEventListener("click", () => {
    operator = "add";
    currentOperand = "second";
    display.innerHTML = "+";
  });

  subtract.addEventListener("click", () => {
    operator = "subtract";
    currentOperand = "second";
    display.innerHTML = "-";
  });

  multiply.addEventListener("click", () => {
    operator = "multiply";
    currentOperand = "second";
    display.innerHTML = "x";
  });

  divide.addEventListener("click", () => {
    operator = "divide";
    currentOperand = "second";
    display.innerHTML = "/";
  });

  equals.addEventListener("click", () => {
    if (operands["second"] === "") {
      if (operands["first"] === "") {
        display.innerHTML = "";
      } else {
        display.innerHTML = operands["first"];
      }
    } else {
      operands["first"] = operate(
        operands["first"],
        operands["second"],
        operator
      ).toString(); //Needs to be a string in order to use delete button on it.
      operands["second"] = "";
      operator = null;

      currentOperand = "first";
      updateDisplay();
    }
  });

  deleteLast.addEventListener("click", () => {
    operands[currentOperand] = operands[currentOperand].slice(0, -1);
    updateDisplay();
  });

  clear.addEventListener("click", () => {
    doMath();
  });

  updateDisplay(); //Calls function to clear display every time main function is run.
}
doMath();

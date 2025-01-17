class Calculator {
  constructor(operand1Element, operand2Element) {
    this.operand1Element = operand1Element;
    this.operand2Element = operand2Element;
    this.clear();
  }
  clear() {
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = "";
    this.updateUI();
    //console.log("Hola");
  }

  updateUI() {
    this.operand1Element.innerHTML = this.operand1 + this.operator;
    this.operand2Element.innerHTML = this.operand2;
  }

  appendNummber(number) {
    if (number === "." && this.operand2.includes(".")) return;
    this.operand2 =
      this.operand2 === 0 ? number : this.operand2.toString() + number;
    this.updateUI();
  }

  delete() {
    if (this.operand2 === 0) return;
    this.operand2 = +this.operand2.toString().slice(0, -1);
    this.updateUI();
  }

  operation(operator) {
    if (this.operator) {
      this.calc();
    }
    this.operator = operator;
    this.operand1 = +this.operand2 === 0 ? this.operand1 : this.operand2;
    this.operand2 = 0;
    this.updateUI();
    console.log(operator);
  }
  calc() {
    switch (this.operator) {
      case "+":
        this.operand1 = +this.operand1 + +this.operand2;
        break;
      case "-":
        this.operand1 = +this.operand1 - +this.operand2;
        break;
      case "*":
        this.operand1 = +this.operand1 * +this.operand2;
        break;
      case "/":
        this.operand1 = +this.operand1 / +this.operand2;
        break;
    }
    this.operator = "";
    this.operand2 = 0;
    this.updateUI();
  }
}

const operand1Element = document.querySelector("[data-aperand-1]");
const operand2Element = document.querySelector("[data-aperand-2]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");
const deleteButton = document.querySelector("[data-delete]");
const oparationsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");

const calculator = new Calculator(operand1Element, operand2Element);

clearButton.addEventListener("click", () => {
  calculator.clear();
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNummber(button.innerHTML);
  });
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
});

oparationsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.operation(button.innerHTML);
  });
});

equalsButton.addEventListener("click", () => {
  calculator.calc();
});

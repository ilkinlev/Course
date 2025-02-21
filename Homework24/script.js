let firstNumber = Number(prompt("Enter first number: "));
let secondNumber = Number(prompt("Enter second number: "));
let operation = prompt("Choose operation: ( +,  -,  *,  / ) ");

do {
  if (operation === "+") {
    alert(`Operation result: ${firstNumber + secondNumber}`);
    break;
  } else if (operation === "-") {
    alert(`Operation result: ${firstNumber - secondNumber}`);
    break;
  } else if (operation === "*") {
    alert(`Operation result: ${firstNumber * secondNumber}`);
    break;
  } else if (operation === "/") {
    alert(`Operation result: ${firstNumber / secondNumber}`);
    break;
  } else if (operation === null && operation === NaN) {
    alert("Try again");
  } else {
    alert("Invalid operation");
  }
} while (operation !== null);

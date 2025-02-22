let num1, num2, operation, result;

let isOpen = false;

do {
  num1 = Number(prompt("Enter first number:"));
  num2 = Number(prompt("Enter second number:"));
  operation = prompt("Enter an operation (+, -, *, /):");
  isOpen = true;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num1 === 0 || num2 === 0) {
        alert("Error: Division by zero is not allowed!");
        continue;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation! Enter valid operator");
      continue;
  }

  alert(`Result: ${result}`);
} while (isOpen);

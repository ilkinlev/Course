do {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));
  let operation = prompt("Enter an operation (+, -, *, /):");

  let result;

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
      if (num2 === 0) {
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

  var tryAgain = prompt(
    "Do you want to calculate again? (yes/no):"
  ).toLowerCase();
} while (tryAgain === "yes");

alert("Closing app...");

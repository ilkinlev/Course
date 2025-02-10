const choice = prompt(
  "Choose your service: (1.Tea  2.Water  3.Coffee  4.Juice  5.Exit )"
);

switch (Number(choice)) {
  case 1:
    alert("You choose Tea");
    break;
  case 2:
    alert("You choose Water");
    break;
  case 3:
    alert("You choose Coffee");
    break;
  case 4:
    alert("You choose Juice");
    break;
  case 5:
    alert("Closing menu...");
    break;
  default:
    alert("Wrong Input");
    break;
}

let bill = 530;
let tip = bill >= 100 && bill <= 400 ? bill * 0.07 : bill * 0.1;
let total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total amount was ${total}.`
);

// Mission 2

// const choice = prompt(
//   "Choose your service: (1.Tea  2.Coffee  3.Juice  4.Water  5.Exit )"
// );

// switch (Number(choice)) {
//   case 1:
//     alert("You choose Tea");
//     break;
//   case 2:
//     alert("You choose Coffee");
//     break;
//   case 3:
//     alert("You choose Juice");
//     break;
//   case 4:
//     alert("You choose Water");
//     break;
//   case 5:
//     alert("Closing menu...");
//     break;
//   default:
//     alert("There is no such drink.");
//     break;
// }

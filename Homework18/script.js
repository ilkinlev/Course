let firstPersonMass = 78;
let firstPersonHeight = 1.69;

let secondPersonMass = 92;
let secondPersonHeight = 1.95;

let firstPerson = firstPersonMass / firstPersonHeight ** 2;
let secondPerson = secondPersonMass / secondPersonHeight ** 2;

let firstPersonHigherBMI = firstPerson > secondPerson;
console.log(
  "Is First person higher BMI than second person? :",
  firstPersonHigherBMI
);

if (firstPerson > secondPerson) {
  console.log(
    "The First person",
    `${Math.floor(firstPerson)}`,
    "higher BMI than second person",
    `${Math.floor(secondPerson)}`
  );
} else if (firstPerson < secondPerson) {
  console.log(
    "The First person",
    `${Math.floor(firstPerson)}`,
    "lower BMI than second person",
    `${Math.floor(secondPerson)}`
  );
} else if (firstPerson === secondPerson) {
  console.log(
    "The First person",
    `${Math.floor(firstPerson)}`,
    "has the same BMI as the second person",
    `${Math.floor(secondPerson)}`
  );
} else {
  console.log("There is no data");
}

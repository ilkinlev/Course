console.log("Task 1: Find the sum of even numbers from 1 to 10, continuing.");

let sum = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

console.log("Task 2: Finding numbers with break.");

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    break;
  }
  console.log(i);
}

console.log("Task 3: Continue and break together.");

for (let i = 1; i <= 20; i++) {
  if (i % 3 !== 0) {
    continue;
  } else if (i > 15) {
    break;
  } else {
    console.log(i);
  }
}

console.log(
  "Task 4: Find the first odd number greater than 3 and stop the loop immediately."
);
for (let i = 1; i <= 10; i++) {
  if (i > 3 && i % 2 !== 0) {
    console.log("The first odd number greater than 3 is:", i);
    break;
  }
}

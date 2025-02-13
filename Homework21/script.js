const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(days);

// 1.Get arrays length
console.log(days.length);

// 2.Check if Tuesday is in array
console.log(days.includes("Tuesday") ? "Yes" : "No");

// 3.Replace the 4th day in the array with the number 4.
// days[3] = 4;

days[0] === "Monday" && console.log("Bugün birinci gündür");
days[1] === "Tuesday" && console.log("Bugün ikinci gündür");
days[2] === "Wednesday" && console.log("Bugün üçüncü gündür");
days[3] === "Thursday" && console.log("Bugün dördüncü gündür");
days[4] === "Friday" && console.log("Bugün beşinci gündür");
days[5] === "Saturday" && console.log("Bugün altıncı gündür");
days[6] === "Sunday" && console.log("Bugün bazar günüdür");

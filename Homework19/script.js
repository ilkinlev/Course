// Test data
let teamA = 75,
  A2 = 80;
A3 = 11;
let teamB = 70,
  B2 = 90,
  B3 = 15;

let avarageScoreA = (teamA + A2 + A3) / 3;
let avarageScoreB = (teamB + B2 + B3) / 3;

if (avarageScoreA < 90 && avarageScoreB < 90) {
  console.log(
    `All scores under 90 no one wins TeamA: ${avarageScoreA} TeamB: ${avarageScoreB}`
  );
} else if (avarageScoreA > avarageScoreB) {
  console.log(
    `TeamA wins with score: ${avarageScoreA} vs with TeamB score: ${avarageScoreB}`
  );
} else if (avarageScoreA < avarageScoreB) {
  console.log(
    `TeamB wins with score: ${avarageScoreB} vs with TeamA score: ${avarageScoreA}`
  );
} else if (
  (avarageScoreA === 90 && avarageScoreB === 90) ||
  avarageScoreA === avarageScoreB
) {
  console.log(`It's a tie with ${avarageScoreA} vs ${avarageScoreB}`);
} else {
  console.log("Wrong Input");
}

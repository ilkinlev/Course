const myInfo = {
  firstName: "Ilkin",
  lastName: "Hajiyev",
  age: 22,
  job: "Phone repair",
  hobbies: ["Programming", "Gaming", "Research"],
};

const explorerInfo = prompt(
  "What do you want about me. Choose options: (firstName, lastName, age, job, hobbies)  "
);

if (myInfo[explorerInfo]) {
  console.log("About me: ", myInfo[explorerInfo]);
} else {
  console.log("Wrong input");
}

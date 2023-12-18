const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your age: ', (age) => {
  // Convert age to a number
  age = parseInt(age);

  if (age >= 18) {
    console.log("Your eligible for the vote");
  } else if(age<=18){
    console.log("Sorry, you are not eligible to vote.");
  }

  rl.close();
});

function rollDie() {
  return Math.ceil(Math.random() * 6);
}

// write a while loop that rolls the die until a 6 is rolled!
// use console.log to print the roll in every iteration
let roll = 0;
while (roll !== 6) {
  roll = rollDie();
  console.log(roll);
}


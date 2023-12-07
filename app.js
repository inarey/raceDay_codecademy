// Race runner assigned a random number
let raceNumber = Math.floor(Math.random() * 1000);

// Check if the runners registered early or not.
const registeredEarly = true;
//Check if the runner is adult or youth
const runnerAge = 17;
//Control flow to check whether the runner is an adult and registered early
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

//Control flow to check age and registration time to determine race time
if (registeredEarly && runnerAge > 18) {
  console.log(
    `Your runtime is at 9:30 am and your race number is: ${raceNumber}`
  );
} else if (!registeredEarly && runnerAge > 18) {
  console.log(
    `Your runtime is at 11 am and your race number is: ${raceNumber}`
  );
} else if (runnerAge < 18) {
  console.log(
    `Your runtime is at 12:30pm and your race number is ${raceNumber}`
  );
} else {
  runnerAge === 18;
  console.log(`Please see the registered desk.`);
}

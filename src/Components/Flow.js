let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
if(registeredEarly && runnerAge >18){
  raceNumber += 1000;
}
if(registeredEarly && runnerAge >18){
  console.log(`Race will start at 9:30am,your race number is:${raceNumber}`);
}
else if(!registeredEarly && runnerAge >18){
  console.log(`Race will start at 11:00am,your race number is:${raceNumber}`);
}
else if(runnerAge<18){
console.log(`Race will start at 12:30pm,your race number is:${raceNumber}`);
}
else{
  console.log("Runner less than 18years should go to registration desk to seek assistance!")
}
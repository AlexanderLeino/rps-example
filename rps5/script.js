// We need to create variables rock, paper and scissors
//We need to be able to input a value
// Once a value is inputted then we want to run a function to get the CPUs Option (random Generator)
//Then we need to create conditionals to value who won and lost
//Once determined console.log either you "Congrats you Won this round" or "You lost this round"



//defining the values that the cpu will be able to reference
var userInput = false
var cpuRock ='rock'
var cpuPaper ='paper'
var cpuScissors = 'scissors'
var cpuNumber = Math.floor((Math.random() * 3) + 1);
console.log(cpuNumber)

function getCpuChoice (){
if (cpuNumber === 1) {
    return cpuRock;
}
else if (cpuNumber === 2){
    return cpuPaper;
}
else {
    return cpuScissors;
}
}

console.log(getCpuChoice());
//this prints the computers choice accturaly

function getUserChoice () {
    var userChoice = document.getElementById("userInput").value;
   alert(userChoice) //-> This confirmed that our user's input was store successfully to the variable userChoice by displaying input within browser window
   return userChoice;
}

console.log(getUserChoice());

if (getUserChoice() === 'paper' && getCpuChoice() === cpuPaper) {
    console.log("its a tie");
}
else if (getUserChoice() === 'paper' && getCpuChoice() === cpuRock) {
    console.log("you won this round")
}
else if (getUserChoice() === 'paper' && getCpuChoice() === cpuScissors)
{
    console.log("you lost this round")
}
else if (getUserChoice() === 'rock' && getCpuChoice() === cpuRock)
{
    console.log('Its a Tie!')
}
else if (getUserChoice() === 'rock' && getCpuChoice() === cpuPaper){
    
    console.log('You lost this round')
}
else if (getUserChoice() === 'rock' && getCpuChoice() === cpuScissors)
{
    console.log('You won this round')
}
else if (getUserChoice() === 'scissors' && getCpuChoice() === cpuScissors) {
    
    console.log('Its a Tie!')
}
else if (getUserChoice() === 'scissors' && getCpuChoice() === cpuRock){

    console.log('You lost this round')
}
else if (getUserChoice() === 'scissors' && getCpuChoice() === cpuPaper) {

    console.log('You won this round')
}
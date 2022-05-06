console.log('hello world');
function computerPlay(){
    let gameChoices = ['Rock','Paper','Scissors'];
    let randomChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    console.log(randomChoice)
    return randomChoice;
}
computerPlay()
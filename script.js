console.log('hello world');
function computerPlay(){
    let gameChoices = ['Rock','Paper','Scissors'];
    let randomChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    console.log(randomChoice)
    return randomChoice;
}
//computerPlay()
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase()
    if((playerSelection=='Rock' && computerSelection=='Scissors')||(playerSelection=='Scissors' && computerSelection=='Paper')||(playerSelection=='Paper' && computerSelection=='Rock')){
        let winner = 'You win! '+playerSelection+' beats '+computerSelection;
        return winner;
    } else if(playerSelection == computerSelection){
        let winner = 'It\'s a Draw!'
        return winner;
    } else {
        let winner = 'You lose! ' + computerSelection + ' beats '+playerSelection;
        return winner
    }
}
let playerSelection = 'Rock';
let computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));
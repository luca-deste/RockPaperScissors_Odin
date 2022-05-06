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
        let winner = 'player';
        console.log(winner)
        return winner;
    } else if(playerSelection == computerSelection){
        let winner = 'draw!';
        console.log(winner);
        return winner;
    } else {
        let winner = 'pc';
        console.log(winner);
        return winner;
    }
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0;i<5;i++){
        let playerSelection = prompt('Please, select an option between Rock, Paper and Scissors to play. ');
        let computerSelection = computerPlay();
        result = playRound(playerSelection,computerSelection)
        if(result=='player'){
            playerScore++;
        } else if (result=='pc'){
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
        console.log('Player Score: ' +playerScore )
        console.log('Pc Score: ' + computerScore)
    }
    let FinaleScore = computerScore>playerScore ? 'You Lose' : computerScore<playerScore ? 'You Won' : 'It\'s a Draw!'
    console.log(FinaleScore)
}
game()
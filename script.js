const butt = document.querySelectorAll('button');
const result = document.getElementById('result');
const pcScore = document.getElementById('pcScore');
const playerScore = document.getElementById('playerScore');
const restart = document.getElementById('restart');
restart.style.visibility = 'hidden';
let pcScoreVal =0;
let playerScoreVal =0;

butt.forEach(element => {
    if(!element.id){
        element.addEventListener('click', function(){
            computerCh = computerPlay();
            playRound(element.className,computerCh);
        });
    }
});

restart.addEventListener('click',function(){

})

function computerPlay(){
    let gameChoices = ['Rock','Paper','Scissors'];
    let randomChoice = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    console.log(randomChoice);
    return randomChoice;
}
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase()
    if((playerSelection=='Rock' && computerSelection=='Scissors')||(playerSelection=='Scissors' && computerSelection=='Paper')||(playerSelection=='Paper' && computerSelection=='Rock')){
        let winner = 'Player';
        //console.log(winner);
        updateWinner(winner);
        return winner;
    } else if(playerSelection == computerSelection){
        let winner = 'Draw';
        //console.log(winner);
        updateWinner(winner);
        return winner;
    } else {
        let winner = 'Pc';
        updateWinner(winner);
        //console.log(winner);
        return winner;
    }
}

function updateWinner(winner){
    if(winner != 'Draw'){
        result.innerText = `The winner is: ${winner}!`;
    } else {
        result.innerText = `It's a Draw!`;
    } 
    updateScore(winner);
    
}
function updateScore(winner){
    if(winner == 'Player'){
        playerScoreVal += 1;
        playerScore.innerText = `Player Score: ${playerScoreVal}`;
    } else if(winner =='Pc'){
        pcScoreVal += 1;
        pcScore.innerText = `Pc Score: ${pcScoreVal}`;
    }
    if(pcScoreVal == 5){
        result.innerText = `${winner} won the game! Thank you for playing.`;
    } else if(playerScoreVal ==5){
        result.innerText = `${winner} won the game! Thank you for playing.`;
    }
}

/*function game(){
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
game()*/
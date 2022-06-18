
function computerchoice() {
    let options = ['rock', 'paper', 'scissors'];
    let computerchoice = options[Math.floor(Math.random() * options.length)];
    console.log(`computer's choice "${computerchoice}"`);
    return computerchoice;
}

function playerchoice(){
    let playerchoice = prompt('rock/paper/scissors');
    console.log(`player's choice "${playerchoice}"`);
    return playerchoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        console.log('Tie');
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("You Lost!");
        return false;
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("You win!");
        return true;
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') {
        console.log('Tie');
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("You Won!");
        return true;
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("You Lost!");
        return false;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        console.log('Tie');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("You Lost!");
        return false;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("You win!");
        return true;
    }
    else{
        console.log("Illegal Choice");
        return -1;
    }
}


function game(){
    let playerwincount = 0;
    let compwincount = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerchoice();
        const computerSelection = computerchoice();
        if(playRound(playerSelection, computerSelection) === -1){
            break;
        }
        else if (playRound(playerSelection, computerSelection)=== true) {
            playerwincount++;
        }
        else if (playRound(playerSelection, computerSelection)=== false){
            compwincount++;
        }
    }
    // document.querySelector('#your_score').textContent = playerwincount;
    // document.querySelector('#comp_score').textContent = compwincount;

    if(playerwincount>compwincount){
        console.log(`You Won the match! with ${playerwincount}-${compwincount} `);
    }else{
        console.log(`You Lost the match! with ${playerwincount}-${compwincount}`);
    }
}
game();

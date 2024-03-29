
const buttons = document.querySelectorAll('input')
const playagainbtn = document.querySelector('button')
playagainbtn.disabled = true;
document.getElementById("playagn").style.visibility = "hidden"


function computerchoice() {
    let options = ['rock', 'paper', 'scissors'];
    let computerchoice = options[Math.floor(Math.random() * options.length)];
    console.log(`computer's choice "${computerchoice}"`);
    return computerchoice;

}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
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
        console.log("invalid Choice");
        return -1;
    }
}



let playerwincount = 0;
let compwincount = 0;


function game(urchoice){
    let result = ""
    let computerSelection = computerchoice();
    if(playRound(urchoice,computerSelection) === true){
        playerwincount++;
        document.querySelector('#your_score').textContent =playerwincount;
        document.querySelector('#round_result').textContent = "You WON!";
    }
    else if(playRound(urchoice,computerSelection) === false){
        compwincount++;
        document.querySelector('#comp_score').textContent=compwincount;
        document.querySelector('#round_result').textContent = "You Lost!";
    }
    else{
        document.querySelector('#round_result').textContent = "It's a TIE!";
    }
    console.log(playerwincount, compwincount);
    
    if (playerwincount == 5){
        result+= 'You won the game!! click the button to play again'
        disableButtons()
        document.querySelector('#result').textContent = result;
        playagainbtn.disabled = false;
        document.getElementById("playagn").style.visibility = "visible";
    }
    else if (compwincount == 5){
        result += 'You lost the game!! click the button to play again'
        disableButtons()
        document.querySelector('#result').textContent = result;
        playagainbtn.disabled = false;
        document.getElementById("playagn").style.visibility = "visible";
    }
    document.querySelector('#compchoice').textContent =computerSelection;
}


function playagain(){
    window.location.reload();
}


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        let playerchoice = button.value;
        console.log(`player's choice${button.value}`);
        document.querySelector('#yourchoice').textContent =playerchoice;
        game(playerchoice);
    })
})
//original game, played in the console

function firstToFive() {

    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {        

            function playRound() {

                let userInput = prompt('Enter Choice').charAt(0).toUpperCase();
                let computerSelection = getComputerChoice();

                function getComputerChoice() {
                    let rdmNum = Math.random()
                    if (rdmNum < 1/3) {
                        return 'R'
                    } else if (rdmNum < 2/3) {
                        return 'P'
                    } else {
                        return 'S'
                    }
                }

                if (userInput === 'R') {
                    if (computerSelection === 'S') {
                        console.log('You Win!');
                        playerScore++;
                    } else if (computerSelection === 'P') {
                        console.log('You lose!');
                        computerScore++;
                    } else console.log('draw');

                } else if (userInput === 'P') {
                    if (computerSelection === 'R') {
                        console.log('You Win!');
                        playerScore++;
                    } else if (computerSelection === 'S') {
                        console.log('You lose!');
                        computerScore++;
                    } else console.log('draw');

                } else if (userInput === 'S') {
                    if (computerSelection === 'P') {
                        console.log('You Win!');
                        playerScore++;
                    } else if (computerSelection === 'R') {
                        console.log('You lose!');
                        computerScore++;
                    } else console.log('draw');

                } else console.log('Wrong input: Enter "Rock, Paper or Scissors"')

                console.log(`Current Score: Player: ${playerScore} - ${computerScore} : Computer`)
            }
            playRound();
        
    }
}

firstToFive();
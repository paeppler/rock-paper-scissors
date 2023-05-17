const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const counter = document.getElementById('counter')
const cntPlayer = document.getElementById('cntPlayer')
const cntComp = document.getElementById('cntComp')
const winLose = document.getElementById('winLose')
const button = document.createElement('button')
const playAgain = document.getElementById('playAgain')

    
let playerScore = 0;
let computerScore = 0;

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


    
        btn1.addEventListener('click', function (e) {
            playRoundRock();
        })
        btn2.addEventListener('click', function (e) {
            playRoundPaper();
        })
        btn3.addEventListener('click', function (e) {
            playRoundScissors();
        })
        

            
        function playRoundRock() {
            let computerSelection = getComputerChoice();
            if (computerSelection === 'S') {
                pointPlayer();
                playerScore++;
                cntPlayer.textContent = playerScore;
            } else if (computerSelection === 'P') {
                pointComputer();
                computerScore++;
                cntComp.textContent = computerScore;
            } else draw();
            if (playerScore === 5) {gameOverWin();}
            if (computerScore === 5) { gameOverLose();}
        }

        function playRoundPaper() {
            let computerSelection = getComputerChoice();
            if (computerSelection === 'R') {
                pointPlayer();
                playerScore++;
                cntPlayer.textContent = playerScore;
            } else if (computerSelection === 'S') {
                pointComputer();
                computerScore++;
                cntComp.textContent = computerScore;
            } else draw();
            if (playerScore === 5) {gameOverWin();}
            if (computerScore === 5) {gameOverLose();}
        }

        function playRoundScissors(){
            let computerSelection = getComputerChoice();
            if (computerSelection === 'P') {                
                pointPlayer();
                playerScore++;
                cntPlayer.textContent = playerScore;
            } else if (computerSelection === 'R') {                
                pointComputer();
                computerScore++;
                cntComp.textContent = computerScore;
            } else draw();
            if (playerScore === 5) {gameOverWin()}
            if (computerScore === 5) {gameOverLose()}

        }

        function gameOverWin(){
            winLose.textContent = 'Game Over: You Win!'; console.log('Game Over: You Win!'); playerScore = 0; computerScore = 0;
            button.textContent = 'Play again';
            button.setAttribute('id','playButton')
            playAgain.appendChild(button);
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
        }

        function gameOverLose(){
            winLose.textContent = 'Game Over: Computer Wins!'; console.log('Game Over: Computer Wins'); playerScore = 0; computerScore = 0;
            button.textContent = 'Play again';
            button.setAttribute('id','playButton')
            playAgain.appendChild(button);
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
        }

        function pointPlayer(){
            winLose.textContent = 'Won Round!'
        }

        function pointComputer(){
            winLose.textContent = 'Lost Round!'
        }

        function draw(){
            winLose.textContent = 'draw!'
        }

        playAgain.addEventListener('click', function (e) {
            playAgain.removeChild(button);
            cntComp.textContent = 0;
            cntPlayer.textContent = 0;
            btn1.disabled = false;
            btn2.disabled = false;
            btn3.disabled = false;           
        })
    

    
    











const score = JSON.parse(localStorage.getItem('score')) || {

    wins : 0,
    loses : 0,
    ties : 0

}

// if(score === null){
//     score.wins = 0,
//     score.loses = 0,
//     score.ties = 0
// }


function randomMove(){
        const ranmdomNumber = Math.random();

        let computerMove = '';

        if(ranmdomNumber >= 0 && ranmdomNumber < 1/3){
            computerMove = 'rock';
            
        }else if(ranmdomNumber >= 1/3 && ranmdomNumber < 2/3){
            computerMove = 'paper';
            
        }else if(ranmdomNumber > 2/3 && ranmdomNumber < 1){
            computerMove = 'scissors';
            
        }

        return computerMove;

        // console.log(computerMove);
    }


    function playGame(playerMove){

        const computerMove = randomMove();

        let result = '';

        if(playerMove === 'rock'){
            if(computerMove === 'rock'){
                result = 'Tie';
            } else if (computerMove === 'paper'){
                result = 'You lose';
            } else if (computerMove === 'scissors'){
                result = 'You win';
            }

        } else if(playerMove === 'paper'){
            if(computerMove === 'rock'){
                result = 'You win';
            } else if (computerMove === 'paper'){
                result = 'Tie';
            } else if (computerMove === 'scissors'){
                result = 'You lose';
            }

        } else if(playerMove === 'scissors'){
            if(computerMove === 'rock'){
                result = 'You lose';
            } else if (computerMove === 'paper'){
                result = 'You win';
            } else if (computerMove === 'scissors'){
                result = 'Tie';
            }

        }

            if(result === 'You win'){
                score.wins++;
            } else if(result === 'You lose'){
                score.loses++;
            } else if(result === 'Tie'){
                score.ties++
            }

         alert(`You picked ${playerMove} - Computer picked ${computerMove} 

Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}

${result}`);

localStorage.setItem('score', JSON.stringify(score));

}



document.querySelector('.js-rock-button')
    .addEventListener('click',()=>{
        playGame('rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click',()=>{
        playGame('paper');
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click',()=>{
        playGame('scissors');
    });

document.querySelector('.js-reset-button')
    .addEventListener('click',()=>{
        score.wins = 0,
        score.loses = 0,
        score.ties = 0
        localStorage.removeItem('score');
    });


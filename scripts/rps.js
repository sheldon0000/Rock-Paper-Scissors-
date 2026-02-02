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

         alert(`You picked ${playerMove} - Computer picked ${computerMove} 
         
${result}`);

}
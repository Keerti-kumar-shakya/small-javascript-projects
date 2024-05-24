/********************score started********************/
let score = JSON.parse(localStorage.getItem('score')) || {
  ties: 0,
  losses: 0,
  wins: 0
};

userMove()
/********************Auto-play started********************/
let isAutoPlay = false;
let setPreviousTime;

function autoPlay() {

  if (!isAutoPlay) {
    setPreviousTime = setInterval(() => {
      const userGamePlay = computerMove();
  
      console.log(userGamePlay);
       userMove(userGamePlay);
       console.log(userGamePlay);
    }, 1000);
    isAutoPlay = true;
  } 
  else {
 clearInterval(setPreviousTime);
 isAutoPlay = false;
  }

}

/********************Auto-play end********************/

/********************click-event started********************/
const all_btn = document.querySelectorAll('.btn-js');

all_btn.forEach(function(btn) {
 btn.addEventListener('click', (e) =>{
  const playMove = e.currentTarget.dataset.id;
  userMove(playMove)
 })
})
/********************click-event end********************/

/******************click-event action started********************/
const all_action_btn = document.querySelectorAll('.js-action-btn');

all_action_btn.forEach(function (actBtn) {
  actBtn.addEventListener('click',(e) =>{
    const action = e.currentTarget.dataset.id;
    if (action === 'reset') {
      score.losses = 0;
      score.ties = 0;
      score.wins = 0;
    } else {
      autoPlay()
    }
    userMove()
  })
})

/********************click-event action end********************/

/********************user play ********************/
function userMove(userGamePlay) {
  const computerGamePlay = computerMove();

  let result = '';

  if (userGamePlay === 'Rock') {
    if (computerGamePlay === 'Rock') {
      result = 'Tie';
    }
    else if (computerGamePlay === 'Paper') {
      result = 'Lose';
    }
    else if (computerGamePlay === 'Scissor') {
      result = 'Win'; 
    }
  }

  if (userGamePlay === 'Paper') {
    if (computerGamePlay === 'Paper') {
      result = 'Tie';
    }
    else if (computerGamePlay === 'Rock') {
      result = 'Win';
    }
    else if (computerGamePlay === 'Scissor') {
      result = 'Lose'; 
    }
  }

  if (userGamePlay === 'Scissor') {
    if (computerGamePlay === 'Scissor') {
      result = 'Tie';
    }
    else if (computerGamePlay === 'Rock') {
      result = 'Lose';
    }
    else if (computerGamePlay === 'Paper') {
      result = 'Win'; 
    }
  }

  if (result === 'Tie') {
    score.ties++;
  } 
  else if (result === 'Win') {
    score.wins++;
  } 
  else if (result === 'Lose') {
    score.losses++;
  }


  resultDisplay(result,computerGamePlay, userGamePlay);

  storageData();
}


/********************user computer results ********************/
function resultDisplay(result, computerGamePlay, userGamePlay ) {
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins} losses: ${score.losses} Ties: ${score.ties}`; 

  document.querySelector('.js-results').innerHTML = `Results: ${result}`;

  document.querySelector('.js-display-player-results').innerHTML = `
  <h2>computer move:</h2>
   <img class="img-display-css" src="./images/${computerGamePlay}-emoji.png"> <h2>player move:</h2>
   <img class="img-display-css" src="./images/${userGamePlay === undefined? 'Rock' : userGamePlay}-emoji.png">
   
   `

}




/********************computer play ********************/

function computerMove() {
  let computerGamePlay;
  const random = Math.ceil(Math.random() * 3)

  if (random === 1) {
    computerGamePlay = 'Rock';
  } 
  else if (random === 2) {
    computerGamePlay = 'Paper';
  }
  else if (random === 3) {
    computerGamePlay = 'Scissor';
  }

 return computerGamePlay;
}

/********************storage data********************/

function storageData() {
  localStorage.setItem('score', JSON.stringify(score))
}


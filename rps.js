let score=JSON.parse((localStorage.getItem('score')))||{
  wins:0,
  losses:0,
  ties:0
  };

updateScoreElement();

function pickComputerMove()
{
let computerMove='';
const randomNumber=Math.random();

if(randomNumber>=0&&randomNumber<1/3)
{
computerMove='rock';
}
else if(randomNumber>=1/3&&randomNumber<2/3)
{
computerMove='paper';
}
else
{
computerMove='scissors';
}

return computerMove;
}

function playGame(playerMove)
{
computerMove=pickComputerMove();
let result='';
if(playerMove==='scissors')
{
if(computerMove==='rock')
{
result='You lose.';
}
else if(computerMove==='paper')
{
result='You win.';
}
else
{
result='Tie.';
}
}
else if(playerMove==='paper')
{
if(computerMove==='rock')
{
result='You win.';
}
else if(computerMove==='paper')
{
result='Tie.';
}
else
{
result='You lose.';
}
}
else
{
if(computerMove==='rock')
{
result='Tie.';
}
else if(computerMove==='paper')
{
result='You lose.';
}
else
{
result='You win.';
}
}

if(result==='You win.')
{
score.wins++;
}
else if(result==='You lose.')
{
score.losses++;
}
else
{
score.ties++;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML=result;

document.querySelector('.js-moves').innerHTML=`You
<img class="move-icon" src="images/${playerMove}-emoji.png">
<img class="move-icon" src="images/${computerMove}-emoji.png">
Computer`;
}

function updateScoreElement()
{
document.querySelector('.js-course').innerHTML=
`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

``` javascript 

console.log('vivek')

// Solution of the Project 1 

const buttonsSelected =document.querySelectorAll('.button')//selected button whole class 

const bodySelected = document.querySelector('body') // selected body

buttonsSelected.forEach(function(btn){  // node list pr for each loop lagni & saare buttons a jatane firr sare button pr click event lagata

btn.addEventListener('click', function(e){ // on click pr 

  if ( e.target.id === 'grey'){     
    bodySelected.style.backgroundColor=e.target.id // changes bg to grey
  }
  if ( e.target.id === 'white'){
    bodySelected.style.backgroundColor=e.target.id // bg to white
  }
  if ( e.target.id === 'blue'){
    bodySelected.style.backgroundColor=e.target.id // bg to blue
  }
  if ( e.target.id === 'yellow'){
    bodySelected.style.backgroundColor=e.target.id // bg to yellow
  }
});

});






```

## Project 2 ( calculating bmi)

## Solution of Project 1

``` javascript 

const form = document.querySelector('form'); // selecting the whole form 



form.addEventListener('submit',function(event){ // submit pr eventlistner chalna

  
  event.preventDefault();  // stops sending the data to the server side 

  const height = parseInt(document.querySelector('#height').value);//selecting & storing height
  const weight = parseInt(document.querySelector('#weight').value);// selecting and storign weight 
  const result = document.querySelector('#results'); // selecting the result div

  if ( height === '' || height < 0 || isNaN(height)){ // cheecking input condition of height
   result.innerHTML = ` Please enter a valid height ${height}`;
  }
  else if ( weight === '' || weight < 0 || isNaN(weight)){// check weight input conditions
    result.innerHTML = ` Please enter a valid weight ${weight}`;
   }
   else{
     const bmi = (weight / ((height * height) / 10000)).toFixed(2) // finally calculating bmi

     // displaying the bmi only
    // result.innerHTML =`<span>${bmi}</span>`;

    
// diplaying the bmi and as well as based on that bmi telling that is person is - underweight , normal range or overweight  
if(bmi<= 18.6){
  result.innerHTML=`<span> ${bmi} ( Underweight )</span>`;
}
if(18.6 <bmi<= 24.9){
  result.innerHTML=`<span>${bmi} ( Normal Weight ) </span>`;
}
if(bmi > 24.9){
  result.innerHTML=`<span>${bmi} ; ( overweight ) </span>`;
}


   }

});





```



## Project 3 

``` javascript 
const selectedClock = document.querySelector('div'); // selecting the div in which the time will be displayed


setInterval(function(){
let date = new Date(); 

selectedClock.innerHTML = date.toLocaleTimeString(); // the selectedclock that is a div ; a variable named date gives us the localtimestring

},1000);


```

## Project 4

``` javascript 

let randomNumber = parseInt(Math.random() * 100 + 1) ;// It will give a random number between 1 to 100

// console.log(randomNumber) // It will print that number in console


// selecting & storing all the elements that we need to solve this problem
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // creating a pargraph tag to add button here

let prevGuess = []; // array that tells us about all our prvious guesses
let numGuess = 1;   // starting the guess                      

let playGame = true; // if playgame boolean true hai tah hi apa game vich enter kariye je flase hai teh game chalni hi nhi .. aggee kaam auna jado apa end karvani game jado attempt poore ho jane


if (playGame){      // hun playgame true ho gayie 
  submit.addEventListener('click',function(e){  // submit button pr click karne pr event chalna f(x)
    e.preventDefault(); // server pr na send ho howe data submit krne pee
   const guess = parseInt( userInput.value); // guess karta number . input field ali value
   console.log(guess);  // dekhne nu ki guess kya krya apa number  
   validateGuess(guess);  // next function vich apa jehra number guess kita oh => pass karta
  });
}

function validateGuess(guess){
  // this f(x) or method checks while the entered number by the user is a valid number . like :-  b/w (1-100)

  if ( isNaN(guess) ){
    alert('Please enter a valid number !');
  } else
   if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if ( guess > 100) {
  alert('Please enter a number less than 100') ;
  }
  else{
    prevGuess.push(guess); // je number valid hai and sahi bhi nhi hai teh array ch add ho gya oh
    if ( numGuess === 11){ // if 10 de upr ho gye attempt ; fir game end krni hun

  displayGuess(guess); // f(x) call kita ik ihne clear karna sara
  displayMessage(`Game over . Random number was ${randomNumber}`);
  endGame();
    } else{
      displayGuess(guess);// next f(x) vich guessed value pass karti
      checkGuess(guess); // value passed to next method
    }
  }
}

function checkGuess (guess) {
  // this f(x) will check that whether the guessed number is correcr (equal to random number), less than it or higher than it 

  if ( guess === randomNumber){
    displayMessage(`You Won !  You guessed right`);
    endGame();
  } else if ( guess < randomNumber){
    displayMessage(`The target is higher`);
  }
  else if ( guess > randomNumber){
    displayMessage(`The target is lower`);
  }


}

function displayGuess(guess){
  // it will clear input field , add the guess in array and also decrease the remaining guesses

  userInput.value ='';
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++ ;
  remaining.innerHTML =` ${11 - numGuess}`;
}

function displayMessage(message){
  // It will simply display the messages in p that we have left empty for displaying messages..

lowOrHi.innerHTML = `<h2> ${message}</h2>`; // argument jehra hona displayMessage f(x) de andar oh ajana ithe

}

function endGame (){
  // this will end the game or reset it

  userInput.value='';      // cleared input field
  userInput.setAttribute('diabled',''); 
  p.classList.add('button'); // new button add kr dena p vich game end hone toh baad
  p.innerHTML = '<h2 id="newGame"> Start New Game</h2> '; // eh oh clickable buton hona p andar
  startOver.appendChild(p) // dom ch add karta p 
  playGame = false; // hun game chalni hi nhi ; new game pr click krke chalni
  newGame(); // new game f(x) called
  
}

function newGame(){
// this resets all the values and makes a button that plays the game again

const newGameButton = document.querySelector('#newGame'); // eh button naal hi new game chalni
newGameButton.addEventListener('click', function(e){ // click krne pr folllowing code
  randomNumber = parseInt(Math.random()  * 100 + 1);
  prevGuess= [];                                     
  numGuess = 1 ; 
  guessSlot.innerHTML='';                              // sara kuch clear/rest ho reha ithe fir toh
  remaining.innerHTML=`${11 - numGuess}`
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);

  playGame = true; // hun game khed sakde teh guessing ala kaam fir toh chal pena

});

}





```
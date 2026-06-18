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
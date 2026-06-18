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
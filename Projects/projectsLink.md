# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

``` javascript 

console.log('vivek')

// Solution of the Project 1 
const selectedButton = document.querySelectorAll('.button')

const bodySelected = document.querySelector('body')

selectedButton.forEach(function(btn){
btn.addEventListener('click',function(e){

  if(e.target.id === 'grey'){
    bodySelected.style.backgroundColor =e.target.id;
  }
  if(e.target.id === 'white'){
    bodySelected.style.backgroundColor ='pink';
  }
  if(e.target.id === 'blue'){
    bodySelected.style.backgroundColor =e.target.id;
  }
  if(e.target.id === 'yellow'){
    bodySelected.style.backgroundColor =e.target.id;
  }
});

});




```
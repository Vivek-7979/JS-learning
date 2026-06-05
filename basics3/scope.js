// {}  = Scope                           when it is inside the f(x) or if-else.


// As , the variable defined inside the scope is only accessible inside that scope.
// So that's why ; we dont use "var" keyword because it makes it accessible outside the scope even if we declare it inide the {block}

/*                                THE ISSUE with "var"                                     */

if (true){
    let a = 10
    const b =20
    var c = 30
} 

// console.log(a);  it can't be accessed that is a good thing
// console.log(b); it also can't be accessed . 

console.log(c);   // It is accesible outisde the scope that creates a  " big problem " .


/*                           Block scope and global scope                  */

/*  

 let a = 20  (global scope)

 block scope = 
    
 if (true){
    block scope     ; It only stays inside the block only.
 }

*/

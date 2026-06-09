// {}  = Scope                           when it is inside the f(x) or if-else.


// As , the variable defined inside the scope is only accessible inside that scope.
// So that's why ; we dont use "var" keyword because it makes it accessible outside the scope even if we declare it inide the {block}

/*                                THE ISSUE with "var"                                     */

if (true){
    let a = 10
    const b =20
   // var c = 30   // or simply : " c = 30 " will also cause the same issue of the block .
} 

// console.log(a);  it can't be accessed that is a good thing
// console.log(b); it also can't be accessed . 

console.log();   // It is accesible outisde the scope that creates a  " big problem " .


/*                           Block scope and global scope                  */

/*  

 let a = 20  (global scope)

 block scope = 
    
 if (true){
    block scope     ; It only stays inside the block only.(and should stay inside this only)
 }





  NOTE : JO GLOBAL SCOPE VICH HAI OH APA SCOPE DE ANDAR ACCESS KAR SAKDE BUT SCOPE ALA GLOBAL SCOPE CH NHI KR SKDE .
*/





//                                           NESTED SCOPE   + same with "" if-else  "                 //



function vadda () {

    const username='vivek'

    function chotta (){         // Nested f(x)
        const gf = "none"
        console.log(username); // chotta can access the vadda variable . as it is iniside the scope of vadda.
        
    }

   //  console.log(gf); // This will never execute as the vadda (outside scope) can never aceess variables inside its nested scope(chotta)
   
   chotta()  // It will called and executed as it  can access the vadda's variable .


}

vadda() // This function can also be easily called ; and will execute username only.


// chotta()            ;  we cant access this nested f(x) outside 


//                                 interseting topic - about the types of f(x) declaration


console.log(method1(5))         // we can use the function before declaration in simple method

function mehtod1(value) {      // simply declaring a function : normally
    return value +1
}



console.log(storing_function(6))                                // we can't access the function before the decalration if we store it in the variable

 const storing_function = function (value) {                    // Method 2 : storing the variable inside a variable.
   return value + 1 
}














//   call(it is actually a method and works with this keyword) , bind and apply => keywords in js 



// NOTE : When this keyword refers to the global context . 1.] If it is in browser environment (chrome-live server ) = global context refers to window .
//                                                         2] If the js is in node environment ( like - now in vs code ) = global context refers to the {}  ; empty object     


// call() :-  In JavaScript, call() is a built‑in method of functions that lets you run a function immediately, while setting what this should refer to and passing arguments one by one.
//             call() passes our current execution context to another function .


function setUsername(username){
    // complex db calls

    this.username = username     //  matlab username jo argument aya va f(x) ch usnu hi apa username de variable vich store karvadita .
    console.log('called');       // bina .call use kite call teh ho jana . but eh call hone toh baad execution context toh bahar chal jana . Sara kuch leke naal ..
}

function createUser(username,email,pass){
    setUsername.call(this ,username)     // Here , by using the .call() method inside this function the f(x) will be called and all its values will be given to this createUser f(x) before going out of the execution context
                                         // But ; this beofre passing username tells us that use this createuser username in the setUsername f(x) . NOw , it will work ( both .call() and this ,  are important)
                                         // Here , we also reused the code of above f(x) , that is useful in reusing code and method borrowing (hence , comes inside oops ).
        this.email = email
        this.pass = pass      // setting the argument pass in the pass ( same named variable )                                 
}


const user1 = new createUser( 'vivek', 'vivek@ig.com','124')     // giving the values for createUer f(x)
console.log(user1);                                              // printing the user1 

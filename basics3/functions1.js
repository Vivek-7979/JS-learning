// In very simple terms ; function is just a pack of code that do some task . And we call them whenever we want and it will do that specific function .
// It's Syntax:



function functionNameVariable (passing_parameters_here){  // when we make functions and pass parameters in it = parameters.
   // scope ;  Its code 
}


functionNameVariable // Function's reference
functionNameVariable(arguments) // When we calling a f(x) by using the () in its end and the value inside ( arguments)(Function's execution)

/*                     Example 1                                   */


function multiplyNumbers (n1,n2,n3){

    console.log(n1 * n2 * n3) // It just prints the values hor kuch ni karda(return ni karda)

    
    return n1 * n2 * n3 // It actually returns the value to the function.


    console.log("This code will never be executed")  // It is a rule that after the return line inside a f(x) the next line will never be executed.
}

const result = multiplyNumbers(2,2,3) // It will store the result of multiplyNumbers returned value in result variable.
console.log( "Now, the result after multiplication is :" , result )  // Printing the stored value that is inside the result variable.

// or simply :
//console.log(multiplyNumbers(2,2,3))



/*                        Example 2                                     */


function userloggedIn (user) {                     // if we write (user ="") .This empty string will be a default value that will be executed in any situation so that empty value dont create problem. But if we pass value it works fine !.
 
if(user === undefined){                           // It checks if the username is undefined . if yes = it will print a meesage a return . then , the next code line will never be executed.
    console.log("Please enter a valid username");
    return
}

    return `${user} just logged in`  // accessing the username value by backticks
}

//console.log(userloggedIn("Vivek Sharma"))  // printing the returned value and passing name as argument in it .
/* But , if we passed the empty even with no string it will says " undefined". to handle this use if-else*/


console.log(userloggedIn())





/*                                        Example 3 : add to cart calculation where we dont know how many arguments are there .                                        */


//                 ... = rest or spread operator


function addtoCart (...items) {
    return items
}

console.log(addtoCart(200,300,2000,500,59,99)) // here , we dont have any limit we can pass how much values as we want . It simply got added indside a array



/*                                example 4 : passing object as argument                                 */


const user= {
    username:"vivek",
    price:199,
    age:20
}

function passingObject(anyobject){
    console.log(`UserName is ${anyobject.username} and his age is ${anyobject.age} and its price of item is ${anyobject.price}`)
}

passingObject(user)  // calling the function in which the object is passed . but , tellling that the argument = user ( that is a object)


/*                                   Example 4 : passing array as parameter                       */


const theArray =[ 100,300,400,600,900]

function returnthirdValue(getArray){  // returning the array's second item . that can be any array .
    return getArray[2]
}

console.log(returnthirdValue(theArray))   // passing array as argument





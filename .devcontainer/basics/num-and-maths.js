const score = 400.978 // It is also a valid way of defining the number . But , it is old way.
console.log(score) // Here , JS automatically detects that the given input is a number .


const score1 = new Number(400.978)  // properly defined that is is a Number .It is a modern way of defining the number . It is used bcz it gives us more methods/functions so that we can apply on it . like : toExponential() , toFixed() , toPrecision() etc .
console.log(score1)
console.log(score1.toExponential()) // It will convert the number into exponential form . but the original number value is not changed as it is primitive (stack) data type .
console.log(score1.toFixed(2)) // It will convert the number into fixed point notation with 2 decimal places . 
console.log(score1.toPrecision(3)) // It will convert the number into a string with a specified length of 3 significant digits .


const hundreds = 12345256
console.log(hundreds.toLocaleString('en-IN')) // It will convert the number into a string in which it has commas like in the lakhs,thousands etc .(by default it is US so we have to manually chnage it into the indian type)

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++++++++++


// By default , JS has a built in object called Math which has many methods and properties to perform mathematical operations . It is a static object so we can directly call the methods without creating an instance of it .



console.log(Math);
console.log(Math.PI) // It will give us the value of pi (3.141592653589793) . It is a property of Math object .

console.log(Math.abs(-4));  // It only convets the negative value into +ve value . absolute value

console.log(Math.round(4.1)); // It is the normal round off .
console.log(Math.round(4.6)); // Normal round off

console.log(Math.ceil(4.1));  // Selects the ceiling value (topmost)
console.log(Math.floor(4.9)); // It selects the floor (lowermost) Value.

// Others also: min,max,sqrt,powerof etc.


// very immportant : Math.random() : It will give us a random number between 0 and 1 (including 0 but excluding 1) . It is a very useful method to generate random numbers for various purposes like games,random selection etc .

console.log(Math.random())                   // It will give us a random number between 0 and 1 (including 0 but excluding 1) . range = [ 0 to 9.9999999999] not 1.
console.log((Math.random()*10)+1 )           // It will give us a random value between 1 and 10 (including 1 but excluding 10).
                                             // 1 is added to avoid the 0 case . So , the random number range becomes [ 1 to 10 ] . Not {0 to 9}
console.log(Math.floor(Maths.random()*10)+1) // It will give only one digit as the value is rounded to floor .
                                             // The range becomes [11 to 20] 

/*Due ; to floor value if the number becomes 20.99999 or 10.999999 . It will return only 20 or 10 {That is all good!} */
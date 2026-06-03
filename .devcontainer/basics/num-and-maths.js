const score = 400   // It is also a valid way of defining the number . But , it is old way.
console.log(score) // Here , JS automatically detects that the given input is a number .


const score1 = new Number(400)  // It is a modern way of defining the number . It is used bcz it gives us more methods/functions so that we can apply on it . like : toExponential() , toFixed() , toPrecision() etc .
console.log(score1)
console.log(score1.toExponential()) // It will convert the number into exponential form . but the original number value is not changed as it is primitive (stack) data type .
console.log(score1.toFixed(2)) // It will convert the number into fixed point notation with 2 decimal places . 
console.log(score1.toPrecision(3)) // It will convert the number into a string with a specified length of 3 significant digits .





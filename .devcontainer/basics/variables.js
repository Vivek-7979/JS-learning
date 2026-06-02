

const accountid = 2303652


// Const is the keyword used to declare a coanstant keyword.
// accountid is the name of the constant variable.
// 2303652 is the value assigned to the constant variable accountid. called numeric literal.

// NOTE : To write the name of the variable we dont have some specific rules.
//        Just keep in mind that the name of the variable shoould be easily readable .
//        Accountid,accountId,account_id are all valid variable names but accountId is more readable and easily understandable.

let accountEmail="example@example.com"
var accountPassword="12345678"
accountCity="Bangalore" //Not a good practice at all but this is also a way.
let accountState;  // This is an undefined variable.




/*
These all 3 are changable variables because their values can be changed later . 
But const is a coanstant value that we cannot change.

Please ; Please dont use var to declare variables because
 it is an old way of declaring variables and it has some issues with scope.
  It is better to use let and const to declare variables in modern JavaScript.
*/




accountEmail="value changed"
accounntPassword="value changed"
accountCity="value changed"

console.log(accountid) 
console.table([accountid,accountEmail,accountPassword,accountCity,accountState])
 //To print multiple or all variables together in a tabular form .


 /*Note : 1.]  const and let are the variables used in the modern js .
          2.]  USE semi-colon at the end is not compulsory in js . but it is a good practice. */

// To run in temrinal:
// node .devcontainer/basics/test.js



// we can write strings in single or double quotes both are correct .
// "strings"  or  'strings'    = Correct 



const name ="Vivek"
const repoCount=12

// console.log( name + repoCount + "This is the description")
// This syntax/method also gives the same output but it is old method and less good readable . So , the modern merhod is :

console.log(`Hello my name is ${name} and my total repos in github is ${repoCount}`)  // this is the modern way of writing this

/* Syntax: backticks ``  to access the variable use the $ sign and{variable name } .
  console.log ( ` ${variable name} ` )
  */

const nameofme = new String("Vivek Sharma")  // Another modern way of declaring the string . It is used bcz it gives us more methods/functions so that we can apply on it . like : anchor , bold , uppercase,lenght etc .
console.log(nameofme)
console.log(nameofme.length) // it will give us the length of the string . it is a property of string data type . it is not a function so we do not use parenthesis after it .
console.log(nameofme.toUpperCase()) // It is converted into uppercase . but the original string value is not changed as it is primitive (stack) data type .
console.log(nameofme.charAt(2)) // It will give us the character at the specified index . Indexing starts from 0 .



const userName = "       Vivek Sharma     "  // this string has so many extra spaces that a user fill in the name input field (jaanke..).
console.log(userName)
console.log(userName.trim()) // It will remove the extra spaces from the string . but the original string value is not changed as it is primitive (stack) data type .(NOTE : It doesnot remove the spaces in between the words it only removes the extra spaces at the beginning and end of the string .)

const url ="https://vivek.com/vivek%20sharma" // here sometimes the browser automatically encodes the url and replaces the space with %20 . so to decode it we can use decodeURI() function or replace function of string .

console.log(decodeURI(url)) // it will decode the url and replace %20 with space . but the original string value is not changed as it is primitive (stack) data type .

console.log(url.replace("%20"," ")) // it will replace %20 with space . but the original string value is not changed as it is primitive (stack) data type .

// Both the methods give the same output but the modern method is decodeURI() as it is more readable and easier to understand . It is also used to decode the url in a better way as it can decode other special characters as well . like : %20 for space , %40 for @ etc .

console.log(url.includes("vivek")) // it will check if the string includes the specified substring or not . it returns true or false . but the original string value is not changed as it is primitive (stack) data type .





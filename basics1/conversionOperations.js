let score = "33Ab"

console.log ( typeof score)
console.log ( typeof (score)) // both ways are correct 


//To convert the one datatype to another we use the Data type conversions.

let valueInNumber = Number(score) // score variable  nu  number data type vich convert kr dena .

console.log( typeof valueInNumber)
console.log( typeof (valueInNumber))
console.log(valueInNumber)


// "33" => 33 ; easily converted into number
// "33Ab"=> NaN (not a number) ; cant be converted into number
// true=> 1 ; false =>0
// null => 0

/* NOTE : Because sanu nhi pata ki oh variable value jehri define kiti vi front-end ch oh number hai , string hai ya kya hai */ 


let UserloggedIn = 1234

let booleanvalueofit = Boolean (UserloggedIn)
console.log(booleanvalueofit)


/*For diiferent types if we convert into boolean
1=> true ; 0=> false
""=> false
"vivek"=> true
"1234" ; "1233" etc => true
*/


let anynumber = 69
let convertedtostring= String(anynumber) // the 69 number becomes a string . altough it is shwon 69


console.log( convertedtostring)
console.log ( typeof convertedtostring); // This is altough seeing a number but it is a string now 



// **********************  OPERATIONS ************************


let value = 33
let negvalue=-value;
console.log(negvalue) // here simply the arithmetic operations are performed 

// Arithmetic operations :
// console.log(2+2)
// console.log(2*2)
// console.log(2-2)
// console.log(2**3)
// console.log(4/2)
// console.log(3%2)  It tells about the remainder


let str1= "vivek"
let str2=" sharma"
let str3= str1+str2; // simply aadding the strings 
console.log(str3)  


let a = 3
// let b = a++  a=4 ; b= 3
let c = ++a // a = 4 ; c= 4
console.table([a,c])


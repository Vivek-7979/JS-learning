/*data kis trah memory vich store hunda  ya kis trah apa us nu access kar  sakde is basis pr hi data types nu apa classify krde 

              JS is a dynamically-typed language . bcz it defines the type of variable at run-time based on variable's value .

1.]  Primitive : They are call by value .(copied)
     
     (7 Types ) : String , number , boolean , null (empty) , undefined , symbol , BigInt( scientific /big values ) .
 

     THIS IS THE SYMBOL DATA TYPE :
     let Id = Symbol('123')
     Let anotherId = Symbol('123')

     however , the symbol data type is looking same but it is not . 
     to check = console.log( Id === anotherId );  // It will be false 
     

2.] Non - Primitive : Called by Reference  (exact memory location is passed)

    ( Types ) : Arrays , objects , Functions


const array =["item1", "item2","item3"];

let object = {
name:"vivek"
age :"20"
}




To check the data type of any variable we use the "typeof" .

like : console.log( typeof === anotherId )

Note: undefined type = undefinef
      null = object
      boolean = boolean
      number = number
      string = string 
      object (native doesnot call ) = object 
      object (native or host and does implement call )=function

Generally non-primitive data types ; type = object . and function data type  = function object .

*/

 let Id = Symbol('123')
 let anotherId = Symbol('123')

 let myNull = null ;

 let myBigInt=1234567889979n;  // To define that this number is big int simply write 'n' after the numeric value .

 let loggedIn = false;

 let stateundefined;

 const arr1 =["item1","item2","item3"];
let myobj ={
     name:"vivek",
     age:20,

}
const myFunction = function(){
console.log("hi vivek")
}

 console.log(typeof Id)//symbol
  console.log(typeof arr1)//object
   console.log(typeof myobj)//object
    console.log(typeof myFunction)//function object
    console.log(typeof stateundefined)//udefined
    console.log(typeof loggedIn)//boolean
    console.log(typeof myBigInt)//bigint
    console.log(typeof myNull)// Object ( special case )

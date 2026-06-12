//  1.] if - statement     ( It is a conditional code and we are controling the flow of code or whether this block of code shoulf run or not .)

/*

! not
= assignment operator
== is it equal to 
=== is to equal to and have same data type (strict equal)                   */


// 1.] Syntax of if - else : 

// if(condition){

 // Code    ; and it is a different independent scope

// }

// else {
            // we cant access its variables/data outside this scope 
// }

// 2.] Nested if-else                      (means multiple condition)

const amount = 1000000

if (amount<99999){
    console.log( " The person is hazarpati" )
}
  
  else if(amount<999999){
    console.log("The person is LAKHPATI")
  }

     else if ( amount<9999999){
        console.log("The person earns in 7-FIGURES")
     }

else{
    console.log("the person is CROREPATI")
}     
  
// +++++++++++++++++++++++++++++++++       REal Life use-case of if-else           +++++++++++++++++++++++++++++++++

/*
&& = dohve statement true honi chaidi tah hi chalna
|| = dohva vicho ik true howe tah bhi chal pena  
                     */

const isuserLoggedin = true 
const debitCard = true

let loginfromGoogle= false
let loginfromEmail=false
let loginfromNumber=true

if(loginfromEmail || loginfromGoogle  || loginfromNumber){
    console.log("The user is logged In Successfully !")
}


if(isuserLoggedin && debitCard && 2===2){
    console.log("User can buy an item ")
}


/* 
                          SOME OTHER OPERATORS 


Note : 1.] Nullish Coalescing Operatot ( ?? ) : for null / undefined

example :                                                                                     */

              let val1;
              val1= 5 ?? 10                    // ans : 5
              val1= null ?? 10                 // ans : 10
              val1= undefined ?? 15            // ans : 15
              val1 = null ?? 10 ?? 500         // ans : 10
              val1 = null ?? undefined         // ans : undefined

console.log(val1)


/* 2.] terneray operator ( ? ) : question then ans true = first condition worked and false = second condition .

        condition ? true : false 

Example : const Price = 100
          Price <=80 ? console.log("Price is less than 80") : console.log("Price is more than 80 ")                */





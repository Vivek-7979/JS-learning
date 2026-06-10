// JAvascript Execution Context 

/*  GLOBAL EXECUTION CONTEXT TEH HONA HI HONA HAIII ( compulsory ) : it is allocated in "this" keyword.

phases of Execution context : 1.] Global execution context 
                              2.] Function Execution Context 
                              3.] Eval Execution context (just we should know name o this only....)



The code(of Js ) runs in two phases : 1.] Memory Creation phase (or creation phase)     : for all the variables the memory is a;llocated for them .
                                      2.] Execution Phase


*/
 
let val1=10
let val2=5
function addNum(num1,num2){
    let total = num1+num2
    return total
}

let result1 = addNum(val1,val2)
let result2=addNum(10,2)

// Now we will learn that how this code is executed in proper steps .

/* 

PHASES :


1.] GLobal execution : It is allocated this 

2.] Memory creation phase : 
    val1 -> undefined
    val2-> undefined
    addNum-> definition of f(x)    . The whole code of f(x)
    result1-> undefined
    result2-> undefined

3.] Execution Phase :
    val1 <- 10 
    val2 <- 5
    addNum ------>    Here , the function is going to be executed . So , a another environment or sand box is created . Where the same memory and execution phase occurs independently.
                                                                                                                          It will have new Vriable environment + thread .  
                                                                                                                      1.] memory phase :
                                                                                                                          val1 -> undefined 
                                                                                                                          val2 -> undefined
                                                                                                                          total -> undefined

                                                                                                                     2.] Execution Context 
                                                                                                                         num1 -> 10
                                                                                                                         num2->5
                                                                                                                         total->15

                                                                                                                    AND AFTER THIS FUNCTION IS EXECUTED THIS WHOLE SEPARATE ENVIRONMENT THAT IS CREATED IS DELETED.
                                                                                                                    
  3.1] result1 <- 15   
  3.2] Same the function is called and the environemnt will be setup   . a] Memory phaase                  b] Execution Phase :
                                                                            val1 -> undefined                num1->10
                                                                            val2 -> undefined                num2-> 2
                                                                            total -> undefined               total ->12
                                                                                                          
                                                                             Now the total is returned to the global Execcution                                        


3.2] result2 <- 12



// ++++++++++++++++++++++++++++++++++ Other concept is  call stack : when the calling goes furhter and they go inside the stack data structure .

             
       f(2)                                      
       f(1)                                     This is a stack (that follow LIFO principle)
       f(0)
global Execution/Environment

1.] global environment setup
2.] f(0) is called it calls another function f(1) it call another f(2)
3.] When finally f(2) is executed it comes out fromm the stack .

And it looks like :  f(2) -> f(1) -> f(0)



*/

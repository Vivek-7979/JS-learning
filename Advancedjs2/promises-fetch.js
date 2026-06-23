 /* what is Promise ?? 

 The Promise :-  "object" represents the eventual completion (or failure) 
                  of an asynchronous operation and its resulting value.       { it tells that whether the task will complete or fail . complete = promise complete ; fail = promise breaked/fail}

 1.] { Promise is a Object }
 2.] {Main promise da mota-mota kaam eh ga = ki ihne ds hi dena kaam hona ya nhi hona ... fer sanu dasna pena ki kaam je ho gya taaah kya krna je na hoya taah kya karna
     (mtlb ki sanu pata lag jana ki scene kya ga ) jiwe apa api rahi server toh data manggya - je oh aa gya taah bhi pata lag jana je na aya taah bhi pta lag jana kii nhi aya  }
 
 
A Promise is in one of these states:

pending:    initial state, { neither fulfilled nor rejected } .
fulfilled:  meaning that the operation was {completed} successfully.
rejected:   meaning that the operation {failed} .                                  */



/*      Method 1 : Promise               */


// 1.] Creating a Promise
const creatingPromise = new Promise(function (resolve,reject){                  // resolve or reject are not the permanent keywords . We can techincally name them anything like - success or failure . But ; it is a standard practice to name them resolve or reject .
    // Any task to do done : async code execution , db call , network etc 

setTimeout(function() {
    console.log('Async task 1 is completed after 1s');
    resolve() // passing resolve in f(x) and it goes in then 
}, 1000);
})


// 2.] Consuming/using promise
// then = reolve   (sucessfully task completed)     catch = reject      (task failed)
creatingPromise.then(function () {
    console.log('Task is completed/fullfilled : Promise Resolved')  // task hone toh baad chalna eh 
})


/*      Method 2 for using promise  (creating & consuming it together )          */

new Promise (function (resolve,reject) {
    
    setTimeout(() => {
        console.log('Async task 2 completed after 3s');
        resolve() // ithe resolve likhna pena taah hi .then kaam karna !

    }, 3000);
}).then(function(){
    console.log('Promise is reolved : completed successfully')
})


/*    3.]  using the Promise   */

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        
resolve( {username: 'vivek' , age : 21} )    // here we can pass values in reolve . like - an object in resolve
    }, 1000);
})


PromiseThree.then(function(user){    // As resolve is directly connected to then and is we pass value in f(x) of then . Then , it will give us the values that are inside the resolve
    console.log(user);
})




/*  4.] Method  for using a promise : using the reject & finally also            */

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(() => {
        let error = false ;  // hun apa manke chaldeo ki error bhi aw gya (haan/na)   { je error nhi  aya teh resolve-then chalna .. je aya taah reject-catch  }
        if (!error) {       // je teh error nhi aya fir aa block of code execute krado
            resolve( {username : 'vivek' , password : '5911'} )
        }else {              // je error a gya fir eh pass kardena reject vich
            reject(' ERROR : Something went wrong ') // reject ch value pass ho gyie and reject = catch
        }
    }, 1000);
})

promiseFour // promise pr then and catch laga rehe 
.then(function(user){     // jo resolve ch pass karna oh then de parameter vich a jana 
    console.log(user);    // simple username print kar dena 
    return user.username  // eh then ne hun furhter value return kar diti jo user vich hai  { but eh sirf next then vich hi pass honi and access honi }
}) // { then de baad then fir then = then chaining}
.then( function ( username ) {   // psihle then ali value pass hoi vi gi eh 
    console.log(username);
})
.catch( function(error){   //  hun reject ch jo pass kita hona oh a jana hun ithe 
    console.log(error);    // jo hai error ala message jo reject de vich pass kita c  ..oh  a gya ithe 
})
.finally(function(){       // finally(after some x amount of time { not infinite }) = matlab ihne sanu das dena ki jo kaam hona c oh ho gya - { chae oh resolve hona c / chae reject }
    console.log('The promise has done its task : whether the promise is resolved / rejected ')
})




/*   5 Method    : Handling the promise with the async & await   (we can do the same task with the then-catch  and async await )       */

// async and await are js keywords that are used to do the asynchronous task (like - api calling , db data etc)
// async = Placed before a function declaration to turn it into an asynchronous function. An async function always returns a Promise. 
// await = Can only be used inside an async function. It pauses the execution of the function line-by-line until the target Promise settles (either resolves with a value or rejects with an error). Crucially, it does not block the main browser thread; other background scripts continue running while the function waits


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if (!error){
            resolve({ course : 'btech' , fees: '25k'})
        }else{
            reject('ERROR: back lag gyie')
        }
    }, 1000);
})

async function usepromiseFive(){
    try {
        const response = await promiseFive  // await is used for the success scenario that is the value of resolve is passed
        console.log(response)
    } catch (error) {
        console.log(error)  ;               // the value of reject is passed 
    }
}
usepromiseFive()                    // calling the async-await function is called  to do that task(i.e handling the async code )


/*  real life use-case =   getting the data from the api    */



// 1.]     By using the async - await  ( https://jsonplaceholder.typicode.com/todos/1 = This is fake REST API we are using for our learning)

async function getAllUsers(){
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')   // direct api da url dena ohnu kisi vich store krvana fer + await bhi karna bcz time lagda auna nu ohnu data nu {bcz = async da kaam hi ehi ga ki code rok dena jado tk response nhi aunda }
        const data = await response.json()                  //  .json() jo data auna kisi bhi form ch (string ch aunda) ohnu json format vich convert kar dinda + it also uses await 
        console.log(data);
        
    } catch (error) {
        console.log("E:",error);   // catch ne error ds dena kya ga
    }
}
getAllUsers()    // calling the async-await function to do the task

// We are getting the answer in the json format



//  2.]  By using the then-catch block          ( https://jsonplaceholder.typicode.com/todos/1 = This is fake REST API we are using for our learning)

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(response){
    return response.json()       // converting the repsonse we got in the then into the json() format 
})
.then(function(convertedResponse){    //  jo return kita upar ale then ne oh is vich pass ho jana and print bhi
    console.log(convertedResponse)
})
.catch( (error) => { console.log(error)})   // It is handling the error 

// We are getting the answer in the json format




/*      NOTE : 1.] ftech() =  It is a global method ;  that starts the process of fetching(le reha) a resource/data from the network , returning a promise which is fullfilled once the response is available .
//                            A fetch() promise is only reject when a network error is occured ( when there's a permission denial )    ; The errors - 302 , 404(file not found) etc are come in response and not in reject .



//             2.]  Priority queue = For only the fetch() method the priority queue / Micro task queue is made  .   { that has callbacks that are to executed with the highest priority inside the call STACK (in js engine !) ( saab toh pehla ehi hona chaida)}
//                                   ex - chae task queue & priority queue da same time of execution hai "call stack" de andar .. but fir bhi ihne shetti execute hona ( bcz ; in general IT IS FAST !!!) :-  pehla hi complete ho janda eh



// 3.]  How fetch() actually works = >
//                                          response =   fetch ('something URL' , { we can also pass data here ; that will also go with the request})
                                                            |                   
                                             -------------------------------------------------------------------------------                          
                                            |                                                                              |
                                        Data : ______ (intiallyempty)                                                 Web Browser
                                  onfullfilled[f(x)]                                                                        |  
                                  onRejection[f(x)]                                                              Network request is sent      
                                               |                                                                            |
                                               |                                                                 -----------------------------------------------------------------------------------
                                               |                                                                 |                                                                                 |                                                
                                               |                                                      Resolved(sucess) : data is sent to onfullfilled that is inside data ,             Reject(failed promise) : similarly , it sends the data inside the onrejection[]
                                               |                                                                         and it sends the data in reponse(global variable) 
                                    GLOBAL memory   ( de andar apa jo decalre kita wa)
                                   response : data { response vich data fill karna data di duty hai}   
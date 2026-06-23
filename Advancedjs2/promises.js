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


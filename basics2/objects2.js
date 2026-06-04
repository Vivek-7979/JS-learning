// Another way of defining the object is the object consttructor .(It is the singleton value)

const user={}

user.id="2303652"
user.name="vivek"
user.isloggedIn= false

console.log(user);

// to merge multiple objects

const target ={ a:1, b:2};       
const source1 ={ c:4 , d:5 };
const source2={e:6,f:7};

// Not a popular way => const returnTarget = Object.assign(target,source1,source2)  // Target means the value is stored in the target . To avoid storing in first object we can pass a {} .

 
//console.log(returnTarget);  // returnTarget === target

//Most popular one :- 

const mregedAll ={...target,...source1,...source2} // Spread method = ...
//console.log(mergedAll);

console.log(user);

console.log(Object.keys(user))  // User object di saari keys ds deni ehne array vich.
console.log(Object.values(user))  // give all the values inside the object passed in ()
console.log(Object.entries(user)) // each key with its value is returned as a array .



// Database return the values and key like :
 /*



const users ={
    {
            },
            {

            },
}
            
*/


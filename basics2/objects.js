// There are two ways to create objects in JS : 1.] By object literal
//                                              2.] By using the Object constructor(becomes Singleton object)  like : Object.create.

// 1.] By object literal : This is the most common way to create an object in JS. We can create an object by using the curly braces {} and defining the properties and values inside it. i.e. Creating an object by using object literal.
/* syntax (of object literal): variable = {key:"value" } */

const mySymbol = Symbol("key1") // declaring a symbol


const userDetails ={
    name: "Vivek",
    [mySymbol]:"mykey1", // this [] is Compulsory ...using a symbol as a key inside the object.
    age: 22,
    email: "abc@gmail.com",
    isAdmin: true,
    hobbies: ["coding", "gaming", "traveling"],
    address: {
        city: "chandigarh",
        state: "punjab",
        country: "India"
    }
}
//  console.log(userDetails);  //printing whole object






// Now , to access the key values inside this object .

console.log(userDetails.email)

console.log(userDetails["email"])
console.log(userDetails["address"])
console.log(userDetails["age"])

console.log(userDetails[mySymbol]) // To print the symbol data type as a key inside the object.{output will be same but it is a symbol now .}


/* ++++++++++++++++++++ Locking values +++++++++++++++++++*/

userDetails.age=100 // here the age value is chnaged by accessing it

/* Object.freeze(userDetails) // It locks the values of the object . As , now nobody can change these values*/

console.log(userDetails["age"]) // Now ; this line will not be executed .


/* ++++++++++++++++++++++ Using FUNCTIONS ++++++++++++++++++++++++++++++++++++++*/

userDetails.greetings = function(){
    console.log("hello user");
}

userDetails.greetingstwo = function(){
    console.log(`Hello our dear ${this.name}`); // if we are refering the same object then we use this and it will give us all the key values in that .
}

console.log(userDetails.greetings())  // calling a function that is related to a object.
console.log(userDetails.greetingstwo())

/*
Final Note : 1.] Mostly we will access the values by the . method in objects.
             2.] But in some case we have to access it like : ["key"]
             3.] And in rare case . like: [symbol] 
                                                         */
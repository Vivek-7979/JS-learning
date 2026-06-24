/* In JavaScript, a prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects.

It’s one of the core features of JavaScript’s object-oriented system and is essential for inheritance and memory efficiency.

1. What is a Prototype?
Every JavaScript object has an internal link to another object called its prototype.
The prototype itself can have its own prototype, forming a prototype chain.

When you try to access a property or method on an object:
    1. JavaScript first looks for it on the object itself.
    2. If not found, it looks up the prototype chain until it finds it or reaches null.

*/


// 2. Example :-

// Constructor function
function Person(name) {
    this.name = name;
}

// Adding a method to the prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person("Alice");
const bob = new Person("Bob");

alice.sayHello(); // Hello, my name is Alice
bob.sayHello();   // Hello, my name is Bob

console.log(alice.hasOwnProperty("sayHello")); // false (comes from prototype)



// Why this is efficient:
// The sayHello method is stored once in Person.prototype and shared by all instances, instead of being duplicated for each object.



/*           ' VERY IMPORTANT '
💡 In short:
The prototype is critical in JavaScript because it’s the foundation of inheritance and method sharing. Without it, JavaScript would be far less efficient and flexible.  */




/*   PROTOTYPE IN OOPs (JavaScript)

In JavaScript’s object-oriented model, a prototype is an object from which other objects inherit properties and methods.
 This mechanism forms the prototype chain, enabling inheritance and code reuse without duplicating methods for each instance.

Every object has an internal [[Prototype]] (accessible via Object.getPrototypeOf()), and when a property or method is accessed, 
JavaScript searches the object first, then moves up the prototype chain until it finds it or reaches null                                       */

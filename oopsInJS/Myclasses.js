// All the classes , objects , new comes after the ES6 update of JS => After 2015 


/*
In JavaScript, classes are used to create objects with shared properties and methods, promoting object-oriented programming principles. Here are some key points about classes in JavaScript:


Definition: A class is a blueprint for creating objects. It defines properties (attributes) and methods (functions) that the objects created from the class will inherit. 

Constructor: The constructor is a special method that is automatically called when an instance of the class is created. It initializes the properties of the object. 

Methods: Inside a class, you can define methods to provide behavior for the objects created from the class. These methods can be called using dot notation (e.g., object.methodName()).. 

Encapsulation: Classes encapsulate data (properties) and behavior (methods) together, promoting data hiding and separation of concerns. 

Inheritance: JavaScript supports inheritance, allowing one class to inherit properties and methods from another, which can be useful for creating complex objects with multiple layers of inheritance. */


class Person {                // class is defined 
 constructor(name, age) {      //  constrctor is called - creates new instance
      this.name = name;        // property1 of class
      this.age = age;          // property2 of class
}
  greet() {                                                    // method1 of class
      return `${this.name} is ${this.age} years old.`;
          }
}


const person1 = new Person('vivek', 20);       // object1 is created that is using the properties and methods that are inside the class ( methods & properties ) that can be shared bby many objects . Also class hiding the data .
console.log(person1.greet()); // Output: vivek is 20 years old.



// Ihneritance : class to class , object to object and object inheriting from class .

class Parent {
    greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    greetChild() {
        console.log("Hello from Child");
    }
}

const obj = new Child();
obj.greet();      // Inherited from Parent
obj.greetChild(); // Defined in Child



/* 1.] extends → Makes Dog and Cat inherit from Animal.
   2.] super() → Calls the parent class constructor to initialize inherited properties.
   3.] Prototype Chain → Methods in Animal are available to Dog and Cat objects.
   4.] Code Reuse → Common logic (eat) is written once in Animal and reused.                     */

// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Child class inheriting from Animal
class Dog extends Animal {                     // extend = dog class getting proprties from animal class
    constructor(name, breed) {
        // Call parent constructor
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} the ${this.breed} is barking!`);
    }
}

// Another child class inheriting from Animal
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        console.log(`${this.name} the ${this.color} cat is meowing!`);
    }
}

// Create objects (instances)
const dog1 = new Dog("Buddy", "Golden Retriever");  // object from dog class is created ( also called instance ) that inherits the properties/methods from animal class .
dog1.eat();  // ✅ Inherited from Animal
dog1.bark(); // ✅ Defined in Dog

const cat1 = new Cat("Whiskers", "black");
cat1.eat();  // ✅ Inherited from Animal
cat1.meow(); // ✅ Defined in Cat

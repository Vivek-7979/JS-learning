// static => It is a keyword in JS that is used inside ' classes ' to define static methods or static properties .
//            It is used when we don't want that this property/method shouldnot be accessed outside this class(from their childern/objects) . So , we make them static  { even the objects made from the class can't access the static method()}


class Temperature {
    // Static method to convert Celsius to Fahrenheit
    static toFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    // Static method to convert Fahrenheit to Celsius
    static toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
}

// ✅ Correct way: Call static methods using the class name
console.log(Temperature.toFahrenheit(0));   // Output: 32
console.log(Temperature.toFahrenheit(25));  // Output: 77
console.log(Temperature.toCelsius(32));     // Output: 0
console.log(Temperature.toCelsius(100));    // Output: 37.777...

// ❌ Wrong way: Trying to call static method from an instance
const tempObj = new Temperature();    // creating a new object/instance & trying to access that class from this object { BUT WE CAN'T !! }
console.log(tempObj.toFahrenheit); // Output: undefined
// tempObj.toFahrenheit(25); // ❌ This will cause an error if uncommented

// arrays : It is a object (non-primitive data type) that can store multiple values in a single variable.

// To define array first we decclare a variable and then asssign the items inside the square brackets .
// Example : variable =[item1, item2, item3, item4, item5]
// NOTE : The items in the array can be of any data type (string, number, boolean, object, etc.) and they can be mixed in the same array.
//        In JS the arrays are resiable
// Example of array

let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(fruits);
console.log(fruits[0]); // Accessing the first item of the array
console.log(fruits[2]); // Accessing the third item of the array



// Another way to create an array is by using the Array constructor . LIke : variable = new Array (item1, item2, item3, item4, item5) 
const myHeroes = new Array("Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern");
console.log(myHeroes);




// +++++++++++++++++++++++++++++++ Array Methods : +++++++++++++++++++++++++++++++++++++


//  push() , pop() , unshift() , shift() : These are the methods to add or remove items from the array .
myHeroes.push("new item added"); // This method adds a new item to the end of the array i.e. Pushing a new item in the end of array .
console.log(myHeroes);


fruits.pop(); // This method removes the last item from the array and returns it. i.e. Popping the last item from the array.
console.log(fruits);

fruits.unshift("new item added in the beginning"); // This method adds a new item to the beginning of the array i.e. Adding a new item in the beginning of the array.
console.log(fruits);

// But , this a very bad way to add a new item in the starting as we have to shift all the value . That is time taking and has high load on the system { Not a optimal way }

myHeroes.shift(); // This method removes the first item from the array and returns it. i.e. Removing the first item from the array.
console.log(myHeroes);


// Another method that is used ask the questions from the array
console.log(fruits.length); // This method returns the number of items in the array. i.e. Length of the array.
console.log(myHeroes.includes("Batman")); //[Answer : true/false] This method checks if the array includes a certain item and returns true or false. i.e. Checking if the array includes a certain item.
console.log(fruits.indexOf("orange")); // This method returns the index of the first occurrence of a certain item in the array, or -1 if it is not found. i.e. Finding the index of a certain item in the array.
                                       // If it doesnot exsist it will return -1.

    // Join
  const newArr = fruits.join(", "); // This method joins all the items in the array into a string, separated by a specified separator (default is comma). i.e. Joining all the items in the array into a string.
console.log(newArr);


// Slice , Splice
// slice() : This method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. i.e. Slicing a portion of an array into a new array.
const slicedFruits = fruits.slice(1, 4); // This will return a new array with items from index 1 to index 3 (4 is not included).
console.log(slicedFruits); // 1, 2, 3 index ke items ko return karega. Original array is not modified.
console.log(fruits); // Original array is not modified.

// splice() : This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. i.e. Splicing an array to remove, replace or add items.
fruits.splice(1,2); // This will remove 1 item from index 2 (which is "orange") and 1 item from index 1 (which is "banana") and return the removed items in a new array.
console.log(fruits); // Original array is modified.

// fruits.splice(1, 0, "new item added"); // This will add a new item at index 1 without removing any item.
// console.log(fruits); // Original array is modified.{items bahar hi a gyie puri jo splice kiti c}

// fruits.splice(3, 1, "replaced item"); // This will replace 1 item at index 3 with "replaced item".
// console.log(fruits); // Original array is modified.




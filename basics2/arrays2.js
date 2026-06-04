const new1 =[0,1,2,3,4];
const new2 =[11,12,13,14,15];

new1.push(new2) // This will add the entire new2 array as a single item at the end of new1 array. i.e. Pushing an array into another array.
console.log(new1); // Output: [0, 1, 2, 3, 4, [11, 12, 13, 14, 15]]



const new3=['a','b','c','d','e'];
const new4=['f','g','h','i','j'];
concatArr = new3.concat(new4); // This will concatenate the new3 and new4 arrays and return a new array(concatArr). i.e. Concatenating two arrays.
console.log(concatArr); // Output: [a, b, c, d, e, f, g, h, i, j] { har ek item alag honi ...}


/* But the another and best way of merging the two or more arrays is by using the spread operator ... . This will merge the two or more arrays into a single array without nesting. i.e. Merging two or more arrays using the spread operator. */

const mergedArr = [...new3, ...new4 ,...new2];
console.log(mergedArr); // Output: [a, b, c, d, e, f, g, h, i, j,11,12,13,14,15] { har ek item alag-alag hona ...}


/* RAre case : Where we have array in another array , arrar inside array thrn it is inside array . ND WE want all items individually.*/

const nestedArr = [1, 2, [3, 4], [5, 6, [7, 8,[11,12,13,"abu",]]]];// array de andar array ohde ander array and so on .....
const flattenedArr = nestedArr.flat(Infinity); // infinity: means kihne level tk nested hai (simply infinity dedo so oh app hi ddekhlunag) This will flatten the nestedArr array to a single level array. i.e. Flattening a nested array to a single level array.
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8] { har ek item alag-alag hona ...}


console.log(Array.isArray("vivek"))  // tells us that is this a array(true/false) . if we got it from any input
console.log(Array.from("vivek"))  // this will comvert any form into a array format
console.log(Array.from({name:"vivek", age: 22})) // interseting case (it will give for now a empty object)


let score1= 100
let score2='a'
let score3= true

console.log(Array.of(score1, score2, score3)) // This will make a array of the items inside the arrays.

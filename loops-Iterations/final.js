// map()  is also a another method for accessing array and doing some real operations on it like : multiplying each value with 2 , adding 10 in all etc
// Infact ; filter is not so capable of doing such operations but the map is very efficient .



const numbers =[ 1,2,3,4,5,6,7,8,9,10]

const newNumbers = numbers.map( (nums) => { return nums * 2})              // mutliplying each number with 2 and returning that answer 
console.log(newNumbers)



// Summary :
//           .map(after return we can do operations on value) = mehtod , .foreach(har ik value iterate karda(but doesnot return)) = a method , .filter(just condition check krke dinda) = a method .      
//      And using multipe methods together = " chaining "

const arrayofNumbers =[ 1,2,3,4,5,6,7,8,9,10]

const newNumbersArray = arrayofNumbers.map ( (nums) => nums * 10)           // jo value multiply karne to baad auni oh store honi num de vich... like now nums = [10,20,30.....]
                                  .map ((nums) => nums + 2)            // multiply karn toh baad ala array aya wa nums bich
                                  .filter ((nums) => nums > 30)

console.log(newNumbersArray)   





// +++++++++++++++++++++++++++++++++++               REDUCE METHOD       =>    used to add all items of array together (with have to give some initial value)           +++++++++++++++++++++++++++++++++++++



const array =[ 1,2,3,4,5,6,7,8,9,10]

const newArray = array.reduce((previousvalue,currentvalue) => { return previousvalue + currentvalue},0  )  // 0 is the intial value we are assigning to the previous value variable so it can start
console.log(newArray)                         // sum of all items in the array i.e. 55

/*    But , we can do this with for loop , while loop , do while loop etc ...[It's just our choice]   */






// like : doing all this with for-loop

let element = 0;
for (let i = 0; i < array.length; i++) {
    element = element + array[i];                 // arr[i] => means that the value inside the array at that index       [] = actual value
//  console.log(element)                         ; if we want to see each and every step of adding . as this console is inside the loop

}
console.log(element)                             // if we want to just see the final result only 

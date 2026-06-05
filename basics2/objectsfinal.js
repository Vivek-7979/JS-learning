// Destructuring 


const course ={
    coursename:"love education",
    price:"10k",
    courseinstructor:"vivek"

}

console.log(course.courseinstructor)  // correct way but it is old .

const { courseinstructor: inst} = course // from course object the name of courseinstructor key that is very large is deconstructed into = inst
console.log(inst)                        // Answer will be same


// API returns the value in JSon format . 

// JSON(javascript object notation) format = 
// { "key": "value"}
//   The only diff between the json and object is that the key is also written inside the string in JSON .

// The API can also return the value in array format where the array contains many other objects inside it.
//like:
// [ {}, {}, {},{}]








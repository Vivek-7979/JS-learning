// Destructuring 


const course ={
    coursename:"love education",
    price:"10k",
    courseinstructor:"vivek"

}

console.log(course.courseinstructor)  // correct way but it is old .

const { courseinstructor: inst} = course // from course object the name of courseinstructor key that is very large is deconstructed into = inst
console.log(inst)                        // Answer will be same



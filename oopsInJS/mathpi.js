// this is a very advanced topic . like :- SD2(Senior developer level - 2) to SD3 level question 

// Question :- Is that as we know the value of pi in math library in js is 3.143.. .   Can we change it ??




console.log(Math.PI);     // universal coanstant value

Math.PI = 5              // Ithe mein PI di value change krna chah reha . But , eh overwrite hoi hi nhi .
console.log(Math.PI);  

console.log(Math); // {}  =  empty object 


const descipter = Object.getOwnPropertyDescriptor( Math , 'PI')   // Math de vicho pi di property di description de deni ihnee
console.log(descipter);    // Output : writiable = false , enumerable(loop lagana/iteratable) = false , configured = false

// NOTE :- So , basically we cannot change the value of pii . As it is hard-coded
//         But , we can also set the description of the objects that are defined by us ...


// Example : Where the property of the object ( like - writable(change krna/overwrite) , enumerable(loop lagna / iterate) , configurable ) is manipulated .

const user = {                      // created a object
    username : 'vivek kumar',
    price : 250,
    isAvailable : true
}

console.log( Object.getOwnPropertyDescriptor( user , 'username' ))  // It tells that what properties does our object 'user' have . like - writable , enumerable(loop lagana) and configurable .
//   output => writiable : true , enumerable : true , configurable : true


Object.defineProperty( user , 'username',{  // now we Manupulated the properties of the 'user' object

    writable:false,           // Now , the object is not writable(mmodify ni kar sakde username/change)
    enumerable : false ,      // And , enumerable = iterate bhi nhi kar sakde
})

console.log(Object.getOwnPropertyDescriptor( user , 'username'));
// Hun , user object di vich key-value username di default property change ho gyie bhii ...
// output =>  writable : false 
//            enumerable : false 
//            configurable : true

// NOTE : Hun apa na hi modify kr skde username nu (writiable : false) and na hi loop laga skde is pr ( iterate / enumerable ).

/*    user = object
      username = property / key 
      'vivek' = value
                                                     */


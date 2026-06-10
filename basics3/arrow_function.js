// to understand the arrow function we have to inderstand the :-
// 1.] Context : it is the whole data/value in the scope/code.    [ kis baare mein]
// 2.] this : It refers to the current context

const user= {
    username='vivek',
    age=20,

welcomeMessage: function(){
    console.log(`${this.username} , welcome to kamababa`)    // this is referring to the current context .

    console.log(this); // It will print the current context (all data inside this scope)

}

}


console.log(this);             // It will return the empty object ; as global variable has nothing    NOTE : (but when we run js in browser it returns = window(as global object)). 


// this works inside the objects only and not inside the functions(indpendent f(x))  /   Works inside the function that is being called by the object .    

/*            We also cannot use the `this` inside the arrow function .              */


/*              syntax of arrow function:   () => {}                  */

const variableName = () => {

// Code of Arrow function

}


// 1.] First way of arrow function : Explicit arrow function

const variableName =() => {    
    // here we have to write the "return"
}




// 2.] Second way :  implicit arrow function

const variable = () => ( { object : " value of object " } )       /* here we dont have to write "return keyword" */

/*  mainly :vThe implicit f(x) is used to return the object    */







// USE "${this.username}"  when we want to access the object (it's properties)  inside the object method .
// and use "${username}"  when we have normal variables , if-else , f(x) .... (i.e.   It is inside the that scope )

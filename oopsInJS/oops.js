// object literal ( mtlb literally a object) = >  It is the base unit of the oops .



//  context =>   chiza/stuff/saman     ;  current context = hun/eh  chiza di gal kr reha ( this keyword dasda current context baare) 
//  current context => this    ( eh wali chiza di gl kr rehe )



const user = {
    username : 'vivek', 
    logInCount : 8 ,          // properties
    signedIn : true ,

    method1 : function(){                          // method
        console.log('got user details from db');
        console.log(this);                       // this =>  It tells about the current context(upar ho bhi data hai apne kol saara ) . like : { username, isloggedin , signedIn + method1} 
    }
}

console.log(user.username);      // accessing property
console.log(user.method1());     // accessing the method inside the object 



/* ++++++++++++++++++++++++++++++++++           VERY IMPORTANT           +++++++++++++++++++++++++++++++++++             */
                          
// new = constructor function ( to create a new context/space for that item ( object,function etc.)  )
//       when we write the new it calls a constructor function . That automatically creates a empty object for that item ( can be object , function , variable , promise etc)  .  { New = independent item hai eh }  


// this = jisne bhi bulaya usda kaam krdo ; kisda kaam karna oh dsda this ( isda )


//  JS has " prototyple behaviour "  => matlab js all elements (every element is object in js) are interlinked with each other through a chain of linked prototype ... { enaling inheritance and memory efficiency} .. { je kuch na mile js nu upar oth upar jayie jana . parent -> grandparent -> further...}

// like :-            Array    ->      Object   -> null
//                                 /
//                                /       ^
//                    function   /        |
//                                      String

/*  Every elements in js is technically object . like - they are pointing to the object (parent) . So , they also gets the property of object             */



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
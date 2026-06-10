// truthy = we assume that these values are true by default ( sanu dasna ni penda )
// falsy = assumed that these values are false by default 


example :

let username = "vivek"

if (username){                                        // here , we don't check the username condition . It is assumed that if something is in string then it is true . i.e. Truthy value
    console.log(" We have data ")
}
else { console.log(" We don't have the data ")}




/*                            ALL TRUTHY AND FALSY VALUES  : 

FALSY VALUES : false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 
TRUTHY VALUES : [] , "any string" , "0" , "false" , "  " , {} , function () {}                        { empty string with space is also a truthy value }                           */              



// Note : 0 == false   is true      ;   0==''         is true          ;   false == ''      is true .
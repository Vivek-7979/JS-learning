// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// here ; these are vey basic comparisons and the output will be boolean (0 or 1).



/*But ; the real issue arises when we compare the different data types . 
Then in this case the answer in very uncertain / undpredictable . So , avoid comparing values of diff data types.*/
//  like : 

// ********************** We should avoid these types of comparisons ******************

console.log ("2">1);
console.log("0.2">1); 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // here answer is true which means these comparisons are unpredictable.

// ===   It also checks the value + data type also . 

console.log("2"===2);




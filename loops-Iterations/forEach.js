//         very very very important           :    as this is very commonly used in database toh jado apa data lende
//         because = data comes in object form ,


//     [ "" , "" , "" ]         simple form
//     [ {} , {} , {} ]         JSON form = array de andar different objects aunde ( actual real life data comes in this form )


const dataBase =[ { FirstName : 'vivek', lastName :'sharma'} ,                // first object
                  { FirstName : 'abhishek ' , lastName : 'Sahore'},           // second object
                  { FirstName : 'sahas' , lastName : 'chandan'}               // third object
]



dataBase.forEach( (values) => { console.log(values)})                                               // accessing the  whole data / values ( it prints all key and values )
dataBase.forEach((values) => { console.log(` First Name is :- ${values.FirstName}`)})               // accesing only first name               
dataBase.forEach((values) => { console.log(` Last Name is :- ${values.lastName}`)})                // accessing only the last name for database

/*     BUT THIS FOREACH LOOP METHOD DOESNOT RETURN ANYTHING (is just simply prints all). SO , IF WE WE WANT TO DO SOME OPERATION ON THE ITEMS OR APPLY SOME CONDITION WE CAN DO SO with for each . but , it is " complex "   */

// Simply : for each doesnot return any values ; so we cant use it if we want to do some operations{it can be done but with if statement}

//   for this return we use = "    filter ()   "   . filter = filter karke dena data database vicho simply .....


const Numbers = [  1, 2 ,3 ,4 ,5 , 6 , 7 , 8 ,9 ,10] 
                                                
const NewNumbers = Numbers.filter( (nums) =>  {  return nums > 5 }  )   // Note :   here , we have to manually write the return keyword to return the values . if we are using the scope 
console.log(NewNumbers)   // or  ( ( nums ) => nums  > 5 )





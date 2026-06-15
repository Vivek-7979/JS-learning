// for of :   this is a very easy syntax loop


// syntax :    for ( const variableName of object(mtlb anything/kya hai/varivale name that is declared)){
//                        // code to execute 
//                                 }




const namaste = 'namaste sir ji'
for (const namasteBulana of namaste) {
    console.log(`each char is ${namaste}`)
    
}





// Map = it is a data-structure in the javascript .That keeps the pair of key and values in order and also has unique value(doesnot show duplicate value by its own)

const map = new Map()

map.set('PB','Punjab')
map.set('PB','Punjab')
map.set('UP','UttarPardesh')
map.set('HR','Haryana')
map.set('RJ','Rajasthan')

console.log(map)                     // simply prints the wholw map

for (const [key,value] of map ) {     // the key & values as diff. in for of loop only works for maps and not in objects in this way 
    console.log( key , ':-', value)   /* prints value and keys differently but only for arrays */
    
}

/*for of loop : works on maps , arrays but doesnot works on objects . So for objects we have for in loop*/

// 2.] for in loop 

const objectName ={
    HTML :'hyper text markup language',
    CSS :'cascading style sheet',
    js:'javascript',
    MERN:"mongoDB Express React Node"
}

for (const key in objectName) {
 //   console.log(key)                 // It prinnts only the keys of the object 
 //   console.log(objectName[key])     // It print only the the values of the key of the object

   console.log(`This is the key :- ${key} || and this is the value :- ${objectName[key]}`)

}

// On arrays we can also similarly use the for in loop ... But , for maps() for in dont works (it have some other methods)


/* +++++++++++++++++++++++++++++++++++ IMPORTANT LOOP : for-each loop   ( mostly used on the arrays) +++++++++++++++++++++++++++++++++++++++++++++++ */

// The foreach loop is the inbuilt method in the arrays data type to apply loop on the all the items of the array

// syntax : arrayName.foreach ( function () { work to do [like - printing]})

let arrayName = ['html', 'css', 'js' , 'react.js' , 'MERN stack', 'MEAN stack']

arrayName.forEach(function (ItemsinArray){ console.log(ItemsinArray) })           // Here , we dont write name of function , in paramters we give the variable name for items of array and in scope{} we do the task .
                                                                                  // This , is the 1 way of using this method 

arrayName.forEach( (values,index,arr) => {console.log(values,index,arr)})      // WE CAN ALSO ACCESS THE INDEX AND WHOLE ARR         // 2nd way = Writing the arrow function (but don't write name of f(x) as we don't have to store it anywhere)


// 3rd way = declaring a function and then calling it inside the for loop

function ItprintValues (values){        // declaring a f(x) that do some task
console.log(values)
}
arrayName.forEach(ItprintValues)       // Giving reference of the f(x)

/*                         ALL THERE METHODS DOES THE SAME TASK , JUST THE DIFF LIES IN HOW THEY ARE WROTE                      */



//   .map(), .filter() , .foreach() etc are all in-built method(inside prototype) the array data-structure .
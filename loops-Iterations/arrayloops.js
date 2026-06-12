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
    console.log( key , ':-', value)   //   prints value and keys differently but only for arrays
    
}



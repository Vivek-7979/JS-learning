//   for loop  
// for ( intialization , condition checking , work to do )


 // We cant access the variable/anything of this loop outside the for loop (due to scope).
for (let i = 0; i <= 10; i++) {      
    const element = i;
    console.log(element)
} 



// loop de andar = if-else bhi ho sakda , ya loop de andar loop bhi ho sakda

// loop de andar loop : 

for (let i = 0; i <= 10; i++) {
    const element =i;
    console.log(i)
    for (let j = 0; j <= 10 ; j++) {
        const element = j;               //     0 to baad 1-10 auna ; fir 1 auna fir us toh baa 1-10 auna ; then 2 firr 1-10 and so on ............
        console.log(j)
        
    }
    
}



/* loop de andar loop : First line = table of 1
                                    Then , whole table of 1
                        Second line = This is table of 2 
                                      then , actual whole table of 2 

                        ...... and so on 
                        ....
                        ....                                                                  */
                        
//                           All table of 1 to 20     ( ikathe ohi ....)

for (let i = 1; i <= 20 ; i++) {
    const element = i ;
    console.log(`This is the table of ${i}`)

    for (let j = 1; j <= 10 ; j++) {
        const element = j;
        console.log(i + '*' + j  + '=' + i*j)
        
    }
    
}


// There are two special key words in for loop = 1. break   2. continue 

//      break = stops the whole code 
//      continue = gives one chance to run the further code with skipping the current state




for (let i = 1; i <= 20 ; i++) {
    
    if(i==5){
        console.log("5 is DETECTED")
        break                           // We came out of the loop
    }    
    console.log(i)
}

for (let i = 1; i <= 20 ; i++) {
    
    if(i==5){
        console.log("5 is DETECTED")
        continue                       // skips the current item(or state) and executes the next code normally 
    }    
    console.log(i)
}



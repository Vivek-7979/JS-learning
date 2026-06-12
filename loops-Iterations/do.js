//    while loop             :  while this condition do this task

/*
            syntax :   
                       while(condition) {
                       // do this 
                               }  
                       
                       Intialization , condition , kaam kya karvana    { eh taah har kisi loop vich hi hona...}        */


// LIke : printing the all items of the array with do while loop

                       let array =[ 'vivek', 'abhi', 'sahas' , 20]
                       let arr = 0

                       while (arr < array.length) {
                        console.log(` The data is ${array[arr]}`)
                        arr = arr +1
                       }




// 2.] do-while loop :  do this whilw this condition occurs (ik baar taah karna ohi ga kaam - ho hi jana jo do andar likhya wa)
// But ; is very less commonly used ..


let score = 100

do {
    console.log(`score is ${score}`)
    score = score + 100
}
while(score<=1000);





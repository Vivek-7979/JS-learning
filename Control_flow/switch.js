// Switch statement is also used in js to contorl the flow of code execution in js .

/*


Syntax :

 switch (key) {
    case value:
        
        break;

    default:
        break;
}                                      */


        // Like : we have to check multiple values conditions .

const month = 1      // we can change the value of let variable in future but we can never change the vallue of const.

        switch (month) {
            case  1 :                        // 1 = value of month 
                console.log("january")
                break;                    // it breaks the flow of statement and next lines will not be executed . If , I not write the break then it will execute all the next lines of code { Except : the default code }
        
case  2 :
 console.log("feb")
  break; 

  case 3:
  console.log("march")
   break; 

   case 4 : 
    console.log("april")
    break; 
      

// And so on upto december (12)

            default:
                console.log("Please enter a valid month")
                break;
        }
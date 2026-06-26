/*  getter & setter f(x) =>1.] They are used where , when someone asks to access the property of class/object form outside of class/object and we don't want to give the complete access of it . Or give it in some other form ( like - encrypt krke ) then they are used
                           2.]  By default the getter and setter f(x) is already available in 'class/object' . But , as we don't use it / defined them . Their default behaviour stays in the class/object .    
                           3.]   getter and setter are applied on the specific property of the class / object .
                           4.]  If someone want to get the password  the getter function works . And if someone want to set/modify the password setter f(x) is used.
                           5.] If once the getter f(x) is used . Then , it is compulsory and very important to also declare the setter f(x) .               
                           6.] jado apa get and set f(x) call kar dite na property di value nu  acess/set karan vaste taah  teh fir ohi run hone class ch ...      
                           7.] Syntax : get propeertyName(){}    set propeertyName(){}                                                                               */   

class user {                          // creating class
    constructor(email,password){      
        this.email = email;          // setting email property/key of class
        this.password = password     // setting password property
    }

get password(){                                    // if someone wants to get/access the password(property)
    return `${this._password.toUpperCase()}xyz`    // pass teh mil gya but encrypyt(change) hoke . As , pass piche xyx likh ke auna har ik de .(set wala variable hi use hona ithee)
// get ch return krna hunda
}

set password(value){                 // setting the value of the property(password) .But , the constructor also setting the value ( to avoid this change the name of password variable )
    this._password = value           // hun eh code line vich awe ga kii .. jadao teh apa get karna password taah teh sanu change hoi bhi dikhni . But , set karne pr oh password same hi rehna jo haiii ....
// set ch return ni karna hunda
}
// value store teh 'abc' hi ho rehi . But , jado ohnu koi access kr reha / get taah oh kuch hor hi dekh reha ...
}


const user1 = new user('vivek@ig.com', 'abc')
console.log(user1.password);                     // apa dekhna chaunde/get krna chaunnde ki pass ki ga(jad ki pass store  ohi rehna 'abc' user vich  but dikhna ABCxyz ga )


//  console.log(user1.password = 'vivek');     // But , je apa store kriye/modify teh eh navi hi store ho gyie
// console.log(user1.password);                // output : VIVEKxyz , pass modify ho gya but encrypt hoke show hona sanu ... store teh password = ' vivek ' hi hoyaa...





/*      getting and setting on  object          */

const users = {
    _email: 'abc@.com',
    password : 'abc',

  get email(){
    return this._email.toUpperCase()
  }  ,

  set email(value){
   this._email = value
  }
}

console.log(users.email);

/*             +++++++++++++++++++++++++++++++++   SUMMARY ++++++++++++++++++++++++++++++++++++++++++++

Summary :1.] U can set or get the value/property . But , the setter and getter tells that whether it should make the change happen or not 
         2.] Setter / getter is like the secuirty guard of the bank locker . You can go inside the locker { But the guard will they that - whom i will allow , what to show ,whether to reject }

         3.]  When we say that we can't directly access the value : 1.] MAtlab hoke tuci getter or setter vicho hi jana (direct pass,email pr ni chal jana tuc)
                                                                    2.] Every read goes through getter . And every write goes through setter .


         FINALLY  :  A.]  get and set value apa property di fer bhi kar skde bs gl ihni kr a ki .. oh jehra bhi get ya set kaam hona oh getter and setter false(x) vicho hoke jana .
                          Set teh apa fer bhi kar skde value . But , sanu setter f(x) vicho hoke jake set krni peni ( Like - password set karna apa koi                                                       
                                                                                                               (        Apa condition lagaie setter vich ki je oh 8 character da hoya tah hi set hona
                                                                                                               (        Hun koi banda aya ohne bs 4 chr pa dite oh set ni hona . { hun bnde ne try teh kiti c set krne di but setter ne hon ni dita }

                    B.]  Get apa fer bhi kar skde value ( setter and getter da mtlb eh nhi ki hon hi nhi dena kuch) . Isda da mtlb eh hai ki ihna vicho hoke jana jo jana . Fer setter , getter ch define hona kya hona chaida ya nhi.
                         like : Apa get karni koi value ( hun apa kr teh skde ) but through get f(x) . Hun sade pr a apa ohnu value ki deni {encrypt krke , change krke show krni ya karni hi nhi ( mtlb limited access kr dena - apne upr hai ..)}                     */                                                                                            
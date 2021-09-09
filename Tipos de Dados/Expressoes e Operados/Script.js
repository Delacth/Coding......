//! New 

/*
let User = new String('Henrique');
User.Apelido = 'Mendes';

console.log(User);
*/

//! delete

let User = {
    name : 'Henrique',
    surname : 'Mendes',
    age : 18,
}

console.log(User);
delete User.surname
console.log(User);

let number = 19

 number < 19 ? number += 1 : number -= 1;
 console.log(number);

 let UserFree = new String('kiko')
 UserFree.surname = new String("PAto")
 console.log(UserFree);

for (let key in UserFree) {
   console.log(key);
}
 
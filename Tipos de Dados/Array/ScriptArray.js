
let number = [1,2,3,4,5];
const nameUser = ['Ursula', 'Micheal', 'Melva']
let newArray = [];

/* Concat
O Concat concatena 2 ou mais array
 
newArray = number.concat(nameUser)
console.log(newArray);
*/

/* Every

    O Every percorre todo o Array 
    e se usado com uma funcao ele pode percorrer o array e retornar 
    a uma operacao booleana 

    const userSkill = [{name : 'Henrique'},{idade: 18},{Skills : ['C#','JS']}]

let finder = userSkill.every(
    function verifyIFhaveObject(params) {
        return (typeof params == 'object')
    }
)
console.log(finder)

*/ 


/* Filter 
    A metodo Filter ele filtra o array e pode ser usada com uma funcao
    boleana

    Um bom exemplo e usar o filter para filtrar os numero maiores de 
    3

    let allnumber = [1,2,3,4,5]

let filterNumber = allnumber.filter(
    function filterALL(args) {
        return (args > 3)
    }
);

console.log(filterNumber);
*/

/* IndexOf
    ele procurar o valor no array e retornar a posicao do valor

    let pup = [1,2,3,4,5,'kiko']

var x = pup.indexOf('kiko')
console.log(x);

 */

/* Last IndexOF 
    Faz a mesma coisa que o IndexOf
    const abcedario = ['a','b','c','d','e','f','g','h','i','j','k']

let last = abcedario.lastIndexOf('d')
console.log(last);

*/

/* JOIN

    Esse metodo transforma um array em String
    const abcedario = ['a','b','c','d','e','f','g','h','i','j','k']

let count = abcedario.join(' - ')
console.log(count);
 */




/* MAP 
    o metodo Map ele manipula os valores enseridos no array
    Podendo somar,divir,multiplicar,etc como o valor final

    const abcedario = ['a','b','c','d','e','f','g','h','i','j','k',1,2,3,4,5,6,7,8,9]
let alfa = ['a','b','c',4,5,6]
let newArr = []

abcedario.map(
    function Filter(args) {
        if (typeof args == 'number') {
          newArr.push(args*2)
        }else{
            newArr.push(args)
            
        }
          
    }   
)

console.log(abcedario);
console.log(newArr);
 */





/* POP e PUSH
 Pop elimina o ultimo valor do Array
 Push adciona um novo valor no final do Array

 const Putas = ['Marta', 'Serafina','Marcia']

let NewA = Putas.pop()

console.log(Putas);
console.log(NewA);


*/


/*
 Reverse
 
 Esse metodo tem a funcao de reverter a posicao dos valores no arry
 */

 let abc = ['a','b','c',]
 
 console.log(abc);
 console.log(abc.reverse());
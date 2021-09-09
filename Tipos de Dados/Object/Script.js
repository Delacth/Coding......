

let Pessoas = {
    nome : 'Henrique',
    idade : 18,
    Animal : ['Akamaru', 'Rufus','Spike','Seick','Preta'],


};


/*
    Podemos utilizar as funcoes 
    Object.entries()
    Object.values()
    Object.key()

    para manipular os objectos
 */

//console.log(Object.entries(Pessoas));

Object.entries(Pessoas).forEach( ([key, values]) =>{
    
    console.log(key , values);
})
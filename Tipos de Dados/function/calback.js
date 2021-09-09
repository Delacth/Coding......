// CALLBACK

 function mediaUSER(args) {
     console.log('A media dos meus user e de 37 anos')
        if( args() == undefined){
            args('kiko')
        }else{
            console.log(args());
        }


 }

 mediaUSER(
     function args() {
       
     }
 )

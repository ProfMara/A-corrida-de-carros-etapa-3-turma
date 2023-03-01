class Player{
    constructor(){
        
    }


    
    getDistance(){
        database.ref("players/player" + this.indice).on("value", data=>{
            var data = data.val();
            this.posicaoX = data.posX;
            this.posicaoY = data.posY;
        })
    }


    //atualiza o campo no banco de dados
    updateCount(numero) {
        database.ref("/").update({
            playerCount:numero
        })
    }

    //lê do banco de dados e copia
    getCount(){
        database.ref("playerCount").on("value", function(data){
            //toda vez que tiver uma alteração, isso será lido
            playerCount = data.val();
        })
    }
    

}
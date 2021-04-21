class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
        this.lastCar=null;
    }
   getCount(){
    var playerRef=database.ref("PlayerCount")
    playerRef.on("value",function(data){
        playerCount=data.val();
    })  
    }
    updateCount(count){
    database.ref("/").update({
        PlayerCount:count
    })
    }
    update(){
    
     var updateVal="Players/Player"+this.index;   
     database.ref(updateVal).set({
         Name:this.name,
         Distance:this.distance
     })
     
    }
   static getPlayerInfo(){
    var PlayersRef=database.ref("Players");
    PlayersRef.on("value",(data)=>{
        allPlayers=data.val();
    })
    }
     getCars(){
        database.ref("lastCar").on("value",(data)=>{
            this.lastCar=data.val();
        })
     }
     
    static  updateCars(rank){
        database.ref("/").update({
            lastCar:rank
        })
     }
}
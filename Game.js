class Game{
    constructor(){

    }
    getState(){
    var gameRef=database.ref("GameState")
    gameRef.on("value",function(data){
        gameState=data.val();
    })
    }
    update(state){
        database.ref("/").update({
            GameState:state
        })
    }
   async start(){
    if(gameState===0){
        player=new Player();
        var playerCountRef=await database.ref("PlayerCount").once("value");
        if(playerCountRef.exists()){
            playerCount=playerCountRef.val();
            player.getCount();
        }
        
        form=new Form();
        form.display();
       
    }
    car1=createSprite(200,300);
    car1.addImage(c1Image);
    car2=createSprite(400,300);
    car2.addImage(c2Image);
    car3=createSprite(600,300);
    car3.addImage(c3Image);
    car4=createSprite(800,300);
    car4.addImage(c4Image);
    
    
    
    allCars=[car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(20);
        fill("red");
        text("Game Start",250,50);
        Player.getPlayerInfo();
        player.getCars();
        
        if(allPlayers!==undefined){
            //textSize(12);
           
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=0;
            var y;
            
           // var playerY=65;
            for(var i in allPlayers){
              index+=1;
              x+=300;
              y=displayHeight-allPlayers[i].Distance;
              allCars[index-1].x=x;
              allCars[index-1].y=y;  
              
            if(index===player.index){
               // allCars[index-1].shapeColor="blue";
               fill("cyan")
               ellipse(x,y,65,100);
                camera.position.x=displayWidth/2;
                camera.position.y=allCars[index-1].y;

                //stroke("grey");
            }  

            
           
              
        
            
            //playerY+=20;
            //text(allPlayers[i].Name+":"+allPlayers[i].Distance,30,playerY);
           
            }
            
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=10;
            player.update();
        }
        if(player.distance>4000){
            gameState=2
            player.lastCar+=1;
            Player.updateCars(player.lastCar);
           
        }
        drawSprites();
    }
    end(){
        console.log("Game End");
        console.log(player.lastCar);
    }
}
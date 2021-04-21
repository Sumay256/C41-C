var  database;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;
var form,player,game;
var car1,car2,car3,car4;
var c1Image,c2Image,c3Image,c4Image;
var trackImage;
var allCars;
function preload(){
c1Image=loadImage("bCar.png");
c2Image=loadImage("rCar.png");
c3Image=loadImage("blCar.png");
c4Image=loadImage("wCar.png");
trackImage=loadImage("track.jpg");
}
function setup(){
  database = firebase.database();
  //console.log(database);
  createCanvas(displayWidth-22,displayHeight-140);
  game=new Game();
  game.getState();
  game.start();


 
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
 // console.log(player.distance)  
    

}



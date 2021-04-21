class Form{
    constructor(){
this.input=createInput("Name");
this.button=createButton("Play");
this.greeting=createElement("h5");
this.title=createElement("h3");
this.reset=createButton("Reset")
    }
    display(){
    
    this.title.html("Car Racing Game");
    this.title.position(displayWidth-1000,displayHeight-500);
  
    this.input.position(displayWidth-1000,displayHeight-550);
    this.button.position(displayWidth-850,displayHeight-550);
    this.reset.position(displayWidth-100,displayHeight-550)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playerCount++;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello "+player.name);
        this.greeting.position(250,200); // Fix
    })
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
    })
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }
}
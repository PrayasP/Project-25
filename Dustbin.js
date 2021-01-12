//Dustbin Class
class Dustbin{
    constructor(){
        var options = {
            isStatic: true
        }
        this.rec1 = Bodies.rectangle(907,560,20,190,options)
        this.rec2 = Bodies.rectangle(960,655,150,20,options)
        this.image = loadImage("dustbingreen.png");
        this.rec3 = Bodies.rectangle(1015,560,20,190,options)
        this.rec1.width = 20;
        this.rec1.height = 190;
        this.rec2.width = 100;
        this.rec2.height = 20;
        this.width = 140;
        this.height = 200;
        this.rec3.width = 20;
        this.rec3.height = 190;
        World.add(world,this.rec1);
        World.add(world,this.rec2);
        World.add(world,this.rec3);
        
    }

    display(){
        var pos1 = this.rec1.position;
        var pos2 = this.rec2.position;
        var pos3 = this.rec3.position;        
        rectMode(CENTER);
        fill("white");
        stroke(0);
        rect(pos1.x,pos1.y,this.rec1.width,this.rec1.height);
        rect(pos2.x,pos2.y,this.rec2.width,this.rec2.height);
        rect(pos3.x,pos3.y,this.rec3.width,this.rec3.height);
        image(this.image,pos2.x+1,pos2.y-90.5,this.width,this.height);
    }
}
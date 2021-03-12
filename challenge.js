class Challange{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.width=1000;
        this.height=390;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height);
        this.image=loadImage("Images/Challenge (1).png");
        World.add(world,this.body);
    }
    display(){
        var posBody=this.body.position;
        push();
        rectMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }
}
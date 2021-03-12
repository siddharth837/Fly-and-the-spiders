class Play{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.width=50;
        this.height=30;
        this.play=Bodies.rectangle(this.x,this.y,this.width,this.height);
        World.add(world,this.play);
    }
    display(){
        var posPlay=this.play.position;
        push();
        rectMode(CENTER);
        fill("red");
        stroke("red");
        rect(this.x,this.y,this.width,this.height);
        pop();
    }
}
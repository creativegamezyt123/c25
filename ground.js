class ground
{ 
    constructor(x,y,width,height)
    {
     var options ={
         restitution:0.3,
         friction:0.5,
         density:1.2
     }
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(this.x,this.y,width,height,options)
    World.add(world,this.body);
    }  
    display()
{
    var paperpos = this.body.position;
    
    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255);
    rect(this.body.x,this.body.y,width,height);
    pop()
}
}
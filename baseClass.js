class baseClass{ 

    constructor(){

    }

display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    pop();
}
}
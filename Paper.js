class Paper{
    constructor(x,y){
        var options ={
            density:1.2
        }
    
        this.body= Bodies.circle(x,y,20,options);
        World.add(world,this.body);
        this.radius=20;
        
    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}

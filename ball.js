class Ball{
    constructor(x,y,radius)
    {
        var options={
            'restitution':1.0,
            'friction':1.0,
            'density':1.0,
            
        }

        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius=radius;
        this.image=loadImage("polygon.png")
    }

    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,20,20);
    }

}
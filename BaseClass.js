class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.box = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         World.add(world, this.box);
      }
      display(){
        push();
        strokeWeight(1.5);
         rectMode(CENTER);
        rect(this.box.position.x,this.box.position.y, this.width, this.height);
        pop();
      }
}
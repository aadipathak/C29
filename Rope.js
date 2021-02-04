class sling{
    constructor(bodyA,pointB){
    var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10

        
    }
   
    this.pointB = pointB;
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    }
    launch(){
        this.chain.bodyA = null
    }
    Attach(body){
        this.chain.bodyA = body
    }
    display(){
        

        if(this.chain.bodyA){
            strokeWeight(3);
            stroke(48,22,8);
            if(this.chain.bodyA.position.x<220){
            line(this.chain.bodyA.position.x-20, this.chain.bodyA.position.y, this.pointB.x-10, this.pointB.y);
            line(this.chain.bodyA.position.x-20, this.chain.bodyA.position.y, this.pointB.x+30, this.pointB.y);
            image(this.sling3,this.chain.bodyA.position.x-30,this.chain.bodyA.position.y-10,15,30);
            }
            else{
                line(this.chain.bodyA.position.x+20, this.chain.bodyA.position.y, this.pointB.x-10, this.pointB.y);
            line(this.chain.bodyA.position.x+20, this.chain.bodyA.position.y, this.pointB.x+30, this.pointB.y);
            image(this.sling3,this.chain.bodyA.position.x+30,this.chain.bodyA.position.y-10,15,30);
            }
        }


    }
}
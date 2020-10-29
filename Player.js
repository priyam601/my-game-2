class Player{
    constructor(x,y,width,height,velocity){

        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:false
        }

        this.player = Bodies.rectangle(x, y, width, height,options,velocity);
        this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
        this.velocity = velocity
        

        World.add(world, this.player);
     }

    display(){
        var pos=this.player.position;		
        var velocity = this.velocity;
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       //strokeWeight(4);
       fill("white");
       rect( 0, 0, this.width, this.height);
       pop()
     }

}

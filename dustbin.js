class dustbin
{
    constructor(x,y,width,height){
    var options={
        'isStatic':true
    }
    this.body1 = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body1);
    this.body1.width = width;
    this.body1.height = height;
    }

    display(){
        fill("yellow")
        rect(this.body1.position.x,this.body1.position.y,this.body1.width/2);

    }
};
class Box {
  constructor(x,y,width,height) {
    var options = {
        restituition:0.4,
        friction:0.1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    //this.Visibility=0
  }
  display(){

    var pos =this.body.position;
    var angle =this.body.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();

    //if(this.body.speed<3){

   //World.remove(world,this.body);
    //tint(0, 153, 204);
  //}
}
};

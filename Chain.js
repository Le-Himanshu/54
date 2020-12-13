class Chain{                    // class Pen{
constructor(mybodyA,mybodyB){   // constructor(usercolor)

    var options = {
        bodyA : mybodyA,    // this.color = usercolor
        bodyB : mybodyB,
        stiffness: 0.04,
        length:10
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);

}
display(){
    strokeWeight(3);
    line(this.chain.bodyA.position.x , this.chain.bodyA.position.y , this.chain.bodyB.position.x, this.chain.bodyB.position.y);


}
    
}
 
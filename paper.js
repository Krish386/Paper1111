class Paper
{
 constructor(x,y,width,height)
 {
var options={
  isStatic:false,restitution:0.3,friction:0.5,density:1.2

}
this.body=Bodies.circle(x,y,20,options);
this.width=width
this.height=height
World.add(world,this.body)
 } 
 display()
  {
    var pos=this.body.position 
    ellipseMode(RADIUS)
    fill("green")
    ellipse(pos.x,pos.y,20,20)
    

 
   
 }

}
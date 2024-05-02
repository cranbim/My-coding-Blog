let firework

function setup() {
  createCanvas(400, 400);
  //p=new Particle(200,200)
  
}

function draw() {
  background(0, 10);
  if(firework){
    firework.update()
  }
}

function mousePressed(){
  firework=new Firework(mouseX, mouseY, random(2,200))
}

class Firework{
  constructor(x,y,n){
    this.p=[]
    this.numParticles=n
    for(let i=0; i<this.numParticles; i++){
      this.p.push(new Particle(x,y))
    }
  }
  
  update(){
    // this.p.forEach(function(thingy,i){
    //   if(thingy.update()){
    //     thingy.show()
    //   } else {
    //     // remove it
    //     this.p.splice(i,1)
    //   }
    // })
    
    for(let i=this.p.length-1; i>=0; i--){
      if(this.p[i].update()){
        this.p[i].show()
      } else {
        // remove it
        this.p.splice(i,1)
      }
    }
    fill(255)
    text(this.p.length,20,20)

  }
}


class Particle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.a=random(TWO_PI)
    this.speed=random(2.5,4.5)
    this.fall=0
    this.gravity=0.05
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
    this.lifeSpan=60
    this.ttl=this.lifeSpan
  }
  
  update(){
    this.x+=this.moveX
    this.y+=this.moveY
    this.y+=this.fall
    this.fall+=this.gravity
    this.ttl--
    return this.ttl>0
  }
  
  show(){
    fill(255*this.ttl/this.lifeSpan,0,200)
    noStroke()
    ellipse(this.x, this.y, 5)
    
  }
}
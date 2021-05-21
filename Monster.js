class Monster {
  constructor(x,y,width,height)
	{
		var options = { 
      density: 2, 
      frictionAir: 0
    };
	    this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
		this.image=loadImage("images/Monster.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,150, 150)
			pop()
			
	}
}

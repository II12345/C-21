var movingrect,fixedrect
var rect



function setup() {
  createCanvas(800,400);
  movingrect= createSprite(200,100,40,30);
  movingrect.shapeColor="red"
  fixedrect= createSprite(100,300,50.20)
  fixedrect.shapeColor="red"
rect=createSprite(300,100,20,40)
rect.shapeColor="green"

}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX
  movingrect.y=mouseY
if(isTouching(movingrect,rect))
{movingrect.shapeColor="blue"
rect.shapeColor="blue"
}
else{movingrect.shapeColor="red"
rect.shapeColor="green"
}




  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2) 
    {return  true;


    }
    else{return false;

    }
}

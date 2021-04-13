var dog,happydog,foodS,foodStock;
var dogImage1;
var database;
function preload()
{
dogImage1 = loadImage("images/dogImg.png");
happydog = loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStocks);

	createCanvas(500,500);
  
  dog = createSprite(250,250);
  dog.addImage(dogImage1);
  dog.scale = 0.3;
}


function draw() {  
background("yellow");

text("Note-PRESS UP_ARROW KEY TO FEED DRAGO MILK" ,100,50);

if(keyWentDown(UP_ARROW)){
writeStocks(foodS);
dog.addImage(happydog);
}
else  if (keyWentUp(UP_ARROW)){
dog.addImage(dogImage1);
} 



  drawSprites();



}
function readStocks(data) {
foodS=data.val();
} 

function writeStocks(x){
if(x<=0){
x=20
}
else{
x=x-1
}

database.ref('/').update({
Food:x
})

}


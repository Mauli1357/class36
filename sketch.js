var form, database;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  form = new Form()
  form.display()
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}


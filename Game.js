var Game =
{
  c : document.getElementById("canvas")
};


/**
 * Variables
**/

var ctx = Game.c.getContext("2d");
var index = 0;
var start = 0;
var end = 0;
var x = 0;
var y = 300;
var vx = 0;
var vy = 0;
var img = new Image;
var ground = new Image;
var down = false;

img.src = "res/test.png";
ground.src = "res/grass.png";


/**
 * Game Logic
**/

img.onload = function(){
  run();
  setInterval(function() {
    animate(start, end);
}, 140);
};

document.addEventListener('keydown', function(event) {
    if(down == false)
    {
      if(event.keyCode == 37) { //left
          vy = 0;
          vx = -1;
          index = start = 2;
          end = 4;
      }
      if(event.keyCode == 38) { //up
          vx = 0;
          vy = -1;
          index = start = 8;
          end = 10;
      }
      if(event.keyCode == 39) { //right
          vy = 0;
          vx = 1;
          index = start = 5;
          end = 7;
      }
      if(event.keyCode == 40) { //down
          vx = 0;
          vy = 1;
          index = start = 0;
          end = 1;
      }
       down = true;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37 || event.keyCode == 39) {
        vx = 0;
    }
    if(event.keyCode == 38 || event.keyCode == 40) {
        vy = 0;
    }
    down = false;
});

function animate(start, end)
{
  if(down == true)
  {
    if(index < end)
    {
      index = index + 1;
    }
    else
    {
      index = start;
    }
  }
}

function update()
{
  if(x >= 0 && x <= 468)
    x+=vx;
  else if(x <= 0)
    x = 1;
  else if(x >= 468)
  {
    x = 467;
  }
  if(y >= 0 && y <= 468)
  y+=vy;
  else if(y <= 0)
    y = 1;
  else if(y >= 468)
  {
    y = 467;
  }
}

function render()
{
  ctx.drawImage(ground,0,0,598,458,0,0,500,500);
  ctx.drawImage(img, 32*index, 0, 32, 38, x, y, 32, 38);
}


/**
 * Game Loop
**/


function run() {
    var frameId = 0;
    var lastFrame = Date.now();

    function loop() {
        var thisFrame = Date.now();

        var elapsed = thisFrame - lastFrame;

        frameId = window.requestAnimationFrame(loop);

        update();
        render();

        lastFrame = thisFrame;
    }

    loop();
}


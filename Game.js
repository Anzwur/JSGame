var Game = {};
/**
 * Variables
**/

Game.c = document.getElementById("canvas");
Game.ctx = Game.c.getContext("2d");

Game.down = false;

/**
 * Game Logic
**/

Player.img.onload = function(){
  Game.run();
  setInterval(
  function()
  {
    Player.animate(start, end);
  },
  140);
};

document.addEventListener('keydown', function(event) {
    if(Game.down == false)
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
       Game.down = true;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37 || event.keyCode == 39) {
        vx = 0;
    }
    if(event.keyCode == 38 || event.keyCode == 40) {
        vy = 0;
    }
    Game.down = false;
});

Game.update = function()
{
  World.update();
  Player.update();
}

Game.render = function()
{
  Game.ctx.fillRect(0,0,500,500);
  World.render();
  Player.render();
}


/**
 * Game Loop
**/


Game.run = function() {
    var frameId = 0;
    var lastFrame = Date.now();

    function loop() {
        var thisFrame = Date.now();

        var elapsed = thisFrame - lastFrame;

        frameId = window.requestAnimationFrame(loop);

        Game.update();
        Game.render();

        lastFrame = thisFrame;
    }

    loop();
}


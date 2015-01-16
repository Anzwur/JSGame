var Game = {};

Game.c = document.getElementById("canvas");
Game.ctx = Game.c.getContext("2d");

Player.img.onload = function(){
  GameThread.run();
  setInterval(
  function()
  {
    Player.animate(start, end);
  },
  140);
};

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

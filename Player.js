var Player = {};

var index = 0;
var start = 0;
var end = 0;
Player.x = 0;
Player.y = 0;
var vx = 0;
var vy = 0;
Player.img = new Image;

Player.img.src = "res/walk.png";

Player.animate = function(start, end)
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

Player.update = function()
{
  Player.x += vx;
  Player.y += vy;
}

Player.render = function()
{
  Game.ctx.drawImage(Player.img, 32*index, 0, 32, 38, 234, 234, 32, 38);
}
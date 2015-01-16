var Player = {};

Player.animIndex = 0;
Player.animStart = 0;
Player.animEnd = 0;
Player.x = 0;
Player.y = 0;
Player.vx = 0;
Player.vy = 0;
Player.img = new Image;

Player.img.src = "res/walk.png";

Player.animate = function(start, end)
{
  if(InputHandle.down == true)
  {
    if(Player.animIndex < end)
    {
      Player.animIndex = Player.animIndex + 1;
    }
    else
    {
      Player.animIndex = start;
    }
  }
}

Player.update = function()
{
  Player.x += Player.vx;
  Player.y += Player.vy;
}

Player.render = function()
{
  Game.ctx.drawImage(Player.img, 32*Player.animIndex, 0, 32, 38, Game.centerX-16, Game.centerY-19, 32, 38);
}
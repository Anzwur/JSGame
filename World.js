var World = {};

World.x = 0;
World.y = 0;

World.img = new Image;
World.img.src = "res/grass.png";

World.update = function()
{
    World.x -= vx;
    World.y -= vy;
}

World.render = function()
{
  Game.ctx.drawImage(World.img,0,0,598,458,World.x,World.y,500,500);
}
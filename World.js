var World = {};

World.x = 0;
World.y = 0;
World.width = 500;
World.height = 500;
World.img = new Image;
World.img.src = "res/grass.png";

var Sign = {};

Sign.img = new Image;
Sign.img.src = "res/sign.png";
Sign.x = 0;
Sign.y = 0;

World.update = function()
{
    World.x -= Player.vx;
    World.y -= Player.vy;
}

World.render = function()
{
  Game.ctx.drawImage(World.img,0,0,598,458,World.x,World.y,World.width,World.height);
}
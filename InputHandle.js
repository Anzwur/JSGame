var InputHandle = {};

InputHandle.down = false;

document.addEventListener('keydown', function(event) {
    if(InputHandle.down == false)
    {
      if(event.keyCode == 37) { //left
          Player.vy = 0;
          Player.vx = -1;
          Player.animIndex = Player.animStart = 2;
          Player.animEnd = 4;
      }
      if(event.keyCode == 38) { //up
          Player.vx = 0;
          Player.vy = -1;
          Player.animIndex = Player.animStart = 8;
          Player.animEnd = 10;
      }
      if(event.keyCode == 39) { //right
          Player.vy = 0;
          Player.vx = 1;
          Player.animIndex = Player.animStart = 5;
          Player.animEnd = 7;
      }
      if(event.keyCode == 40) { //down
          Player.vx = 0;
          Player.vy = 1;
          Player.animIndex = Player.animStart = 0;
          Player.animEnd = 1;
      }
       InputHandle.down = true;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37 || event.keyCode == 39) {
        Player.vx = 0;
    }
    if(event.keyCode == 38 || event.keyCode == 40) {
        Player.vy = 0;
    }
    InputHandle.down = false;
});
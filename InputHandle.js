var InputHandle = {};

InputHandle.down = false;

document.addEventListener('keydown', function(event) {
    if(InputHandle.down == false)
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
       InputHandle.down = true;
    }
});

document.addEventListener('keyup', function(event) {
    if(event.keyCode == 37 || event.keyCode == 39) {
        vx = 0;
    }
    if(event.keyCode == 38 || event.keyCode == 40) {
        vy = 0;
    }
    InputHandle.down = false;
});
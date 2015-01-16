var GameThread = {};

GameThread.run = function() {
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

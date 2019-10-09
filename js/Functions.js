function windowToCanvas(canvas,point){

    var canvasStyle = window.getComputedStyle(canvas);

    var bbox = canvas.getBoundingClientRect();

    point.x -= bbox.left;
    point.y -= bbox.top;

    point.x -= parseFloat(canvasStyle["border-left-width"]);
    point.y -= parseFloat(canvasStyle["border-top-width"]);

    point.x -= parseFloat(canvasStyle["padding-left"]);
    point.y -= parseFloat(canvasStyle["padding-top"]);

    var xRatio = canvas.width / parseFloat(canvasStyle["width"]);
    var yRatio = canvas.height / parseFloat(canvasStyle["height"]);

    point.x *= xRatio;
    point.y *= yRatio;

    return point;
}

function calculateFps(now) {
    var fps = 1000 / (now - lastTime);
    lastTime = now;
    return fps;
}

function randomNum(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function drawBoard(x,y,w,h,style){
    ctx.save();
    //ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.fillStyle = style;
    ctx.fillRect(x,y,w,h);
    ctx.restore();
}
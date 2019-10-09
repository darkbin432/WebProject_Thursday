var progressbar = {
    w: canvas.width - 1000,
    h: 30,
    x: 500,
    y: canvas.height / 2,
    VELOCITY: 200
};

var sea_house = {
    posX: 0,
    posY: canvas.HEIGHT * 2,
    WIDTH: 61,
    HEIGHT: 100
};

var w = 0;

function LOAD() {
    w += progressbar.VELOCITY / fps;

    ctx.save();

    ctx.fillStyle = "green";

    ctx.fillRect(progressbar.x, progressbar.y, w, progressbar.h);

    ctx.drawImage(image, 0, BACKGROUND.HEIGHT * 2, sea_house.WIDTH, sea_house.HEIGHT, progressbar.x + w - sea_house.WIDTH / 2, progressbar.y - (sea_house.HEIGHT - progressbar.h) / 2, sea_house.WIDTH, sea_house.HEIGHT);

    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.font = "bold " + progressbar.h + "px Arial";
    ctx.fillStyle = "orange";

    var text = parseInt(w / progressbar.w * 100) + "%";

    ctx.fillText(text, canvas.width - progressbar.x, progressbar.y - progressbar.h);

    if (w >= progressbar.w) scene = "menu";

    ctx.restore();
}
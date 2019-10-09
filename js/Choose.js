var ChooseFish1 = {
    posX: 62,
    posY: canvas.height * 2,
    WIDTH: 100,
    HEIGHT: 92,
    x: canvas.width / 2 - 100,
    y: canvas.height / 2 - 92,
    MOUSEMOVE: 0
};

var ChooseFish2 = {
    posX: 62 + ChooseFish1.WIDTH,
    posY: canvas.height * 2,
    WIDTH: 100,
    HEIGHT: 71,
    x: canvas.width / 2 + 100,
    y: canvas.height / 2 - 92,
    MOUSEMOVE: 0
};

var ChooseFish3 = {
    posX: 62 + ChooseFish1.WIDTH + ChooseFish2.WIDTH,
    posY: canvas.height * 2,
    WIDTH: 100,
    HEIGHT: 63,
    x: canvas.width / 2 - 100,
    y: canvas.height / 2 + 63,
    MOUSEMOVE: 0
};

var ChooseFish4 = {
    posX: 62 + ChooseFish1.WIDTH + ChooseFish2.WIDTH + ChooseFish3.WIDTH,
    posY: canvas.height * 2,
    WIDTH: 100,
    HEIGHT: 43,
    x: canvas.width / 2 + 100,
    y: canvas.height / 2 + 62,
    MOUSEMOVE: 0
};

function drawChoose() {
    ctx.save();

    drawBoard(0,0,canvas.width,canvas.height,"rgba(0,0,0,0.4)");

    var text = "请选择游戏角色";

    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.font = "bold 60px Arial";
    ctx.textAlign="center";
    ctx.textBaseline="middle";

    ctx.fillText(text, canvas.width / 2, canvas.height / 6);

    ctx.font = "20px Arial";
    ctx.fillText(hintText, canvas.width / 2, canvas.height / 12 * 11);

    ctx.restore();

    ctx.save();

    ctx.drawImage(image, ChooseFish1.posX, ChooseFish1.posY, ChooseFish1.WIDTH, ChooseFish1.HEIGHT, ChooseFish1.x -  ChooseFish1.WIDTH * (1 + ChooseFish1.MOUSEMOVE) / 2, ChooseFish1.y - ChooseFish1.HEIGHT * (1 + ChooseFish1.MOUSEMOVE) / 2, ChooseFish1.WIDTH * (1 + ChooseFish1.MOUSEMOVE), ChooseFish1.HEIGHT * (1 + ChooseFish1.MOUSEMOVE));
    ctx.drawImage(image, ChooseFish2.posX, ChooseFish2.posY, ChooseFish4.WIDTH, ChooseFish2.HEIGHT, ChooseFish2.x -  ChooseFish2.WIDTH * (1 + ChooseFish2.MOUSEMOVE) / 2, ChooseFish2.y - ChooseFish2.HEIGHT * (1 + ChooseFish2.MOUSEMOVE) / 2, ChooseFish2.WIDTH * (1 + ChooseFish2.MOUSEMOVE), ChooseFish2.HEIGHT * (1 + ChooseFish2.MOUSEMOVE));
    ctx.drawImage(image, ChooseFish3.posX, ChooseFish3.posY, ChooseFish3.WIDTH, ChooseFish3.HEIGHT, ChooseFish3.x -  ChooseFish3.WIDTH * (1 + ChooseFish3.MOUSEMOVE) / 2, ChooseFish3.y - ChooseFish3.HEIGHT * (1 + ChooseFish3.MOUSEMOVE) / 2, ChooseFish3.WIDTH * (1 + ChooseFish3.MOUSEMOVE), ChooseFish3.HEIGHT * (1 + ChooseFish3.MOUSEMOVE));
    ctx.drawImage(image, ChooseFish4.posX, ChooseFish4.posY, ChooseFish4.WIDTH, ChooseFish4.HEIGHT, ChooseFish4.x -  ChooseFish4.WIDTH * (1 + ChooseFish4.MOUSEMOVE) / 2, ChooseFish4.y - ChooseFish4.HEIGHT * (1 + ChooseFish4.MOUSEMOVE) / 2, ChooseFish4.WIDTH * (1 + ChooseFish4.MOUSEMOVE), ChooseFish4.HEIGHT * (1 + ChooseFish4.MOUSEMOVE));

    ctx.restore();
}
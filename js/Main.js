var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var btnmusic = document.getElementById("button");
var endmusic = document.getElementById("end");

var image = new Image();
image.src = "images/background4.png";
var img = new Image();
img.src = "images/title.png";
var pattern;

var Score=0;
var Time=0;
var startTime=0;

var btnflag = 0;

var blocks = [];

var BLOCK_UP = {
    posX:0,
    posY:1690,
    WIDTH:186,
    HEIGHT:250
};

var BLOCK_DOWN = {
    posX:186,
    posY:1690,
    WIDTH:164,
    HEIGHT:250
};

var BACKGROUND={
    WIDTH: 1730,
    HEIGHT: 795,
    x:0,
    y:0,
    VELOCITY:150
};

var FISH_CHOOSE = {
    posX: 0,
    posY: 0,
    WIDTH: 0,
    HEIGHT: 0
};

var lastTime = 0;
var fps = 0;
var scene = "loading";//0 loading, 1 menu, 2 choose, 3 game, 4 end
var swimming_fish;
var ff=0,f=0;

var menuText1 = "Up Down Fish ! ",
    menuText2 = "开始游戏",
    menuText3 = "游戏规则"
    menuText4 = "特别鸣谢",
    ruleText1 = "游戏使用鼠标左键进行操作",
    ruleText2 = "游戏开始后玩家可以选择自己喜欢的小鱼进入游戏",
    ruleText3 = "游戏过程中，小鱼会随重力自然下落",
    ruleText4 = "玩家可通过点击鼠标左键来控制小鱼上浮从而躲避路途中的障碍物",
    ruleText5 = "当小鱼触碰到障碍物或者掉落出画面时，游戏结束",
    ruleText6 = "按照小鱼存活的时间与躲避的障碍物个数给出游戏的最终得分",
    ruleText7 = "那么，祝各位玩的开心  (＾－＾)V",
    thanksText1 = "特别鸣谢",
    thanksText2 = "薛鸿涛",
    thanksText3 = "余赛康",
    thanksText4 = "罗伟斌",
    thanksText5 = "指导老师",
    thanksText6 = "张佳";
    hintText = "-----单击任意位置返回-----";

var menuTextSize1 = 40,
    menuTextSize2 = 40,
    menuTextSize3 = 40;


function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBG() {
    ctx.save();

    BACKGROUND.x = BACKGROUND.x <= canvas.width * 2 ? BACKGROUND.x + BACKGROUND.VELOCITY / fps : 0;

    ctx.drawImage(image, 0, 0, BACKGROUND.WIDTH, BACKGROUND.HEIGHT, -BACKGROUND.x, 0, BACKGROUND.WIDTH, BACKGROUND.HEIGHT);
    ctx.drawImage(image, 0, BACKGROUND.HEIGHT, BACKGROUND.WIDTH, BACKGROUND.HEIGHT,canvas.width - BACKGROUND.x, 0, BACKGROUND.WIDTH, BACKGROUND.HEIGHT);
    ctx.drawImage(image, 0, 0, BACKGROUND.WIDTH,BACKGROUND.HEIGHT, canvas.width * 2 - BACKGROUND.x, 0, BACKGROUND.WIDTH, BACKGROUND.HEIGHT);

    ctx.restore();
}

function drawBlock()  {
    var tempTime= new Date();
    Time = tempTime -startTime;
    for(let i = 0; i < blocks.length; ++i){
        if(blocks[i].drawX + blocks[i].WIDTH < 0) continue;
        ctx.drawImage(image,
            blocks[i].posX, blocks[i].posY,
            blocks[i].WIDTH, blocks[i].HEIGHT,
            blocks[i].drawX, blocks[i].drawY,
            blocks[i].realWidth, blocks[i].realHeight);
        if(blocks[i].drawX + blocks[i].WIDTH < swimming_fish.drawY
            && blocks[i].IsCount === 0
            && blocks[i].IsUp === 1){
            blocks[i].IsCount = 1;
            Score++;
        }
        blocks[i].Update();
        if(blocks[i].drawX + blocks[i].WIDTH < 0
            && blocks[i].IsUp === 1){
            blocks.splice(i, 2);
            var up_height = randomNum(0, 295);
            var Up = new block(BLOCK_UP.posX, BLOCK_UP.posY,
                BLOCK_UP.WIDTH, BLOCK_UP.HEIGHT,
                BLOCK_UP.WIDTH, BLOCK_UP.HEIGHT,
                BACKGROUND.WIDTH, up_height,
                6, 1);
            var Down = new block(BLOCK_DOWN.posX, BLOCK_DOWN.posY,
                BLOCK_DOWN.WIDTH, BLOCK_DOWN.HEIGHT,
                BLOCK_DOWN.WIDTH, BLOCK_DOWN.HEIGHT,
                BACKGROUND.WIDTH, BACKGROUND.HEIGHT,
                6, 0);
            blocks.push(Up);
            blocks.push(Down);
        }
    }
}

function drawFish() {
    ctx.drawImage(image,
        swimming_fish.posX, swimming_fish.posY,
        swimming_fish.WIDTH, swimming_fish.HEIGHT,
        swimming_fish.drawX, swimming_fish.drawY,
        swimming_fish.WIDTH, swimming_fish.HEIGHT);
    swimming_fish.Update();
}

function pre_Play() {
    blocks = [];
    Score = 0;
    startTime = new Date();
    var up1_height = randomNum(0, 295);
    var Up1 = new block(BLOCK_UP.posX, BLOCK_UP.posY,
        BLOCK_UP.WIDTH, BLOCK_UP.HEIGHT,
        BLOCK_UP.WIDTH, BLOCK_UP.HEIGHT,
        BACKGROUND.WIDTH + BLOCK_UP.WIDTH / 2, up1_height,
        6, 1);
    var Down1 = new block(BLOCK_DOWN.posX, BLOCK_DOWN.posY,
        BLOCK_DOWN.WIDTH, BLOCK_DOWN.HEIGHT,
        BLOCK_DOWN.WIDTH, BLOCK_DOWN.HEIGHT,
        BACKGROUND.WIDTH + BLOCK_DOWN.WIDTH / 2, BACKGROUND.HEIGHT - BLOCK_DOWN.HEIGHT,
        6, 0);
    blocks.push(Up1);
    blocks.push(Down1);


    var up2_height = randomNum(-10, 10) / 100;
    var Up2 = new block(BLOCK_UP.posX, BLOCK_UP.posY,
        BLOCK_UP.WIDTH, BLOCK_UP.HEIGHT,
        BLOCK_UP.WIDTH, BLOCK_UP.HEIGHT,
        BACKGROUND.WIDTH * 4 / 3 + BLOCK_UP.WIDTH, up2_height,
        6, 1);
    var Down2 = new block(BLOCK_DOWN.posX, BLOCK_DOWN.posY,
        BLOCK_DOWN.WIDTH, BLOCK_DOWN.HEIGHT,
        BLOCK_DOWN.WIDTH, BLOCK_DOWN.HEIGHT,
        BACKGROUND.WIDTH * 4 / 3 + BLOCK_DOWN.WIDTH, BACKGROUND.HEIGHT - BLOCK_DOWN.HEIGHT,
        6, 0);
    blocks.push(Up2);
    blocks.push(Down2);

    var up3_height = randomNum(-10, 10) / 100;
    var Up3 = new block(BLOCK_UP.posX, BLOCK_UP.posY,
        BLOCK_UP.WIDTH, BLOCK_UP.HEIGHT,
        BLOCK_UP.WIDTH , BLOCK_UP.HEIGHT,
        BACKGROUND.WIDTH * 5 / 3 + BLOCK_UP.WIDTH * 3 / 2, up3_height,
        6, 1);
    var Down3 = new block(BLOCK_DOWN.posX, BLOCK_DOWN.posY,
        BLOCK_DOWN.WIDTH, BLOCK_DOWN.HEIGHT,
        BLOCK_DOWN.WIDTH, BLOCK_DOWN.HEIGHT,
        BACKGROUND.WIDTH * 5 / 3 + BLOCK_DOWN.WIDTH * 3 / 2, BACKGROUND.HEIGHT - BLOCK_DOWN.HEIGHT,
        6, 0);
    blocks.push(Up3);
    blocks.push(Down3);

    swimming_fish = new Fish(FISH_CHOOSE.posX, FISH_CHOOSE.posY,
        FISH_CHOOSE.WIDTH, FISH_CHOOSE.HEIGHT,
        canvas.width / 6, canvas.height / 2);
}

function JudgeEnd() {
    for(var i = 0; i < blocks.length; ++i){
        if(blocks[i].drawY + blocks[i].WIDTH < 0) continue;
        if(blocks[i].Hit(swimming_fish.drawX, swimming_fish.drawY)
            || blocks[i].Hit(swimming_fish.drawX + swimming_fish.WIDTH, swimming_fish.drawY)
            || blocks[i].Hit(swimming_fish.drawX, swimming_fish.drawY + swimming_fish.HEIGHT)
            || blocks[i].Hit(swimming_fish.drawX + swimming_fish.WIDTH, swimming_fish.drawY + swimming_fish.HEIGHT))
        {
            console.log("Game Ending");
            bgm.pause();
            endmusic.play();
            scene = "end";
        }
    }
    if(swimming_fish.drawY + swimming_fish.HEIGHT > canvas.height) {
        console.log("Game Ending");
        bgm.pause();
        endmusic.play();
        scene = "end";
    }
}

function drawScore(){
    ctx.save();

    ctx.textAlign="left";
    ctx.textBaseline="top";
    ctx.font = "bold 40px Arial";
    ctx.fillText("游戏时间："+(Time/1000).toFixed(3), canvas.width - 350,30)
    ctx.fillText("游戏得分："+Score,canvas.width - 350,100);
    ctx.restore();
}

function Play() {
    drawBlock();
    JudgeEnd();
    drawFish();
    drawScore();
}

function RUN(now){
    if(now === undefined) now = +new Date();

    fps = calculateFps(now);

    erase();
    if(scene === "loading"){
        LOAD(now);
    }
    else {
        drawBG();

        if(scene === "choose") {
            drawChoose();
        }
        else if(scene === "play"){
            Play();
        }
        else if (scene === "menu"){
            drawMenu();
        }
        else if (scene === "rule"){
            drawRule();
        }
        else if (scene === "thanks"){
            drawThanks();
        }else if (scene === "end"){
            if (endmusic.ended){
                bgm.play();
            }
            End();
        }
    }

    requestAnimationFrame(RUN);
}

image.onload = function () {
    drawBG();
};

function onCanvasMousedown(e) {
    var point = {
        x:e.clientX,
        y:e.clientY
    };

    point = windowToCanvas(canvas, point);

    if(scene === "choose"){
        if(point.x >= ChooseFish1.x - ChooseFish1.WIDTH / 2
            && point.x <= ChooseFish1.x + ChooseFish1.WIDTH / 2
            && point.y >= ChooseFish1.y - ChooseFish1.HEIGHT / 2
            && point.y <= ChooseFish1.y + ChooseFish1.HEIGHT / 2){
            FISH_CHOOSE.posX = ChooseFish1.posX;
            FISH_CHOOSE.posY = ChooseFish1.posY;
            FISH_CHOOSE.HEIGHT = ChooseFish1.HEIGHT;
            FISH_CHOOSE.WIDTH = ChooseFish1.WIDTH;
            pre_Play();
            scene = "play";
        }
        else if(point.x >= ChooseFish2.x - ChooseFish2.WIDTH / 2
            && point.x <= ChooseFish2.x + ChooseFish2.WIDTH / 2
            && point.y >= ChooseFish2.y - ChooseFish2.HEIGHT / 2
            && point.y <= ChooseFish2.y + ChooseFish2.HEIGHT / 2) {
            FISH_CHOOSE.posX = ChooseFish2.posX;
            FISH_CHOOSE.posY = ChooseFish2.posY;
            FISH_CHOOSE.HEIGHT = ChooseFish2.HEIGHT;
            FISH_CHOOSE.WIDTH = ChooseFish2.WIDTH;
            pre_Play();
            scene = "play";
        }
        else if(point.x >= ChooseFish3.x - ChooseFish3.WIDTH / 2
            && point.x <= ChooseFish3.x + ChooseFish3.WIDTH / 2
            && point.y >= ChooseFish3.y - ChooseFish3.HEIGHT / 2
            && point.y <= ChooseFish3.y + ChooseFish3.HEIGHT / 2){
            FISH_CHOOSE.posX = ChooseFish3.posX;
            FISH_CHOOSE.posY = ChooseFish3.posY;
            FISH_CHOOSE.HEIGHT = ChooseFish3.HEIGHT;
            FISH_CHOOSE.WIDTH = ChooseFish3.WIDTH;
            pre_Play();
            scene = "play";
        }
        else if(point.x >= ChooseFish4.x - ChooseFish4.WIDTH / 2
            && point.x <= ChooseFish4.x + ChooseFish4.WIDTH / 2
            && point.y >= ChooseFish4.y - ChooseFish4.HEIGHT / 2
            && point.y <= ChooseFish4.y + ChooseFish4.HEIGHT / 2){
            FISH_CHOOSE.posX = ChooseFish4.posX;
            FISH_CHOOSE.posY = ChooseFish4.posY;
            FISH_CHOOSE.HEIGHT = ChooseFish4.HEIGHT;
            FISH_CHOOSE.WIDTH = ChooseFish4.WIDTH;
            pre_Play();
            scene = "play";
        }
        else{
            ChooseFish1.MOUSEMOVE = 0;
            ChooseFish2.MOUSEMOVE = 0;
            ChooseFish3.MOUSEMOVE = 0;
            ChooseFish4.MOUSEMOVE = 0;
            btnflag = 0;
            scene = "menu";
        }
        
    }
    else if(scene === "play"){
        swimming_fish.Float();
    }
    else if (scene === "menu"){
        if (point.x >= canvas.width / 2 - 85 &&
            point.x <= canvas.width / 2 + 85 &&
            point.y >= canvas.height / 6 * 3 - 20 &&
            point.y <= canvas.height / 6 * 3 + 20) {
            scene = "choose";
        }else if (point.x >= canvas.width / 2 - 85 &&
            point.x <= canvas.width / 2 + 85 &&
            point.y >= canvas.height / 6 * 4 - 20 &&
            point.y <= canvas.height / 6 * 4 + 20){
            scene = "rule";
        }else if (point.x >= canvas.width / 2 - 85 &&
            point.x <= canvas.width / 2 + 85 &&
            point.y >= canvas.height / 6 * 5 - 20 &&
            point.y <= canvas.height / 6 * 5 + 20){
            scene = "thanks";
        }
        menuTextSize1 = 40;
        menuTextSize2 = 40;
        menuTextSize3 = 40;
        btnflag = 0;
    }
    else if (scene === "thanks"){
        scene = "menu";
    }
    else if (scene === "rule"){
        scene = "menu";
    }
    else if (scene === "end"){
        excute(point.x,point.y);
    }
}

function onCanvasMousemove(e) {
    var point = {
        x:e.clientX,
        y:e.clientY
    };

    point=windowToCanvas(canvas, point);

    if(scene === "choose"){
        if(point.x >= ChooseFish1.x - ChooseFish1.WIDTH / 2
            && point.x <= ChooseFish1.x + ChooseFish1.WIDTH / 2
            && point.y >= ChooseFish1.y - ChooseFish1.HEIGHT / 2
            && point.y <= ChooseFish1.y + ChooseFish1.HEIGHT / 2){
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            }
            ChooseFish1.MOUSEMOVE = 1;
            ChooseFish2.MOUSEMOVE = 0;
            ChooseFish3.MOUSEMOVE = 0;
            ChooseFish4.MOUSEMOVE = 0;
        }
        else if(point.x >= ChooseFish2.x - ChooseFish2.WIDTH / 2
            && point.x <= ChooseFish2.x + ChooseFish2.WIDTH / 2
            && point.y >= ChooseFish2.y - ChooseFish2.HEIGHT / 2
            && point.y <= ChooseFish2.y + ChooseFish2.HEIGHT / 2){
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            }
            ChooseFish1.MOUSEMOVE = 0;
            ChooseFish2.MOUSEMOVE = 1;
            ChooseFish3.MOUSEMOVE = 0;
            ChooseFish4.MOUSEMOVE = 0;
            
        }
        else if(point.x >= ChooseFish3.x - ChooseFish3.WIDTH / 2
            && point.x <= ChooseFish3.x + ChooseFish3.WIDTH / 2
            && point.y >= ChooseFish3.y - ChooseFish3.HEIGHT / 2
            && point.y <= ChooseFish3.y + ChooseFish3.HEIGHT / 2){
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            } 
            ChooseFish1.MOUSEMOVE = 0;
            ChooseFish2.MOUSEMOVE = 0;
            ChooseFish3.MOUSEMOVE = 1;
            ChooseFish4.MOUSEMOVE = 0;
            
        }
        else if(point.x >= ChooseFish4.x - ChooseFish4.WIDTH / 2
            && point.x <= ChooseFish4.x + ChooseFish4.WIDTH / 2
            && point.y >= ChooseFish4.y - ChooseFish4.HEIGHT / 2
            && point.y <= ChooseFish4.y + ChooseFish4.HEIGHT / 2){
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            }
            ChooseFish1.MOUSEMOVE = 0;
            ChooseFish2.MOUSEMOVE = 0;
            ChooseFish3.MOUSEMOVE = 0;
            ChooseFish4.MOUSEMOVE = 1;
        }  
        else{
            ChooseFish1.MOUSEMOVE = 0;
            ChooseFish2.MOUSEMOVE = 0;
            ChooseFish3.MOUSEMOVE = 0;
            ChooseFish4.MOUSEMOVE = 0;
            btnflag = 0;
        }
    }else if (scene === "menu"){
        if (point.x >= canvas.width / 2 - 85 &&
            point.x <= canvas.width / 2 + 85 &&
            point.y >= canvas.height / 6 * 3 - 20 &&
            point.y <= canvas.height / 6 * 3 + 20) {
            menuTextSize1 = 50;
            menuTextSize2 = 40;
            menuTextSize3 = 40;
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            }
            
        }else if (point.x >= canvas.width / 2 - 85 &&
            point.x <= canvas.width / 2 + 85 &&
            point.y >= canvas.height / 6 * 4 - 20 &&
            point.y <= canvas.height / 6 * 4 + 20){
            menuTextSize1 = 40;
            menuTextSize2 = 50;
            menuTextSize3 = 40;
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            }
        }else if (point.x >= canvas.width / 2 - 85 &&
            point.x <= canvas.width / 2 + 85 &&
            point.y >= canvas.height / 6 * 5 - 20 &&
            point.y <= canvas.height / 6 * 5 + 20){
            menuTextSize1 = 40;
            menuTextSize2 = 40;
            menuTextSize3 = 50;
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            }
        }else {
            menuTextSize1 = 40;
            menuTextSize2 = 40;
            menuTextSize3 = 40;
            btnflag = 0;
        }
    }else if (scene === "rule"){

    }else if (scene === "thanks"){

    }else if (scene === "end"){
        if(point.x >= canvas.width * 2/5
          && point.x <= canvas.width * 2 / 5 + canvas.width / 5
          && point.y >= canvas.height * 5 / 9
          && point.y <= canvas.height * 5 / 9 + canvas.height / 13)
        {
            drawBigButton(canvas.width * 2 / 5,canvas.height * 2 / 6 + 20,canvas.width / 5,canvas.height / 6,"重新开始游戏");//1
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            }
            ff=1;
            f=0;
        }else if (point.x >= canvas.width *2/5 
          && point.x <= canvas.width *2/5 + canvas.width/5 
          && point.y >= canvas.height *6/9 
          && point.y <= canvas.height *6/9 + canvas.height/9)
        {
            drawBigButton(canvas.width*2/5,canvas.height*3/6,canvas.width/5,canvas.height/6,"返回菜单");//2
            if (!btnflag){
                btnmusic.play();
                btnflag = !btnflag;
            }
            ff=0;
            f=1;
        }else{
            ff=0;
            f=0;
            btnflag = 0;
        }
    }

}

image.onload = function(){
    drawBG();
    btnmusic.load();
};

img.onload = function(){
    pattern=ctx.createPattern(img,'repeat');
}

canvas.onmousedown = onCanvasMousedown;
canvas.onmousemove = onCanvasMousemove;

requestAnimationFrame(RUN);
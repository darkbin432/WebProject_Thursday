var block = function (posX, posY, width, height, realWidth, realHeight, drawX, drawY, speed, IsUP) {
    if(posX !== undefined){
        this.posX = posX;
    }

    if(posY !== undefined){
        this.posY = posY;
    }

    if(width !== undefined){
        this.WIDTH = width;
    }

    if(height !== undefined){
        this.HEIGHT = height;
    }

    if(realWidth !== undefined){
        this.realWidth = realWidth;
    }

    if(realHeight !== undefined){
        this.realHeight = realHeight;
    }

    if(drawX !== undefined){
        this.drawX = drawX;
    }

    if(drawY !== undefined){
        this.drawY = drawY;
    }

    if(speed !== undefined){
        this.speed = speed;
    }

    if(IsUP !== undefined){
        this.IsUp = IsUP;
    }

    return this;
};

block.prototype = {
    posX:0,
    posY:0,
    WIDTH:0,
    HEIGHT:0,
    realWidth:0,
    realHeight:0,
    drawX:0,
    drawY:0,
    speed:0,
    IsUp:0,
    IsCount:0,

    setPos:function (x, y) {
        if(x !== undefined)
            this.drawX = x;

        if(y !== undefined)
            this.drawY = y;
    },

    Update:function () {
        this.setPos(this.drawX - this.speed, this.y);
    },

    Hit:function (x, y) {
        if(x >= this.drawX && x <= this.drawX + this.WIDTH && y >= this.drawY && y <= this.drawY + this.HEIGHT)
            return true;
        else
            return false;
    }
};
var Fish = function (posX, posY, width, height, drawX, drawY) {

    if(posX !== undefined){
        this.posX = posX;
    }
    if(posY !== undefined) {
        this.posY = posY;
    }
    if(width !== undefined) {
        this.WIDTH = width;
    }
    if(height !== undefined) {
        this.HEIGHT = height;
    }
    if(drawX !== undefined){
        this.drawX = drawX;
    }

    if(drawY !== undefined){
        this.drawY = drawY
    }
    return this;
};

Fish.prototype ={
    WIDTH:0,
    HEIGHT:0,
    posX:0,
    posY:0,
    drawX:0,
    drawY:0,
    speed:0,
    MOUSEDOWN_GROW:50,
    SPEED_GROW:0.098,

    setPos:function (x, y) {
        this.drawX = x;
        this.drawY = Math.max(0, y);
        if(this.drawY === 0) this.speed = 0;
    },

    Update:function(){
        this.setPos(this.drawX, this.drawY + this.speed);
        this.speed = this.speed + this.SPEED_GROW;
    },

    Float:function(){
        this.speed = -3;
    },

    Hit:function (x, y) {
        if(x >= this.drawX && x <= this.drawX + this.width && y >= this.drawY && y <= this.drawY + this.height)
            return true;
        else if (this.drawY + this.height >= canvas.height)
            return false;
        else
            return false;
    }
};
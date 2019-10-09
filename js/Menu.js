
function drawMenuText(){
    ctx.save();

    ctx.textAlign="center";
    ctx.textBaseline="middle";

    ctx.font = "bold 80px Arial";
    ctx.fillStyle = pattern;
    ctx.fillText(menuText1, canvas.width / 2, canvas.height / 8 * 2);

    ctx.fillStyle = "#00E5EE";

    ctx.font = "bold "+menuTextSize1+"px Arial";
    ctx.fillText(menuText2, canvas.width / 2, canvas.height / 6 * 3);

    ctx.font = "bold "+menuTextSize2+"px Arial";
    ctx.fillText(menuText3, canvas.width / 2, canvas.height / 6 * 4);

    ctx.font = "bold "+menuTextSize3+"px Arial";    
    ctx.fillText(menuText4, canvas.width / 2, canvas.height / 6 * 5);

    ctx.restore();
}

function drawMenu(){
    drawMenuText();
}
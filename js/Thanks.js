

function drawThanksText() {
    ctx.save();

    ctx.textAlign="center";
    ctx.textBaseline="middle";

    ctx.font = "bold 50px Arial";
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillText(thanksText1, canvas.width / 2, canvas.height / 12 * 2);
    ctx.fillText(thanksText2, canvas.width / 2, canvas.height / 12 * 4);
    ctx.fillText(thanksText3, canvas.width / 2, canvas.height / 12 * 5	);
    ctx.fillText(thanksText4, canvas.width / 2, canvas.height / 12 * 6);
    ctx.fillText(thanksText5, canvas.width / 2, canvas.height / 12 * 8);
    ctx.fillText(thanksText6, canvas.width / 2, canvas.height / 12 * 10);
    ctx.font = "20px Arial"; 
    ctx.fillText(hintText, canvas.width / 2, canvas.height / 12 * 11);
    ctx.restore();
}



function drawThanks(){
	drawBoard(0,0,canvas.width,canvas.height,"rgba(0,0,0,0.4)");
    drawThanksText();
}

function drawRuleText() {
    ctx.save();

    ctx.textBaseline="middle";
    ctx.fillStyle = "rgba(255,255,255,0.9)";

    ctx.font = "bold 30px Arial";
    ctx.fillText(ruleText1, canvas.width / 4, canvas.height / 12 * 2);
    ctx.fillText(ruleText2, canvas.width / 4, canvas.height / 12 * 3);
    ctx.fillText(ruleText3, canvas.width / 4, canvas.height / 12 * 4);
    ctx.fillText(ruleText4, canvas.width / 4, canvas.height / 12 * 5);
    ctx.fillText(ruleText5, canvas.width / 4, canvas.height / 12 * 6);
    ctx.fillText(ruleText6, canvas.width / 4, canvas.height / 12 * 7);
    ctx.fillText(ruleText7, canvas.width / 4, canvas.height / 12 * 9);

    ctx.font = "20px Arial"; 
    ctx.textAlign="center";
    ctx.fillText(hintText, canvas.width / 2, canvas.height / 12 * 11);

    ctx.restore();
}

function drawRule(){
	drawBoard(0,0,canvas.width,canvas.height,"rgba(0,0,0,0.4)");
    drawRuleText();
}
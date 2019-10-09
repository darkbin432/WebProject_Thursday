var	scoreboard = {};

function drawSmallButton(x,y,width,height,TEXT){
	ctx.save();
	ctx.font = 'bold 40px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	ctx.fillStyle = "#000ACD";
	ctx.fillText(TEXT, x+width/2,y+height/2 );   

	ctx.restore();
}
function drawBigButton(x,y,width,height,TEXT){
	ctx.save();
	ctx.font = 'bold 50px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	ctx.fillStyle = "#000ACD";
	ctx.fillText(TEXT, x+width/2,y+height/2 );   
	ctx.restore();
}
function drawEndTime(x,y,width,height,TEXT){
	ctx.save();
	ctx.font = 'bold 60px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	ctx.fillStyle = "#000ACD";
	ctx.fillText("坚持时间："+TEXT+" 秒", x+width/2,y+height/2 );   
	ctx.restore();
}
function drawEndScore(x,y,width,height,TEXT){
	ctx.save();
	ctx.font = 'bold 60px Arial';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'bottom';
	ctx.fillStyle = "#000ACD";
	ctx.fillText("游戏得分："+TEXT+" 分", x+width/2,y+height/2 );   
	ctx.restore();
}
function End(){
	drawBoard(canvas.width/2-canvas.width/5,canvas.height/2-canvas.height/4,canvas.width/5*2,canvas.height/13*7,"rgba(255,255,255,0.3)");
	drawEndTime(canvas.width*2/5,canvas.height*3/9,canvas.width/5,canvas.height/9,Time/1000);
	drawEndScore(canvas.width*2/5,canvas.height*4/9,canvas.width/5,canvas.height/9,Score);
	if(ff === 0)
	drawSmallButton(canvas.width*2/5,canvas.height*5/9,canvas.width/5,canvas.height/9,"重新开始");//1
	else
	 drawBigButton(canvas.width*2/5,canvas.height*5/9,canvas.width/5,canvas.height/9,"重新开始");//1
	if(f === 0)
	drawSmallButton(canvas.width*2/5,canvas.height*6/9,canvas.width/5,canvas.height/9,"返回菜单");//2
	else
	 drawBigButton(canvas.width*2/5,canvas.height*6/9,canvas.width/5,canvas.height/9,"返回菜单");//2

}
function excute(x,y){
	if(x >= canvas.width*2/5 
		  && x <= canvas.width*2/5 +canvas.width/5
		  && y >= canvas.height*5/9 
		  && y <= canvas.height *5/9 +canvas.height/9)
	{
		pre_Play();
		scene = "choose";
	}
	else if (x >= canvas.width *2/5 
		  && x <= canvas.width *2/5 + canvas.width/5 
		  && y >= canvas.height *6/9 
		  && y <= canvas.height *9/9 + canvas.height/9)
	{
		scene = "menu";
	}
}
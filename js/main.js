// 点击图片，把链接的属性href赋予img地址
function showPic(){
	var links = document.getElementById("imagegallery").getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			document.getElementById("placeholder").src = this.href;
			// document.getElementById("description").firstChild.nodeValue = this.title;
			document.getElementById("description").innerHTML = this.title;
			return false;
		}
	}	
}

// 准备占位图片
function preparePic(){
	var boy = document.getElementsByTagName("body")[0];

	var imgC = document.createElement("img"); 
	imgC.setAttribute("id","placeholder");
	imgC.setAttribute("alt","轮播图");
	imgC.setAttribute("src","images/placeholder.gif");


	var pC = document.createElement("p");
	pC.setAttribute("id","description");
	var txtC = document.createTextNode("请选择图片...");
	pC.appendChild(txtC);

	boy.appendChild(imgC);
	boy.appendChild(pC);
}

// addLoadEvent(showPic);
// addLoadEvent(preparePic);

// ===========================================================
// 
// 
// ===========================================================


function displayAbbr(){
	var boy = document.getElementsByTagName("body")[0];
	var h1C = document.createElement("h1");
	h1C.innerHTML = "缩列词";
	boy.appendChild(h1C);

	var abbrG = document.getElementsByTagName("abbr");
	var dlC = document.createElement("dl");
	boy.appendChild(dlC);

	for (var i = 0; i < abbrG.length; i++) {
		var dtC = document.createElement("dt");
		var ddC = document.createElement("dd");
		dlC.appendChild(dtC);
		dlC.appendChild(ddC);
		dtC.innerHTML = abbrG[i].innerHTML;
		ddC.innerHTML = abbrG[i].title;
	}	
}

function showSourc(){
	var blockqGet = document.getElementsByTagName("blockquote");
	for (var i = 0; i < blockqGet.length; i++) {
		var aC = document.createElement("a");
		aC.innerHTML = "sourc";
		blockqGet[i].appendChild(aC);
		var cite = blockqGet[i].cite;
		aC.setAttribute("href", cite);
	}

}
// addLoadEvent(displayAbbr);
// addLoadEvent(showSourc);



// ===========================================================
// 
// 
// ===========================================================


// <p id="example" style="color: grey; font-family: sans-serif;">
// 		示例示例示例
// </p>

// var paras = document.getElementById("example");
// function beforePos(ele,x,y){
// 	ele.style.position = "absolute";
// 	ele.style.left = x;
// 	ele.style.top = y;
// }
// beforePos(paras,"100px",'100px');

// afterPos(paras,'100px','100px');

// function afterPos(ele,x,y){
// 	var xpos = parseInt(ele.style.left);  
// 	var ypos = parseInt(ele.style.top);  
// 	if (xpos == x && ypos == y) {
// 		return true;
// 	}
// 	if (xpos < x) { xpos++}
// 	if (xpos > x) { xpos--}
// 	if (ypos < y) { ypos++}
// 	if (ypos > y) { ypos--}

// 	xpos = xpos + "px";
// 	ypos = ypos + "px";
// 	ele.style.left = xpos;
// 	ele.style.top = ypos;

// 	setTimeout("afterPos(ele,x,y)",30);
// }

function positionMessage(){
	var elem = document.getElementById("example");
	elem.style.position = 'absolute';
	elem.style.left = '0px';
	elem.style.top = '0px';
	moveElement("example",500,500,30);
	var elem2 = document.getElementById("example2");
	elem2.style.position = 'absolute';
	elem2.style.left = '0px';
	elem2.style.top = '444px';
	elem2.style.color = 'red';
	moveElement("example2",300,440,30);
}
addLoadEvent(positionMessage);


function moveElement(elementID, final_x,final_y, interval) {	
	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (xpos == final_x && ypos == final_y ) {
		return true
	}
	if (xpos < final_x ) {
		dist = Math.ceil((final_x - xpos)/10);
		xpos += dist;
	}
	if (xpos > final_x ) {
		dist = Math.ceil((xpos - final_x)/10);
		xpos -= dist;		
	}
	if (ypos < final_y ) {
		dist = Math.ceil((final_x - ypos)/10);
		ypos += dist;
	}
	if (ypos > final_y ) {
		dist = Math.ceil((ypos - final_x)/10);
		ypos -= dist;	
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	// afterer = setTimeout("afterPos()",20);
	var repeat = "moveElement( '"+elementID+"', "+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}
// addLoadEvent(afterPos)


// ================================

function positionImg(){
	var elem = document.getElementById("preview");
	elem.style.position = 'absolute';
	elem.style.left = '0px';
	elem.style.top = '0px';
	var links = document.getElementById("linklist").getElementsByTagName('a');
	links[0].onmouseover = function(){
		moveElement("preview",-100,0,10);
	}
	links[1].onmouseover = function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-300,0,10);
	}
}
addLoadEvent(positionImg);
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

addLoadEvent(displayAbbr);


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

addLoadEvent(showSourc);



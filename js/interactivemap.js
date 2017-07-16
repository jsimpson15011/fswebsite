var square = document.getElementsByClassName("interaction-square");
var squareArray = Array.prototype.slice.call(square);
var close = document.getElementById("close");
var holeImg = document.getElementsByClassName("hole-info-img");
var closeImg = document.getElementsByClassName("closeImg");

for (var i = 0; i < square.length; i++) {
    squareArray[i].addEventListener('mouseover', highlightOn, false);
}
function highlightOn(){
	var icon = document.getElementsByClassName("interaction-icon");
	var index = squareArray.indexOf(this);
	var left = this.offsetLeft;
	var top = this.offsetTop;
	this.style.opacity=1;
	this.style.height="35px";
	this.style.width="35px";
	this.style.left=left-5;
	this.style.top=top-5;
}

for (var i = 0; i < square.length; i++) {
    squareArray[i].addEventListener('mouseout', highlightOff, false);
}
function highlightOff(){
	var left = this.offsetLeft;
	var top = this.offsetTop;
	this.style.backgroundColor='white';
	this.style.opacity=.6;
	this.style.height="25px";
	this.style.width="25px";
	this.style.left=left+5;
	this.style.top=top+5;
}

close.addEventListener('click', closeInfo, false);
function closeInfo(){
	var holeInfo = document.getElementById("hole-info");
	holeInfo.style.display="none";
	var removeInfo = document.getElementsByClassName("hole-info-inner");
	for (var i = 0; i < removeInfo.length; i++) {
    removeInfo[i].style.display="none"
	}
	for (var i = 0; i < closeImg.length; i++){
		closeImg[i].className += "hole-info-img ";
		closeImg[i].classList.remove("closeImg");
		for (var i = 0; i < holeImg.length; i++) {
    	holeImg[i].addEventListener('click', enlargeImg, false);
		}
	}
}

for (var i = 0; i < square.length; i++) {
    holeImg[i].addEventListener('click', enlargeImg, false);
}
function enlargeImg(){
	this.classList.remove("hole-info-img");
	this.className += "closeImg ";
	for (var i = 0; i < closeImg.length; i++) {
    closeImg[i].addEventListener('click', shrinkImg, false);
	}
}


function shrinkImg(){
	this.className += "hole-info-img ";
	this.classList.remove("closeImg");
	for (var i = 0; i < holeImg.length; i++) {
    holeImg[i].addEventListener('click', enlargeImg, false);
	}
	this.removeEventListener('click', shrinkImg, false);
}

for (var i = 0; i < square.length; i++) {
    squareArray[i].addEventListener('click', displayInfo, false);
}
function displayInfo(){
	for (var i = 0; i < closeImg.length; i++){
		closeImg[i].className += "hole-info-img ";
		closeImg[i].classList.remove("closeImg");
		for (var i = 0; i < holeImg.length; i++) {
    	holeImg[i].addEventListener('click', enlargeImg, false);
		}
	}
	var holeInfo = document.getElementById("hole-info");
	var index = squareArray.indexOf(this);
	switch (index) {
		case 0://Hole ONE
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-one");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="425px";
			holeInfo.style.top="550px";
			break;
		case 1://Hole TWO
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-two");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="440px";
			holeInfo.style.top="410px";
			break;
		case 2://Hole THREE
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-three");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="395px";
			holeInfo.style.top="460px";
			break;
		case 3://Hole FOUR
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-four");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="335px";
			holeInfo.style.top="360px";
			break;
		case 4://Hole FIVE
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-five");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="305px";
			holeInfo.style.top="310px";
			break;
		case 5://Hole SIX
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-six");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="185px";
			holeInfo.style.top="130px";
			break;	
		case 6://Hole SEVEN
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-seven");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="355px";
			holeInfo.style.top="140px";	
			break;
		case 7://Hole EIGHT
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-eight");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="475px";
			holeInfo.style.top="250px";	
			break;
		case 8://Hole NINE
			var removeInfo = document.getElementsByClassName("hole-info-inner");
			for (var i = 0; i < removeInfo.length; i++) {
    		removeInfo[i].style.display="none"
			}
			var info = document.getElementById("hole-info-nine");
			info.style.display="block";
			holeInfo.style.display="block";
			holeInfo.style.left="485px";
			holeInfo.style.top="530px";
			break;
	}
}

//
var selected= null,
 x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop + 160;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('hole-info').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;
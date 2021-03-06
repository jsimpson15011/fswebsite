$( '#original' ).ready(function() {
var n = 9;
var decimal = n.toString(2);
document.write(decimal);
var slideIndex = 1;
var startTimer = null;
var timer = setInterval(forward, 6000);
var leftBox = document.getElementsByClassName('box-left')[0];
var whiteBox = document.getElementById("whitebox");
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == XMLHttpRequest.DONE) {
    if (xmlhttp.status == 200) {
    var n = (xmlhttp.responseText.match(/jpg/g) || []).length;
	for (i = 1; i < ((n/2)+1); i++) {
    addSlidesToPage(i);
    } 
  }
}
}
xmlhttp.open("GET", "images/slideshow/", true);
xmlhttp.send();
 /* for (var i = 1; i < 4; i++) {
  	addSlidesToPage(i);
  } */

  
function addSlidesToPage(n){
	var slideShowBox = document.getElementById('whitebox');
	var newSlide = document.createElement('DIV');
	var newImg = document.createElement('IMG');
	var mySlides=document.getElementsByClassName('mySlides');
	var newDot= document.createElement('DIV');
	var number=n;
	var imgSrc='images/slideshow/'+number+'.jpg';
	newDot.classList.add('dot');
	newSlide.classList.add('mySlides');
	newImg.src=imgSrc;
	document.body.appendChild(newSlide);
	slideShowBox.insertBefore(newSlide, slideShowBox.children[2]);
	slideShowBox.insertBefore(newDot, slideShowBox.lastChild);
	mySlides[0].insertBefore(newImg, mySlides[0].firstChild);
	$( '.mySlides' ).insertAfter( "#original" );
}

var rightBox = document.getElementsByClassName('box-right')[0];
rightBox.onclick = plusSlides;

var wordBox = document.getElementsByClassName('wordbox')[0];

wordBox.onmouseover = stop;

rightBox.onclick = plusSlides;
rightBox.onmouseover = rightHoverOn;
rightBox.onmouseout = function(){
	whiteBox.addEventListener('mouseover',dimOn,false);
	whiteBox.addEventListener('click',plusSlides,false);
}

leftBox.onclick = minusSlides;
leftBox.onmouseover = leftHoverOn;
leftBox.onmouseout = function(){
	whiteBox.addEventListener('mouseover',dimOn,false);
	whiteBox.addEventListener('click',plusSlides,false);
}


whiteBox.addEventListener('mouseover',dimOn,false);
whiteBox.addEventListener('mouseout',function(){
	leftHoverOff();
	rightHoverOff();
	},false);
whiteBox.addEventListener('click',plusSlides,false);

showSlides(slideIndex);

function stop() {
  clearInterval(timer);
}

function dimOn() {
	var leftArrow = document.getElementsByClassName('arrow-left')[0];
	var rightArrow = document.getElementsByClassName('arrow-right')[0];
	leftBox.style.opacity= .2;
	leftArrow.style.opacity= .2;
	rightBox.style.opacity= .2;
	rightArrow.style.opacity= 1;
}

function leftHoverOn() {
	var leftArrow = document.getElementsByClassName('arrow-left')[0];
	var rightArrow = document.getElementsByClassName('arrow-right')[0];
	leftArrow.style.opacity=1;
	leftBox.style.opacity= .2;
	rightBox.style.opacity= .2;
	rightArrow.style.opacity= .2;
	whiteBox.removeEventListener('mouseover',dimOn,false);
	whiteBox.removeEventListener('click',plusSlides,false);
}

function leftHoverOff() {
	var leftArrow = document.getElementsByClassName('arrow-left')[0];
	leftArrow.style.opacity= 0;
	leftBox.style.opacity = 0;
}

function rightHoverOn() {
	var rightArrow = document.getElementsByClassName('arrow-right')[0];
	var leftArrow = document.getElementsByClassName('arrow-left')[0];
	leftArrow.style.opacity=.2;
	leftBox.style.opacity= .2;
	rightBox.style.opacity= .2;
	rightArrow.style.opacity= 1;
	whiteBox.removeEventListener('mouseover',dimOn,false);
	whiteBox.removeEventListener('click',plusSlides,false);
}

function rightHoverOff() {
	var rightArrow = document.getElementsByClassName('arrow-right')[0];
	rightArrow.style.opacity=0;
	rightBox.style.opacity = 0;
}

function plusSlides() {
  clearInterval(timer);
  /*var startTimer = setInterval(restartTimer,10000000);*/
  showSlides(slideIndex += 1);
}

function minusSlides() {
  	clearInterval(timer);
  	showSlides(slideIndex += -1);
}

function restartTimer(){
	var timer = setInterval(forward, 6000);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function forward() {
	showSlides(slideIndex += 1);
}

function reveal() {
	var event = document.getElementById("bookEvent")

	event.className="z";
	}

function conceal() {
	var event = document.getElementById("bookEvent")
	event.className="hide";
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  $(slides[slideIndex-1]).fadeIn(1000);
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

});
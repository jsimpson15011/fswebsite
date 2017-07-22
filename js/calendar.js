var date = new Date();
var month = date.getMonth();
var monthContainer = document.getElementsByClassName('month');
var next = document.getElementById('next-month');
var prev = document.getElementById('prev-month');
function createBlankBox(){
	var calBox = document.createElement('div');
	var blankBox = calBox.classList.add('cal-void');
}
addBoxToCal();
function addBoxToCal(){
createBlankBox();
//document.monthContainer[6].insertBefore(blankBox, monthContainer.firstChild);
document.body.appendChild();
}


next.addEventListener('click',showNextMonth,false);
prev.addEventListener('click',showPrevMonth,false);
showMonth();
function showMonth() { //Shows the Current Month
	var monthLabel = document.getElementsByClassName('month-name');
	var dayBoxes = document.getElementsByClassName('month');
	switch (month) {
		case 0:
			monthLabel[0].style.display='block';
			dayBoxes[0].style.display='block';
		break;
		case 1:
			monthLabel[1].style.display='block';
			dayBoxes[1].style.display='block';
		break;		
		case 2:
			monthLabel[2].style.display='block';
			dayBoxes[2].style.display='block';
		break;		
		case 3:
			monthLabel[3].style.display='block';
			dayBoxes[3].style.display='block';
		break;		
		case 4:
			monthLabel[4].style.display='block';
			dayBoxes[4].style.display='block';
		break;		
		case 5:
			monthLabel[5].style.display='block';
			dayBoxes[5].style.display='block';
		break;
		case 6:
			monthLabel[6].style.display='block';
			dayBoxes[6].style.display='block';
		break;
		case 7:
			monthLabel[7].style.display='block';
			dayBoxes[7].style.display='block';
		break;
		case 8:
			monthLabel[8].style.display='block';
			dayBoxes[8].style.display='block';
		break;
		case 9:
			monthLabel[9].style.display='block';
			dayBoxes[9].style.display='block';
		break;
		case 10:
			monthLabel[10].style.display='block';
			dayBoxes[10].style.display='block';
		break;
		case 11:
			monthLabel[11].style.display='block';
			dayBoxes[11].style.display='block';
		break;													
	}
};
function showNextMonth(){
	month+=1;
	if(month>10){
		next.style.visibility='hidden';
		month=11;
	}
	if(month===1){
		prev.style.visibility='visible';
	}
	var monthLabel = document.getElementsByClassName('month-name');
	var dayBoxes = document.getElementsByClassName('month');
	for (var i = 0; i < monthLabel.length; i++) {
		monthLabel[i].style.display='none';
	}
	for (var i = 0; i < dayBoxes.length; i++) {
		dayBoxes[i].style.display='none';
	}
	showMonth();
}
function showPrevMonth(){
	month-=1;
	if(month<1){
	prev.style.visibility='hidden';
	month=0
	}
	if(month===10){
		next.style.visibility='visible'
	}
	var monthLabel = document.getElementsByClassName('month-name');
	var dayBoxes = document.getElementsByClassName('month');
	for (var i = 0; i < monthLabel.length; i++) {
		monthLabel[i].style.display='none';
	}
	for (var i = 0; i < dayBoxes.length; i++) {
		dayBoxes[i].style.display='none';
	}
	showMonth();
}
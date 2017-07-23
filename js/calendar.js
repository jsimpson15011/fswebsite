var date = new Date();
var month = date.getMonth();
var monthContainer = document.getElementsByClassName('month');
var next = document.getElementById('next-month');
var prev = document.getElementById('prev-month');
var dateCalcArray = [dateCalcWithLeap(6),dateCalcWithLeap(2),dateCalc(3),dateCalc(6),dateCalc(1),dateCalc(4),dateCalc(6),dateCalc(2),dateCalc(5),dateCalc(0),dateCalc(3),dateCalc(5)];

for (var i = 0; i<dateCalcArray[0]; i++) {
	createBlankBox(0);
}
for (var i = 0; i<dateCalcArray[1]; i++) {
	createBlankBox(1);
}
for (var i = 0; i<dateCalcArray[2]; i++) {
	createBlankBox(2);
}
for (var i = 0; i<dateCalcArray[3]; i++) {
	createBlankBox(3);
}
for (var i = 0; i<dateCalcArray[4]; i++) {
	createBlankBox(4);
}
for (var i = 0; i<dateCalcArray[5]; i++) {
	createBlankBox(5);
}
for (var i = 0; i<dateCalcArray[6]; i++) {
	createBlankBox(6);
}
for (var i = 0; i<dateCalcArray[7]; i++) {
	createBlankBox(7);
}
for (var i = 0; i<dateCalcArray[8]; i++) {
	createBlankBox(8);
}
for (var i = 0; i<dateCalcArray[9]; i++) {
	createBlankBox(9);
}
for (var i = 0; i<dateCalcArray[10]; i++) {
	createBlankBox(10);
}
for (var i = 0; i<dateCalcArray[11]; i++) {
	createBlankBox(11);
}

function dateCalc(n){//Calculates how many date boxes need to be added to beggining of month
	var year = date.getFullYear();
	var calc = n+(year-2017);
	if(calc>6){
		calc-=7;
	}
	return calc;
}
function dateCalcWithLeap(n){//Calculates how many date boxes need to be added to beggining of month
	var year = date.getFullYear();
	var calc = (n+1)+(year-2017);
	if(calc>6){
		calc -=7 ;
	}
	return calc;
}
function createBlankBox(m){
	var calBox = document.createElement('DIV');
	calBox.classList.add('cal-void');
	monthContainer[m].insertBefore(calBox, monthContainer[m].children[7]);
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
			var year = date.getFullYear();
			monthLabel[1].style.display='block';
			dayBoxes[1].style.display='block';
			if (year%4==0) {
				var leapDay = document.getElementById('leap-day');
				leapDay.style.display='block';
			}
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
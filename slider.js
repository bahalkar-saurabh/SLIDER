// slider.js


// variable declaration
var atr=document.getElementsByClassName("box");
var alll=document.getElementById('alll');
var selecter="nan";
var fselector;
var lselector;
var cgeren = "#18F38C";
var cblue = "#5E89FB";
var timelable = document.getElementById('timelable');
var st,et;
//function for num div
function divnum(str) {
  var a = str.replace(/box/i,"");
  return parseInt(a);
}
function filltime() {
  st = divnum(fselector.id);
  et = divnum(fselector.id);
  timelable.innerHTML = st +"-"+ (et+1);
}
// function on mouse down
function fb1(evt) {
  if(evt.target.id!="alll"){
     resetg();
    selecter="non";
    fselector = evt.target;
    lselector = evt.target;
    evt.target.style.background=cgeren;
    filltime();
    // document.getElementById(evt.target.id).style.background=cgeren;
  }
}
// function on mouse over
function fb2(evt) {
  if(selecter!="nan"){
  if(evt.target.id!="alll"){
  evt.target.style.background=cgeren;
  lselector = evt.target;
  fillg(fselector,lselector);
  
  }filltime();
  }
}
// function on mouse up
function fb3() {

  selecter="nan";
}

// event manager


/*

i want to create new things
like when i click it should take only
line of selected from started to end

1:  create function which take first and end node and fill all them 

2:  create another function which reset the all color

*/

//funcion 1st
function fillg(start,end) {
  // body...
  // 1 call resetg function
 resetg();
  // 2 find no of cell
  var a = fcell(start);
  var b = fcell(end);
  // 3 set min max
  var mn = min(a,b);
  var mx = max(a,b);
  // 4 create loop
  for (var i = mn; i <= mx; i++) {
  	atr[i].style.background = cgeren;
  }
  // 5 color them all
}

function min(a,b) {
  if(a>b) a=b;
  return a;
}
function max(a,b) {
  if(a<b) a=b;
  return a;
}
function fcell(ele) {
	for (var i = atr.length - 1; i >= 0; i--) {
		if(atr[i].id == ele.id){return i;}	
  }
	// body...
}

function resetg() {
  // body...
  // for now set all color to blue
  for (var i = atr.length - 1; i >= 0; i--) {
  	atr[i].style.background = cblue;
  }
  // later we set to different color
}

alll.addEventListener("mousedown",fb1,false);
alll.addEventListener("mouseover",fb2,false);
alll.addEventListener("mouseup",fb3,false);
// 顯示左側選單
var menuIsOpen = false;
var burgerIsClick = false;
function ShowMenu(){
	var navBelow = document.getElementById("navBelow");
	navBelow.style.visibility = menuIsOpen ? "hidden" : "visible";
	menuIsOpen = !menuIsOpen;
	
	var burger = document.getElementById("burger");
	burger.style.backgroundColor = burgerIsClick ? "#4267b2" : "#4267b2";
	burger.style.borderRadius = "999em";
	burgerIsClick = !burgerIsClick;
	
}

// 關閉左側 menu
function closeMenu(){
	var burger = document.getElementById("burger");
	burger.click();
}

function showAnsOne(){
	var answerOne = document.getElementById("answerOne");
	answerOne.style.visibility = "visible";	
}

function showAnsTwo(){
	var answerTwo = document.getElementById("answerTwo");
	answerTwo.style.visibility = "visible";	
}

function showAnsThree(){
	var answerThree = document.getElementById("answerThree");
	answerThree.style.visibility = "visible";	
}
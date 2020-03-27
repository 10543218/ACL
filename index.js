var helloText1 = "大家好\n歡迎大家一起學習ACL\n請不要把本文章的全部內容都複製下來自己使用";
var helloText2 = "\n筆者做這些花了蠻多的時間與心血\n謝謝大家的配合";
var helloText3 = "\n\n如果想要再新增什麼功能\n歡迎跟筆者聯絡~";
alert(helloText1+helloText2+helloText3);

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

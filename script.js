var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li=document.querySelectorAll("li");
var deleteButton=document.querySelectorAll(".delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var list = document.createElement("li");
	list.appendChild(document.createTextNode(input.value));
	var del =document.createElement("button");
	del.appendChild(document.createTextNode("delete"));
	del.classList.add("delete");
	list.appendChild(del);
	ul.appendChild(list);
	input.value = "";
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();	
		del();
		strike();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		del();
		strike();
	}
}

function togglelist(){
	this.classList.toggle("done");
	}

function removeParent(){
		this.parentNode.remove();
	}

function strike(){
	li=document.querySelectorAll("li");	
	for(var i=0;i<li.length;i++){
		li[i].addEventListener("click",togglelist);	
	}	
}	
function del() {
	deleteButton=document.querySelectorAll(".delete");
	for(var i=0;i<deleteButton.length;i++){

		deleteButton[i].addEventListener("click",removeParent);
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

strike();
del();
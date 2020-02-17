
// var button= document.getElementById("enter");
// var input= document.getElementById("userinput");
// var ul= document.querySelector("ul");
// // var li=document.getElementsByTagName("li")[0];


// function toggleDone(){
// 	li.classList.toggle("done");
// }


// function inputValueLength() {
// 	return input.value.length;
// }


// function createList(){
// 	var li= document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	li.addEventListener("click", toggleDone);
// 	ul.appendChild(li);
// 	input.value = "";

// }

// function addlistAfterClick() {
// 	if (inputValueLength() > 0){
// 		createList();
// 	}
// }

// function addlistAfterKeypress(event){
// 	if (inputValueLength() > 0 && event.which===13){
// 		createList();
// 	}
// }

// button.addEventListener("click", addlistAfterClick);
// input.addEventListener("keypress", addlistAfterKeypress);



var addBtn = document.getElementById('add');
var input = document.getElementById('userInput');
var ul = document.getElementsByTagName('ul')[0];

// Check length of input field
function addItemLength() {
  return document.getElementById('userInput').value.length;
}
// Check how many li elements exist
function checkLis(){
  return document.getElementsByTagName('li').length;
}
//create new list item
function createListItem() {
  // Create li element, style it and append it to ul
  var li = document.createElement('li');
  li.classList.add('listItem');
  li.append(document.createTextNode(input.value));
  li.addEventListener('click', toggleDone);
  ul.appendChild(li);
  input.value = "";
  
  // Create delete button, style it and append it to li
  var delBtn = document.createElement('button');
  var delX = document.createElement('i');
  delX.classList.add('fas', 'fa-times');
  delBtn.classList.add('custBtn');
  delBtn.appendChild(delX);
  delBtn.addEventListener('click', delItem);
  li.append(delBtn);
  
  // Hide empty list text if li's exist
  if(checkLis() > 0) {
    var emptyList = document.querySelector('h2');
    emptyList.style.display = "none";
  }
  
  // Toggle line-through on click
  function toggleDone() {
    li.classList.toggle('done');
  }
  
  // Delete item
  function delItem() {
    li.remove();
    if(checkLis() == 0) {
      var emptyList = document.querySelector('h2');
      emptyList.style.display = "block";
    }
  
  }
}

// On click
function addClick() {
  if(addItemLength() > 0) {
    createListItem();
  }
}

// On keypress enter
function addKey(event) {
  if(addItemLength() > 0 && event.keyCode == 13) {
    createListItem();
  }
}

addBtn.addEventListener('click', addClick);
input.addEventListener('keypress', addKey);

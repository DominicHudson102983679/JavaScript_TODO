/*
const EntryInput = document.getElementById("EntryInput");
const myUL = document.getElementById("myUL");
const clearBtn = document.getElementById("clear-tasks");
const taskInput = document.getElementById("taskTitle");

loadEventListeners();

function loadEventListeners(){
  EntryInput.addEventListener("submit", addTask)
}

function addTask(e) {
  if(EntryInput.value === ''){
    alert("No Task Entered");
  }

  else {

  const li = document.createElement("li");
  li.className = "li";
  li.appendChild(document.createTextNode(EntryInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  li.appendChild(link)

  EntryInput.appendChild(li);

  taskInput.value = '';}

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


  e.preventDefault();
}
*/



loadEventListeners();

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}




function newElement() {
    // creates a li element to build the list
    var li = document.createElement("li");
    // converts text entered into bar into inputValue
    var inputValue = document.getElementById("EntryInput").value;
    // stores text entered into bar as text
    var t = document.createTextNode(inputValue);
    //adds the text that was input onto the previously built li element
    li.appendChild(t);

    // 'no text entered' pop up alert
    if (inputValue === '') {
      alert("No Text Entered");
    } 
    // if field isnt left blank, calls the ul element and adds the text as a li element
    else {
      document.getElementById("myUL").appendChild(li);
    }
 
    //clears bar after entry
    document.getElementById("EntryInput").value = "";
    }

    /*
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  */
  
 
 function clearElement() {
  document.getElementById("myUL").value = "";
}



/* ---------- attempted js going off of a different Udemy js tutorial, couldnt get it working

const EntryInput = document.getElementById("EntryInput");
const myUL = document.getElementById("myUL");
const clearBtn = document.getElementById("clear-tasks");
const taskInput = document.getElementById("taskTitle");

loadEventListeners();

function loadEventListeners(){
  EntryInput.addEventListener("submit", addTask)
}

function addTask(e) {
  if(EntryInput.value === ''){
    alert("No Task Entered");
  }

  else {

  const li = document.createElement("li");
  li.className = "li";
  li.appendChild(document.createTextNode(EntryInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  li.appendChild(link)

  EntryInput.appendChild(li);

  taskInput.value = '';}

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


  e.preventDefault();
}
*/

  
  

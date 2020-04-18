
const EntryInput = document.getElementById("EntryInput");
const myUL = document.getElementById("myUL");
const clearBtn = document.getElementById("clear-tasks");
const taskInput = document.getElementById("taskTitle");

loadEventListeners();

function loadEventListeners(){
  EntryInput.addEventListener("submit", addTask)
}

function newElement(e) {
  if(taskInput.value === ''){
    alert("No Task Entered");
  }

  else {

  const li = document.createElement("li");
  li.className = "myUL";
  li.appendChild(document.createTextNode(EntryInput.value));

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  li.appendChild(link)

  taskInput.appendChild(li);

  taskInput.value = '';}

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }


  e.preventDefault();
}




/*

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("EntryInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("No Text Entered");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("EntryInput").value = "";
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  
  */
  
  

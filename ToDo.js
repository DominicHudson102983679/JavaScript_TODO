
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
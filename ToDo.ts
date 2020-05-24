
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// var close = document.getElementsByClassName("close");
// ^error = "Duplicate identifier 'close'" fixed in .ts by commenting out line
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// upto 16:51 in 'Typescript/NodeJS collab ultra recordsing'


function newElement() {
    // creates a li element to build the list
    var li = document.createElement("li");
    // converts text entered into bar into inputValue
    var inputValue = (<HTMLInputElement>document.getElementById("EntryInput")).value;
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
    (<HTMLInputElement>document.getElementById("EntryInput")).value = "";
    }

    /*
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  */
  
 document.getElementById("clearBtn").addEventListener("click", clearAll);

 function clearAll() {
  addEventListener;
  document.getElementById("myUL").innerHTML = "";
}

//  function clearElement() {
//   document.getElementById("myUL").reset();
// }





  
  

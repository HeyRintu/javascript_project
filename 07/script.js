
let myNodeList = document.getElementsByTagName("li");
console.log(myNodeList);

for(let i = 0; i < myNodeList.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for(let i = 0 ; i< close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}


let myUl = document.getElementById("myList");
myUl.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);

function addTask() {
    
    let inputText = document.getElementById("input").value;

    if(inputText == null || inputText ==""){
        alert("List can't be empty");
        return false;
    }

    let myUl = document.getElementById("myList");

    const list = document.createElement("li");

    const listText = document.createTextNode(inputText);

    list.appendChild(listText);

    myUl.appendChild(list);

    document.getElementById("input").value = '';

    let spanClose = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    spanClose.className = "close";
    spanClose.appendChild(txt)
    list.appendChild(spanClose);

    
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}
}


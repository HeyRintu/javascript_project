
setInterval(function(){
    let inputText = document.getElementById('input').value;
    let textCount = inputText.length;
    document.getElementById('output').innerHTML = textCount;
    },10)
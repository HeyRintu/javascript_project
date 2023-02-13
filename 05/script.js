function submit() {
    let num1 = document.querySelector("#input").value;
    function inverse(n) {
        n = n + "";
        return n.split("").reverse().join("");
    }
    
    
    num2 = (inverse(num1))
    
    if(num1===num2){
        console.log("it is palindrone number, " + num2);
        document.getElementById("output").innerHTML = " Palindrome"
    }
    else{
        console.log("it is not palindrone number");
        document.getElementById("output").innerHTML = " Not Palindrome"
    }
    
}




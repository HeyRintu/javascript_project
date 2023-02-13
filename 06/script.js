
function validForm(){



    let userName = document.form.username.value;
    let email = document.form.email.value;
    let password = document.form.password.value;
    let password2 = document.form.password2.value;

    if(userName == null || userName == ""){
        alert("User Name can't be blank");
        return false;
    }
    else if(email == null || email == ""){
        alert("Email can't be blank");
        return false;
    }
    else if(password == null || password == ""){
        alert("Password can't be blank");
        return false;
    }
    else if(password2 == null || password2 == ""){
        alert("Confirm Password can't be blank");
        return false;
    }
    else if(password.length < 6){
        alert("Password must be at least 6 characters long.")
        return false;
    }
    else if(password != password2){
        alert("Password doesn't match")
        return false;
    }
    
}




var username = document.getElementById("username");
var password = document.getElementById("password");

function fn(e) {
    e.preventDefault();
    var usernamevalue= username.value
    var passwordvalue= password.value
    console.log(usernamevalue,passwordvalue);
    if (usernamevalue=="y.v.pandu999@gmail.com"&& passwordvalue=="14324300"){
        alert("valdiation has beeen sucessful")
    
    }
    else{
        alert("authentication failed")
    }
    
}


var form = document.getElementById("form");
form.addEventListener("submit",fn)

alert('hai')
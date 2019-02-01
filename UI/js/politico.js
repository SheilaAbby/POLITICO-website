document.getElementById("footer").innerHTML =
"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() 
+ "<p id='credits'>Layout by Abigael</p>"

function validation (){
 //asign the variable the value of the input field
var citizen_id = document.login.citizen_id.value;
var password = document.login.pswd.value;

//variables for signup form fields
var citizen_name = document.signup.citizen_name.value;
var citizen = document.signup.citizen_id.value;
var pswd1 = document.signup.password1.value;
var pswd2 = document.signup.password2.value;

//check for empty fields in login form
if(citizen_id == "" || password == ""){
    document.getElementById("error").innerHTML="Required.Please fill";
    return false;
}

 //check for empty fields in signup form
 if(citizen_name == citizen == pswd1 ==  pswd2 == ""){
    document.getElementById("errors").innerHTML="Required.Please fill the fields";
    return false;
}
}
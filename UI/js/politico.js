
    document.getElementById("footer").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() 
	+ "<p id='credits'>Layout by Abigael</p>"
    
function validation (){
     //asign the variable the value of the input field
    var citizen_id = document.login.citizen_id.value;

    var password = document.login.pswd.value;

    //check for empty fields
    if(citizen_id == "" || pswd == ""){
        document.getElementById("error").innerHTML="Required.Please fill";
        return false;
    }
}
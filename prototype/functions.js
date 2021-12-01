function displayUser(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;

    if(!functions.fNameLength(fname)){
        alert("First name is not long enough. Please re-enter.");
    };
    if(!functions.lNameLength(lname)){
        alert("Last name is not long enough. Please re-enter.");
    };
    if(!functions.validEmail(email)){
        alert("Email is not valid. Must be of form John.Smith@example.com Please re-enter.");

    }

}

function displayEvent(){

    var name = document.getElementById("fullName").value;

    if(!functions.nameLength(name)){
        alert("Full name is not long enough. Please re-enter")
    }
}

const functions = {
    nameLength: (name) => {
        if (name.length >= 8){
            return true;
        }
        else{
            return false;
        }
    },
    fNameLength: (fname) => {
        if (fname.length >= 3){
            return true;
        }
        else{
            return false;
        }
    },
    lNameLength: (lname) => {
        if (lname.length >= 4){
            return true;
        }
        else{
            return false;
        }
    },
    validEmail: (email) => {
        if(email.includes("@")){
            return true;
        }
        else{
            return false;
        }
    }
}

module.exports = functions;
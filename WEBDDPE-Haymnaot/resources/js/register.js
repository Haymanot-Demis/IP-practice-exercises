function validateInputs(){
  let myform = document.forms["reg-form"]["cpassword"].value;
  let val = document.forms["reg-form"]["password"].value;
  if(myform != val){
    alert("Please confirm your password");
    return false;
  }
}

function validateName(){
  let myform = document.forms["reg-form"]["first-name"].value;
  if(myform == ""){
    alert("Please fill out your first name");
    return false;
  }
}
function validatePhone(){
  let myform = document.forms["reg-form"]["phone"].value;
  if(!myform.includes("+251")){
    alert("phone number is required");
    return false;
  }
}

function validatePassword(){
    if(document.getElementById("pass").value != "123456"){
        alert("incorrect username or password");
        return false;
    }
} 

let element = document.getElementById("phoneNum");
element.addEventListener("submit",validatePhone());

form.addEventListener('focus', (event) => {
  event.target.style.background = 'red';
}, true);

form.addEventListener('blur', (event) => {
  event.target.style.background = 'green';
}, true);

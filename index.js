

let btn = document.querySelector('#btn');

function validateForm(emailInput) {
  let fName = document.forms["form"]["fname"].value;
  let email = document.forms["form"]["email"].value;
  let number = document.forms["form"]["number"].value;
  let gender = document.forms["form"]["gender"].value;
  let password = document.forms["form"]["password"].value;
  
  console.log(fName)
  
  if (fName == "" || fName == null) {
    alert("Name must be filled out");
    return false;
  }

  if (email == "" || email == null ) {
    alert("Email must be filled out");
    return false;
  }

  if (number == "" || number == null || number.length < 11) {
    alert("Number not valid or not 11 digits");
    return false;
  }

  if (gender == "select gender" || number == null ) {
    alert("Select your gender");
    return false;
  }

  if (password == "" || password == null) {
    alert("Password must be filled out");
    return false;
  }
 
  validateEmail(emailInput)

  
    alert('Submission Successful')
   

  




  
  
}

 function validateEmail(emailInput) {
   let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   if (emailInput.value.match(mailFormat)) {
     
    
     return true;
   } else {
     alert("You have entered an invalid email address!");
     document.form.email.focus();
     return false;
   }
 }

// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     validateForm();
    
// })



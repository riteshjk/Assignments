//add your js code here
let form = document.getElementById("signUpForm");

form.addEventListener("submit",formData);


function formData(e){
    e.preventDefault();
    let fullName = e.target.fullname.value;
    let email = e.target.email.value;
    let number = e.target.phone.value;
    let password = e.target.password.value;

    let obj={
        fullName,
        email,
        number,
        password
    }
  console.log(obj)
    localStorage.setItem("userInfo",JSON.stringify(obj))
}

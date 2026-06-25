const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");

nameInput.addEventListener("input", () => {
previewName.textContent = "Name: " + nameInput.value;
});

emailInput.addEventListener("input", () => {
previewEmail.textContent = "Email: " + emailInput.value;
});

passwordInput.addEventListener("input", () => {

let password = passwordInput.value;
let strength = document.getElementById("strength");

if(password.length < 6){
strength.innerHTML = "🔴 Weak";
strength.style.color = "red";
}
else if(password.match(/[A-Z]/) && password.match(/[0-9]/)){
strength.innerHTML = "🟡 Medium";
strength.style.color = "orange";
}
if(
password.length >= 8 &&
password.match(/[A-Z]/) &&
password.match(/[a-z]/) &&
password.match(/[0-9]/) &&
password.match(/[^A-Za-z0-9]/)
){
strength.innerHTML = "🟢 Strong";
strength.style.color = "lime";
}

});

document.getElementById("addSkill").addEventListener("click",()=>{

let skill=document.getElementById("skillInput").value;

if(skill.trim()!==""){

let li=document.createElement("li");
li.textContent=skill;

document.getElementById("skillList").appendChild(li);

document.getElementById("skillInput").value="";
}

});

document.getElementById("themeBtn").addEventListener("click",()=>{
document.body.classList.toggle("dark");
});

form.addEventListener("submit",(e)=>{

e.preventDefault();

let valid=true;

if(nameInput.value.length<3){
document.getElementById("nameError").innerHTML="Minimum 3 characters";
valid=false;
}
else{
document.getElementById("nameError").innerHTML="";
}

if(!emailInput.value.includes("@")){
document.getElementById("emailError").innerHTML="Invalid email";
valid=false;
}
else{
document.getElementById("emailError").innerHTML="";
}

if(passwordInput.value.length<8){
document.getElementById("passwordError").innerHTML="Password too short";
valid=false;
}
else{
document.getElementById("passwordError").innerHTML="";
}

if(valid){

document.getElementById("successMessage").innerHTML=
"🎉 Registration Successful!";

form.reset();

previewName.innerHTML="Name: -";
previewEmail.innerHTML="Email: -";

document.getElementById("strength").innerHTML="";
}

});

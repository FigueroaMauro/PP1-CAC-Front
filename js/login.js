
let emailError = document.querySelector("#error-email");
let passError = document.querySelector("#error-pass");

const btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", ()=>{
    dataValidate();
})

const dataValidate = ()=>{
    cleanError();
    emailValidate();
    passValidate(); 
}


const  emailValidate= ()=>{
    let inpEmail = document.querySelector("#inp-email");
    if(inpEmail.value.trim() == ""){
        emailError.innerHTML = "Este campo es obligatorio y no debe estar vacío"
    }
}

const  passValidate= ()=>{
    let inpPass = document.querySelector("#inp-pass");
    if(inpPass.value.trim() == ""){
        passError.innerHTML = "Este campo es obligatorio y no debe estar vacío"
    }
}

const cleanError = ()=>{
    emailError.innerHTML = "";
    passError.innerHTML = "";
}





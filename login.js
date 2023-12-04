function fazerLogin() {
    const emailLogin = document.getElementById("login-email").value;
    const senhaLogin = document.getElementById("login-senha").value;
    const msgLogin = document.getElementById("#msg-login")

    if(emailLogin === "") {
        msgLogin.classList.add("error-msg");
        msgLogin.textContent = "Entre com o email cadastrado"
    } else {      
        if(senhaLogin === "") {
            msgLogin.classList.add("error-msg");
            msgLogin.textContent = "Entre com a senha cadastrado"
            
        } else {
            location.href = "main.html"
        }       
    }
}

function fazerSignup() {
    const nomeSignup = document.getElementById("signup-nome").value;
    const emailSignup = document.getElementById("signup-email").value;
    const senhaSignup = document.getElementById("signup-senha").value;

    if(nomeSignup === "") {
        // alert("Favor preencher um nome para cadastro")
    } else {
        if(emailSignup === "") {
            // alert("Favor preencher um email")
        } else {      
            if(senhaSignup === "") {
                // alert("Favor preencher uma senha")            
            } else {
                location.href = "main.html"
            }       
        }
    }
}
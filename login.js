function fazerLogin() {
    const emailLogin = document.getElementById("login-email").value;
    const senhaLogin = document.getElementById("login-senha").value;
    const msgErrorLogin = document.getElementById("msg-login");

    if( (emailLogin === "") || (senhaLogin === "") ) {
        msgErrorLogin.textContent = "Entre com os dados cadastrados";
        msgErrorLogin.classList = "error-msg";
        setInterval(() => {
            msgErrorLogin.textContent = "";
            msgErrorLogin.classList = ""
        }, 1500);
    } else {
        location.href = "main.html"
    }       
}

function fazerSignup() {
    const nomeSignup = document.getElementById("signup-nome").value;
    const emailSignup = document.getElementById("signup-email").value;
    const senhaSignup = document.getElementById("signup-senha").value;
    const msgErrorSignup = document.getElementById("msg-signup");
    
    if( (nomeSignup === "") || (emailSignup === "") || (senhaSignup === "") ){
        msgErrorSignup.textContent = "Entre com dados válidos para se cadastrar";
        msgErrorSignup.classList = "error-msg";
        setInterval(() => {
            msgErrorSignup.textContent = "";
            msgErrorSignup.classList = "";
        }, 1500);
    } else {
        location.href = "main.html"
    }
}
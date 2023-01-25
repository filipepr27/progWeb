let email = null
let enviar

function clickMenu() {
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
        // burger.src = "../imagens/ic-close.png"
    }
}

function enviarMensagem() {
    
    email = document.getElementById("email").value
    send.action = "mailto:" + email
}

function cadastraEmail() {
    email = document.getElementById("email").value; 
    window.alert("Cadastro realizado!")
}



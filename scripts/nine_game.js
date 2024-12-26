let password = document.getElementById("password")
let eye = document.querySelector(".eye")
let log_button = document.querySelector(".log_button")
let beta  = true
let contanier = document.querySelector(".contanier")
eye.onclick = ()=> {
    if(beta) {
        eye.src = "../photos/nineth_game_photo/eye.png"
        password.type = "text"
        beta = false
    }
    else {
        beta = true
        eye.src = "../photos/nineth_game_photo/eye-x.png"
        password.type = "password"
    }
}
log_button.onclick = ()=> {
    contanier.style.display = `none`
}
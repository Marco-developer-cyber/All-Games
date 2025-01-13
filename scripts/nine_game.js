let password = document.getElementById("password");
let email = document.getElementById("email");
let forgot_imp = document.getElementById("forgot_imp");
let eye = document.querySelector(".eye");
let wrong = document.querySelector(".wrong");
let log_button = document.querySelectorAll(".log_button");
let beta = true;
let contanier = document.querySelector(".contanier");
let section = document.querySelector("section");
let textForgot = document.querySelector(".log_href");
let nav = document.querySelector("nav");
eye.onclick = () => {
  if (beta) {
    eye.src = "../photos/nineth_game_photo/eye.png";
    password.type = "text";
    beta = false;
  } else {
    beta = true;
    eye.src = "../photos/nineth_game_photo/eye-x.png";
    password.type = "password";
  }
};
log_button.forEach((element) => {
  element.onclick = () => {
    if (
      ("mercedes" == email.value && "mercedes" == password.value) ||
      forgot_imp.value == "mercedes"
    ) {
      contanier.style.display = `none`;
      nav.style.display = 'none'
      section.style.display = "block";
    } else {
      wrong.style.display = "block";
    }
  };
});
textForgot.onclick = () => {
  contanier.style.display = `none`;
  nav.style.display = `flex`;
};
let i = document.querySelector(".controls i")
let controls = document.querySelector(".controls")
let cnt = true
i.onclick = ()=> {
if(cnt) {
    cnt = false
    controls.style.transform = 'translateX(0%)'
    controls.style.boxShadow = '0 0 10px yellow'
}
else {
    cnt = true
    controls.style.transform = 'translateX(-87%)'
    controls.style.boxShadow = 'none'
}
}

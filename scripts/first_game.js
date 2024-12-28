function run() {
    let input = parseInt(document.getElementById("input").value);
    let b = input % 10
    let c = Math.floor(input / 100)
    let d = Math.floor((input / 10) % 10)
    let yellow = document.querySelector(".numbers_cont1")
    let green = document.querySelector(".numbers_cont2")
    let blue = document.querySelector(".numbers_cont3")
    yellow.innerHTML = c
    green.innerHTML = d
    blue.innerHTML = b
}

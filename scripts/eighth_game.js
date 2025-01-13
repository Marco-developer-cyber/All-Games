let maydon = document.querySelector(".maydon")
let r = document.querySelector(".round")



let positionX = 0
let positionY = 0

let stepX = 6
let stepY = 6

function run(lol) {
    positionX += stepX
    positionY += stepY

    if (lol.key == "g") {
        positionX -= stepX
        positionY -= stepY
    }
    else if (lol.key == "f") {
        positionY += stepY
        positionX += stepX
    }

    r.style.transform = `translate(${positionX}px, ${positionY}px)`

}
window.addEventListener("keydown", run)

function beta() {
    positionX += stepX
    positionY += stepY

    if (positionX + stepX > 550 || positionX + stepX < 0) {
        stepX = -stepX
    }
    if (positionY + stepY > 630 || positionY + stepY < 0) {
        stepY = -stepY
    }

    r.style.transform = `translate(${positionX}px, ${positionY}px)`

    requestAnimationFrame(beta)
}
beta();
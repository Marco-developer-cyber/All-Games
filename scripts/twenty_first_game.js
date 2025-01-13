let rasm = [
    "ananas.png",
    "banan.png",
    "gilos.png",
    "malina.png",
    "nok.png",
    "olma.png",
    "qoziqorin.png",
    "shaftoli.png",
    "tarvuz.png",
    "uzum.png",
    "ananas.png",
    "banan.png",
    "gilos.png",
    "malina.png",
    "nok.png",
    "olma.png",
    "qoziqorin.png",
    "shaftoli.png",
    "tarvuz.png",
    "uzum.png",
    "ananas.png",
    "banan.png",
    "gilos.png",
    "malina.png",
    "nok.png",
    "olma.png",
    "qoziqorin.png",
    "shaftoli.png",
    "tarvuz.png",
    "uzum.png"
]
let rasm2 = [...rasm]
let rasm3 = [...rasm]

let colum = document.querySelectorAll(".colum")

let col1 = document.querySelector(".col_1")
let col2 = document.querySelector(".col_2")
let col3 = document.querySelector(".col_3")

for (let i = 1; i <= 20; i++) {
    let rand1 = Math.trunc(Math.random() * 100) % 30
    let rand2 = Math.trunc(Math.random() * 100) % 30

    let q = rasm[rand1]
    rasm[rand1] = rasm[rand2]
    rasm[rand2] = q

    let rand3 = Math.trunc(Math.random() * 100) % 30
    let rand4 = Math.trunc(Math.random() * 100) % 30

    let w = rasm2[rand3]
    rasm2[rand3] = rasm2[rand4]
    rasm2[rand4] = w

    let rand5 = Math.trunc(Math.random() * 100) % 30
    let rand6 = Math.trunc(Math.random() * 100) % 30

    let r = rasm3[rand5]
    rasm3[rand5] = rasm3[rand6]
    rasm3[rand6] = r
}

for (let i = 1; i <= 30; i++) {
    let img = document.createElement("img")
    let img2 = document.createElement("img")
    let img3 = document.createElement("img")
    img.src = "../photos/twenty_first_game_photos/" + rasm[i]
    img2.src = "../photos/twenty_first_game_photos/" + rasm2[i]
    img3.src = "../photos/twenty_first_game_photos/" + rasm3[i]
    col1.appendChild(img)
    col2.appendChild(img2)
    col3.appendChild(img3)
}

let col1_photo = document.querySelectorAll(".col_1 img")
let col2_photo = document.querySelectorAll(".col_2 img")
let col3_photo = document.querySelectorAll(".col_3 img")
let score_ani = document.querySelector(".score_ani")
let score = document.querySelector(".score")
let s = 0
window.addEventListener('keypress', (e) => {
    let rand = Math.floor(Math.random() * 15)
    let rand7 = Math.floor(Math.random() * 15)
    let rand8 = Math.floor(Math.random() * 15)
    if (e.key == "Enter") {
        col1_photo.forEach(item => {
            item.style.transform = `translateY(-${rand * 100}%)`
        })
        col2_photo.forEach(item2 => {
            item2.style.transform = `translateY(-${rand7 * 100}%)`
        })
        col3_photo.forEach(item3 => {
            item3.style.transform = `translateY(-${rand8 * 100}%)`
        })


        if (rasm.src == rasm2.src && rasm2.src == rasm3.src) {
            s += 5
            score.textContent = s
            score_ani.style.display = 'block'
            score_ani.textContent = "Siz 5 ochko qo`lga kiritingiz"
            setTimeout(() => {
                score_ani.style.display = 'none'
            }, 1000)
        }
        else if (rasm.src <= rasm2.src && rasm2.src <= rasm3.src || rasm.src >= rasm2.src && rasm2.src >= rasm3.src || rasm.src >= rasm2.src && rasm2.src <= rasm3.src || rasm.src <= rasm2.src && rasm2.src >= rasm3.src) {
            s += 3
            score.textContent = s
            score_ani.style.display = 'block'
            score_ani.textContent = "Siz 3 ochko qo`lga kiritingiz"
            setTimeout(() => {
                score_ani.style.display = 'none'
            }, 1000)
        }
    }
})
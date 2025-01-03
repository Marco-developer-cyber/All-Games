let hayvon = [
  "ayiq.jpg",
  "fil.jpg",
  "ilon.jpg",
  "qoplon.jpg",
  "quyon.jpg",
  "tiger.jpg",
  "ayiq.jpg",
  "fil.jpg",
  "ilon.jpg",
  "qoplon.jpg",
  "quyon.jpg",
  "tiger.jpg",
];
let animal = document.querySelectorAll(".box")

for (let i = 0; i <= 11; i++) {
    animal[i].src = "../photos/twentieth_game_photos/back.png"
}
window.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
        for (let u = 0; u <= 50; u++) {
            let rand1 = Math.trunc(Math.random() * 100) % 12
            let rand2 = Math.trunc(Math.random() * 100) % 12

            let t = hayvon[rand1]
            hayvon[rand1] = hayvon[rand2]
            hayvon[rand2] = t
        }
        for (let i = 0; i <= 11; i++) {
            animal[i].src = "../photos/twentieth_game_photos/back.png"
        }
    }
})
let cnt = 0
let firstCard = null
let secondCard = null

animal.forEach((item, index) => {
    item.onclick = () => {
        cnt++

        item.style.transform = 'rotateY(180deg)'
        setTimeout(function () {
            item.src ="../photos/twentieth_game_photos/" +  hayvon[index]

            if (cnt == 1) {
                firstCard = item
                console.log(firstCard.src)
            }
            else if (cnt == 2) {
                secondCard = item
            }



        }, 300)

        setTimeout(function () {
            if (firstCard != null && secondCard != null) {
                if (firstCard.src != secondCard.src && cnt == 2) {
                    firstCard.src = "../photos/twentieth_game_photos/back.png"
                    secondCard.src = "../photos/twentieth_game_photos/back.png"
                    cnt = 0
                    firstCard = null
                    secondCard = null
                }
                else {
                    cnt = 0
                    firstCard = null
                    secondCard = null
                }
            }
        }, 700)
    }
});
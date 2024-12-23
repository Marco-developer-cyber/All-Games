let baraban = document.querySelector(".baraban")
baraban.onclick = ()=> {
    let rand = Math.floor(Math.random()* 1000) % 360
    baraban.style.transform = `rotate(${rand}deg) `
    baraban.style.transition = 'transform 2s ease-out';
    if (1 <= rand && rand <= 30) {
        alert("SIz 75$ yuttingiz")
    }
    else if (31 <= rand && rand <= 61) {
        alert("SIz 50$ yuttingiz")
    }
    else if (61 <= rand && rand <= 90) {
        alert("SIz 95$ yuttingiz")
    }
    else if (91 <= rand && rand <= 120) {
        alert("SIz 15$ yuttingiz")
    }
    else if (121 <= rand && rand <= 150) {
        alert("Zero")
    }
    else if (151 <= rand && rand <= 180) {
        alert("SIz 150$ yuttingiz")
    }
    else if (181 <= rand && rand <= 210) {
        alert("SIz 1000$ yuttingiz")
    }
    else if (211 <= rand && rand <= 240) {
        alert("SIz 700$ yuttingiz")
    }
    else if (241 <= rand && rand <= 269) {
        alert("Jackpot")
    }
    else if (271 <= rand && rand <= 300) {
        alert("SIz 100$ yuttingiz")
    }
    else if (301 <= rand && rand <= 330) {
        alert("Siz 750$ yuttingiz")
    }
    else if (331 <= rand && rand <= 360) {
        alert("SIz 500$ yuttingiz")
    }
}
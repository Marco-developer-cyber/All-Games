let en = 0;
let rand, rand2;

function generateRandomNumbers() {
    rand = Math.trunc(Math.random() * 5) + 1;
    rand2 = Math.trunc(Math.random() * 4) + 1;
    document.querySelector(".num1").textContent = rand;
    document.querySelector(".num2").textContent = rand2;
}

function run(beta) {
    let round = document.querySelector(".item");
    if (!rand) generateRandomNumbers(); // Генерируем числа только один раз в начале

    if (!isNaN(beta.key)) {
        round.textContent = beta.key; // Добавляем цифру к текущему значению
    }

    if (beta.key === "Enter") {
        en++;
        let son = parseInt(round.textContent, 10); // Преобразуем строку в число
        let j = document.querySelector(".answers");
        let h1 = document.createElement("h1");
        let rand3 = rand + rand2;
        let rand4 = rand - rand2;

        if (son === rand3 || son === rand4) {
            h1.textContent = `Siz toptingiz ✔ ${en} urinishda`;
            h1.style.backgroundColor = `yellowgreen`;
        } else {
            h1.textContent = `Siz topa olmadingiz ❌`;
            h1.style.backgroundColor = `red`;
        }

        j.appendChild(h1);
        round.textContent = '0'; // Сбрасываем текущее значение
        generateRandomNumbers(); // Генерируем новые числа для следующего раунда
    }
}

window.addEventListener("keydown", run);
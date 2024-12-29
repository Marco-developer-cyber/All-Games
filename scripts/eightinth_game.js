let data = [
    {
        question: "HTML nima va uning asosiy vazifasi nima?",
        options: [
            "Web-sahifalarni yaratish uchun asosiy belgilash tili",
            "Ma'lumotlarni saqlash uchun dasturlash tili",
            "Brauzer plaginlarini yaratish vositasi",
            "O'yin ishlab chiqish vositasi"
        ],
        correctAnswer: 0
    },
    {
        question: "HTML dokumentining standart tuzilmasi qanday ko'rinishda?",
        options: [
            "<html>, <head>, <body>",
            "<head>, <title>, <footer>",
            "<section>, <nav>, <footer>",
            "<div>, <span>, <p>"
        ],
        correctAnswer: 0
    },
    {
        question: "<div> va <span> elementlari o'rtasidagi farq nima?",
        options: [
            "<div> blok elementi, <span> inline elementi",
            "<div> inline elementi, <span> blok elementi",
            "Ikki element ham bir xil",
            "<div> matn elementlari uchun ishlatiladi, <span> tasvirlar uchun"
        ],
        correctAnswer: 0
    },
    {
        question: "HTML5-da yangi elementlardan qaysilarni bilasiz?",
        options: [
            "<article>, <section>, <header>, <footer>",
            "<blink>, <marquee>, <center>",
            "<b>, <i>, <u>, <font>",
            "<hr>, <br>, <pre>, <code>"
        ],
        correctAnswer: 0
    },
    {
        question: "id va class atributlari o‘rtasidagi farq nima?",
        options: [
            "id bir marta ishlatiladi, class bir nechta elementlar uchun ishlatiladi",
            "id faqat raqam bo‘lishi mumkin, class faqat harflardan iborat bo‘ladi",
            "id elementlarni yashiradi, class ko‘rsatadi",
            "id va class bir xil maqsadda ishlatiladi"
        ],
        correctAnswer: 0
    },
    {
        question: "<img> tegida rasmni yuklashdan oldin nima qilish uchun alt atributi ishlatiladi?",
        options: [
            "Rasmni yuklashda muammo bo'lsa, matn ko‘rsatish",
            "Rasm o‘lchamlarini belgilash",
            "Rasmni rangini o‘zgartirish",
            "Rasmga havola qo‘shish"
        ],
        correctAnswer: 0
    },
    {
        question: "HTML formalarida <input> elementining turlari qanday va ular nima uchun ishlatiladi?",
        options: [
            "text, password, email, number — turli xil ma'lumotlar kiritish uchun",
            "table, list, grid, div — shakllarni guruhlash uchun",
            "circle, rectangle, polygon — shakllar chizish uchun",
            "query, data, schema, action — ma'lumotlarni tahlil qilish uchun"
        ],
        correctAnswer: 0
    },
    {
        question: "<meta> tegining maqsadi nima?",
        options: [
            "Sahifa haqida ma'lumot berish",
            "Rasmni yuklash",
            "Matnni formatlash",
            "Navigatsiya yaratish"
        ],
        correctAnswer: 0
    },
    {
        question: "HTML dokumentida <iframe> elementining vazifasi nima?",
        options: [
            "Boshqa sahifalarni dokument ichida ko‘rsatish",
            "Rasmlarni tahrirlash",
            "Formalarni yuborish",
            "Videolarni yuklash"
        ],
        correctAnswer: 0
    },
    {
        question: "Semantik HTML nima va nima uchun u muhim?",
        options: [
            "Mantiqiy elementlar orqali tarkibni tuzish",
            "Interaktiv elementlar qo‘shish",
            "Stilni o'zgartirish",
            "Rasmlarni to‘g‘ri joylashtirish"
        ],
        correctAnswer: 0
    },
    
    // CSS questions
    {
        question: "CSS-da inline, internal va external uslublar o‘rtasidagi farq nima?",
        options: [
            "Uslub qo‘llash usullari",
            "Uslublar turlarini aniqlash",
            "Turli brauzerlar uchun kod yozish",
            "Rasmlarni formatlash"
        ],
        correctAnswer: 0
    },
    {
        question: "CSS selektorlarining asosiy turlari qaysilar va ularning vazifasi nima?",
        options: [
            "Elementni tanlash va unga uslub qo‘llash",
            "Rasmlarni yuklash",
            "Formalarni yuborish",
            "Videolarni qo‘shish"
        ],
        correctAnswer: 0
    },
    {
        question: "CSS-da position xususiyatining qiymatlari (static, relative, absolute, fixed, sticky) orasidagi farqlarni tushuntirib bering.",
        options: [
            "Element joylashuvini belgilash",
            "Element hajmini o'zgartirish",
            "Elementga rang berish",
            "Elementga chekka qo‘shish"
        ],
        correctAnswer: 0
    },
    {
        question: "CSS-da flexbox modelining asosiy tushunchalari qanday?",
        options: [
            "Elementlarni moslashuvchan joylashtirish",
            "Elementlarni birlashtirish",
            "Elementlarni guruhlash",
            "Elementlarni ko‘rinmas qilish"
        ],
        correctAnswer: 0
    },
    {
        question: "Media query nima va responsiv dizaynda qanday qo‘llaniladi?",
        options: [
            "Turli ekran o‘lchamlariga mos uslublar qo‘llash",
            "Turli shriftlar qo‘llash",
            "Ranglarni o‘zgartirish",
            "Brauzerni yangilash"
        ],
        correctAnswer: 0
    }
];
let test_numbers_buttons = document.querySelectorAll(".test_numbers_buttons");
let test_question_text = document.querySelector(".test-question-text");
let answerA = document.querySelector(".A");
let answerB = document.querySelector(".B");
let answerC = document.querySelector(".C");
let answerD = document.querySelector(".D");
let next = document.querySelector(".next"); 
let prev = document.querySelector(".prev")
let currentIndex = 0; 

function updateQuestion(index) {
    test_question_text.textContent = data[index]["question"];
    answerA.textContent = data[index]["options"][0];
    answerB.textContent = data[index]["options"][1];
    answerC.textContent = data[index]["options"][2];
    answerD.textContent = data[index]["options"][3];
}

test_numbers_buttons.forEach((element, index) => {
    element.onclick = () => {
        currentIndex = index; 
        updateQuestion(index);
    };
});

next.onclick = () => {
    currentIndex++; 
    updateQuestion(currentIndex);
};
prev.onclick = ()=> {
    currentIndex--; 
    updateQuestion(currentIndex);
}

updateQuestion(currentIndex);

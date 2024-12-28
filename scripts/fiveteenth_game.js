let data = [
  "Televizor",
  "Noutbuk",
  "Salfetka",
  "Cobalt",
  "Ruchka",
  "Sichqoncha",
  "Klaviatura",
  "2 xonali uy",
  "Kir yuvish moshinasi",
  "Konditsiboxr",
  "Telefon",
  "Mebellar toplami",
  "Lampochka",
  "Gugurt",
  "Isoaniyaga sayohat",
  "30 mln som",
  "3 mln som",
  "Damas",
  "Gazplita",
  "Muzlatkich",
  "Skuter",
  "Planshet",
  "Dinozavr",
  "Idish tovoxlar",
];

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let ten = document.querySelector(".ten")
let eleven = document.querySelector(".eleven")
let twelev = document.querySelector(".twelev")
let thirteen = document.querySelector(".thirteen")
let fourteen = document.querySelector(".fourteen")
let fiveteen = document.querySelector(".fiveteen")
let sixteen = document.querySelector(".sixteen")
let seventeen = document.querySelector(".seventeen")
let eightteen = document.querySelector(".eightteen")
let nineteen = document.querySelector(".nineteen")
let twenty = document.querySelector(".twenty")
let t_one = document.querySelector(".twenty_one")
let t_two = document.querySelector(".t_two")
let t_three = document.querySelector(".t_three")
let t_four = document.querySelector(".t_four")

let contenier = document.querySelector(".contenier");
document.querySelectorAll(".box").forEach(item=> {
    window.addEventListener("keypress", (e)=> {
        let rand = Math.floor(Math.random() * data.length);
        let key = e.key
        if(key == "q") {
            one.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                one.textContent = data[rand]
                one.style.background = 'none'
                one.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "w") {
            two.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                two.textContent = data[rand]
                two.style.background = 'none'
                two.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "e") {
            three.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                three.textContent = data[rand]
                three.style.background = 'none'
                three.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "r") {
            four.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                four.textContent = data[rand]
                four.style.background = 'none'
                four.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "t") {
            five.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                five.textContent = data[rand]
                five.style.background = 'none'
                five.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "y") {
            six.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                six.textContent = data[rand]
                six.style.background = 'none'
                six.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "u") {
            seven.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                seven.textContent = data[rand]
                seven.style.background = 'none'
                seven.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "i") {
            eight.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                eight.textContent = data[rand]
                eight.style.background = 'none'
                eight.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "o") {
            nine.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                nine.textContent = data[rand]
                nine.style.background = 'none'
                nine.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "p") {
            ten.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                ten.textContent = data[rand]
                ten.style.background = 'none'
                ten.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "a") {
            eleven.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                eleven.textContent = data[rand]
                eleven.style.background = 'none'
                eleven.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "s") {
            twelev.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                twelev.textContent = data[rand]
                twelev.style.background = 'none'
                twelev.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "d") {
            thirteen.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                thirteen.textContent = data[rand]
                thirteen.style.background = 'none'
                thirteen.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "f") {
            fourteen.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                fourteen.textContent = data[rand]
                fourteen.style.background = 'none'
                fourteen.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "g") {
            fiveteen.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                fiveteen.textContent = data[rand]
                fiveteen.style.background = 'none'
                fiveteen.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "h") {
            sixteen.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                sixteen.textContent = data[rand]
                sixteen.style.background = 'none'
                sixteen.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "j") {
            seventeen.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                seventeen.textContent = data[rand]
                seventeen.style.background = 'none'
                seventeen.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "k") {
            eightteen.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                eightteen.textContent = data[rand]
                eightteen.style.background = 'none'
                eightteen.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "l") {
            nineteen.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                nineteen.textContent = data[rand]
                nineteen.style.background = 'none'
                nineteen.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "z") {
            twenty.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                twenty.textContent = data[rand]
                twenty.style.background = 'none'
                twenty.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "x") {
            t_one.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                t_one.textContent = data[rand]
                t_one.style.background = 'none'
                t_one.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "c") {
            t_two.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                t_two.textContent = data[rand]
                t_two.style.background = 'none'
                t_two.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "v") {
            t_three.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                t_three.textContent = data[rand]
                t_three.style.background = 'none'
                t_three.style.transform = `rotate(0deg)`
            }, 500)
        }
       else if(key == "b") {
            t_four.style.transform = `rotate(180deg)`
            setTimeout(function () {
                data.splice(rand, 0)
                t_four.textContent = data[rand]
                t_four.style.background = 'none'
                t_four.style.transform = `rotate(0deg)`
            }, 500)
        }
    })
})
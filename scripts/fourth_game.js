

let add  = document.querySelector(".add") 
let remove  = document.querySelector(".remove") 

add.onclick = ()=> {
    let element = document.querySelector("section")
    let newDiv = document.createElement("div")
    newDiv.classList.add("div")
    element.appendChild(newDiv)

    let red = parseInt(document.getElementById("red").value)
    let green = parseInt(document.getElementById("green").value)
    let blue = parseInt(document.getElementById("blue").value)

    newDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}
remove.onclick = ()=> {
    let div = document.querySelector(".div")
    div.remove()
}
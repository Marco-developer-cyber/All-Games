let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let listInput = document.getElementById("list_input");
let addDusplay = document.querySelector(".add_display");
let info = document.querySelector(".info")
add.onclick = () => {
    let text = listInput.value;
    addDusplay.style.display = "block";
    info.style.display = "flex";
    info.textContent = "Maxsulot muvofoqiyatli qo'shildi 😉"
    setInterval(function(){
        info.style.display = 'none'
    },2000)
    let products = document.createElement("div");
    products.classList.add("products");
    products.innerHTML = `
    <p>${text}</p>
    <button class="product_remove">O'chirish</button>
    `;
    listInput.value = ""
    let productRemove = products.querySelector(".product_remove")
    addDusplay.appendChild(products);
    productRemove.onclick = ()=> {
        info.style.display = "flex";
        info.textContent = "Maxsulot o'chirildi 😒"
        setInterval(function(){
            info.style.display = 'none'
        },2000)
        products.remove()
        if(addDusplay.textContent == "") {
            addDusplay.style.display = 'none'
        }
    }
};
remove.onclick = ()=> {
    info.style.display = "flex";
    info.textContent = "Barcha maxsulotlar o'chirildi 😥"
    setInterval(function(){
        info.style.display = 'none'
    },2000)
    addDusplay.style.display = 'none'
    addDusplay.textContent =""
}
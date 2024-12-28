let add = document.querySelector(".add");
let remove = document.querySelector(".remove");
let listInput = document.getElementById("list_input");
let addDusplay = document.querySelector(".add_display");

add.onclick = () => {
    let text = listInput.value;
    addDusplay.style.display = "block";
    let products = document.createElement("div");
    products.classList.add("products");
    products.innerHTML = `
    <p>${text}</p>
    <button class="product_remove">O'chirish</button>
    `;
    let productRemove = products.querySelector(".product_remove")
    addDusplay.appendChild(products);
    productRemove.onclick = ()=> {
        products.remove()
        if(addDusplay.textContent == "") {
            addDusplay.style.display = 'none'
        }
    }
};
remove.onclick = ()=> {
    addDusplay.style.display = 'none'
    addDusplay.textContent =""
}
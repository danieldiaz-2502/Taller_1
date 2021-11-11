const cartSection = document.getElementById("cart");
let cart = [];
const getMyCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

const renderProduct = (product) => {
    const newProduct = document.createElement("li");
    newProduct.className = "product product--cart";
    newProduct.innerHTML = ` 
            <img src="${product.image}" alt="" class="product__thumbail">
            <div class="product__info">
                <h2 class="product__name">${product.name}</h2>
                <h3 class="product__price">${product.price}</h3>
                <button>Remove</button>
            </div>
        `;

    cartSection.appendChild(newProduct);

};

const renderMyCart = () => {
    const cart = getMyCart();
    cart.forEach(product => {
        renderProduct(product);
    })
}

renderMyCart();

const products = [
    {
        name: "Bufanda Blanket",
        price: "120,000 COP",
        image: "./img/product_1.png",
        description: "Nuevo - Bufanda tipo blanket",
        type: "bufanda"
    },

    {
        name: "Bufanda Tul",
        price: "70,000 COP",
        image: "./img/product_2.png",
        description: "Nuevo - Bufanda de tul mágico",
        type: "bufanda"
    },
];

const productSection = document.getElementById("products");

const productTemplate = (item) => {
    const product = document.createElement("a");
    product.className = "product";
    product.innerHTML = `
    <img src="${item.image}" alt="" class="product__img">
    <div class="product__description">
        <h3 class="product__price">${item.price}</h3>
        <p class="product__tag">${item.description}</p>
        <h3>MÁS COLORES</h3>
        <button class="product__cart">Agregar al carrito</button>
    </div>
    `;
    productSection.appendChild(product);

    const productCart = product.querySelector("product__cart");

    productCart.addEventListener("click", e => {

    });
}

products.forEach(product => {
    productTemplate(product);
});
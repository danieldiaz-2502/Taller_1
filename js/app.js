const products = [
    {
        id: 1,
        name: "Bufanda Blanket",
        priceTag: "120,000 COP",
        price: 120000,
        image: "./img/product_1.png",
        description: "Nuevo - Bufanda tipo blanket",
        type: "scarfs"
    },

    {
        id: 2,
        name: "Bufanda Tul",
        priceTag: "70,000 COP",
        price: 70000,
        image: "./img/product_2.png",
        description: "Nuevo - Bufanda de tul mágico",
        type: "scarfs"
    },

    {
        id: 4,
        name: "Falda Tul",
        priceTag: "130,000 COP",
        price: 130000,
        image: "./img/product_4.png",
        description: "Nuevo - Falda de tul mágico",
        type: "skirts"
    },
    {
        id: 3,
        name: "Bufanda de tela",
        priceTag: "95,000 COP",
        price: 95000,
        image: "./img/product_3.png",
        description: "Nuevo - Bufanda de tela",
        type: "scarfs"
    },
    {
        id: 5,
        name: "Pantalon de tela",
        priceTag: "100,000 COP",
        price: 100000,
        image: "./img/product_5.png",
        description: "Nuevo - Pantalones de lana mágica",
        type: "pants"
    },
    {
        id: 6,
        name: "Leggins",
        priceTag: "70,000 COP",
        price: 70000,
        image: "./img/product_6.png",
        description: "Nuevo - Leggins de tela mágica",
        type: "pants"
    },
];

const cart = [];

const productsSection = document.getElementById("products");

const productTemplate = (item) => {

    const product = document.createElement("a");

    product.className = "product";

    product.setAttribute("href", `./product.html?id=${item.id}`);

    const isAdded = cart.some(product => product.id === item.id);
    let buttonHtml;

    if (isAdded) {
        buttonHtml = `<button class="product__cart" disabled>Añadido</button>`;
    } else {
        buttonHtml = `<button class="product__cart">Agregar al carrito</button>`;
    }

    product.innerHTML = `
    <img src="${item.image}" alt="" class="product__img">
    <div class="product__description">
        <h3 class="product__price">${item.priceTag}</h3>
        <p class="product__tag">${item.description}</p>
        <h3>MÁS COLORES</h3>

        ${buttonHtml}
    </div>
    `;
    productsSection.appendChild(product);

    const productCart = product.querySelector(".product__cart");

    productCart.addEventListener("click", e => {
        e.preventDefault();
        const productAdded = {
            id: item.id,
            name: item.name,
            image: item.image,
        };
        cart.push(productAdded);
        console.log(cart);
        productCart.setAttribute("disabled", true);
    });
}

const filterByCategory = document.getElementById("categories");

const orderBySelect = document.getElementById("orderBy");

orderBySelect.addEventListener("change", e => {
    loadProducts();
})

filterByCategory.addEventListener("change", e => {

    loadProducts();

});

const loadProducts = () => {
    const category = filterByCategory.value;
    const order = orderBySelect.value;
    productsSection.innerHTML = "";

    let filteredProductsByCategory;

    if (category !== "") {
        filteredProductsByCategory = products.filter((product) =>
            product.type === category);
    } else {
        filteredProductsByCategory = products;
    }

    if (order === "asc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) =>
            a.price - b.price);
    }
    if (order === "desc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) =>
            b.price - a.price);
    }

    filteredProductsByCategory.forEach(product => {
        productTemplate(product);
    });
}

products.forEach(product => {
    productTemplate(product);
});
const products = [
    {
        name: "Bufanda Blanket",
        priceTag: "120,000 COP",
        price: 120000,
        image: "./img/product_1.png",
        description: "Nuevo - Bufanda tipo blanket",
        type: "scarfs"
    },

    {
        name: "Bufanda Tul",
        priceTag: "70,000 COP",
        price: 70000,
        image: "./img/product_2.png",
        description: "Nuevo - Bufanda de tul mágico",
        type: "scarfs"
    },

    {
        name: "Falda Tul",
        priceTag: "130,000 COP",
        price: 130000,
        image: "./img/product_4.png",
        description: "Nuevo - Falda de tul mágico",
        type: "skirts"
    },
];

const cart = [];

const productsSection = document.getElementById("products");

const productTemplate = (item) => {
    const product = document.createElement("a");
    product.className = "product";
    product.innerHTML = `
    <img src="${item.image}" alt="" class="product__img">
    <div class="product__description">
        <h3 class="product__price">${item.priceTag}</h3>
        <p class="product__tag">${item.description}</p>
        <h3>MÁS COLORES</h3>
        <button class="product__cart">Agregar al carrito</button>
    </div>
    `;
    productsSection.appendChild(product);

    const productCart = product.querySelector(".product__cart");

    productCart.addEventListener("click", e => {
        e.preventDefault();
        const productAdded = {
            name: item.name,
            image: item.image,
        };
        cart.push(productAdded);
        console.log(productAdded);
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

    if (order === "asc"){
        filteredProductsByCategory = filteredProductsByCategory.sort((a,b) => 
        a.price - b.price);
    }
    if (order === "desc"){
        filteredProductsByCategory = filteredProductsByCategory.sort((a,b) => 
        b.price - a.price);
    }

    filteredProductsByCategory.forEach(product => {
        productTemplate(product);
    });
}

products.forEach(product => {
    productTemplate(product);
});
const getMyCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};

const cart = getMyCart();

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
    <img src="${item.images[0]}" alt="" class="product__img">
    <div class="product__description">
        <h3 class="product__price">${item.price} COP</h3>
        <p class="product__tag">${item.description}</p>
        <h4>MÁS INFORMACIÓN</h4>

        ${buttonHtml}
    </div>
    `;
    productsSection.appendChild(product);

    const productCartButton = product.querySelector(".product__cart");

    productCartButton.addEventListener("click", e => {
        e.preventDefault();
        productCartButton.innerHTML = `<button class="product__cart" disabled>Añadido</button>`;
        const productAdded = {
            id: item.id,
            name: item.name,
            image: item.images[0],
            price: item.price
        };
        cart.push(productAdded);
        localStorage.setItem("cart", JSON.stringify(cart));
        productCartButton.setAttribute("disabled", true);
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

const user = {
    name:"Daniel",
    email:"daniel@hotmail.com",
}

localStorage.setItem("user", JSON.stringify(user));

const userSaved = localStorage.getItem("user");
const userJSON = JSON.parse(userSaved);

console.log(userJSON);


const url = window.location.search;
const searchParams = new URLSearchParams(url);
const productId = searchParams.get("id");

const product = products.find(product => product.id == productId);

const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productInfo = document.getElementById("productInfo");
const productPrice = document.getElementById("productPrice");
const productGallery = document.getElementById("gallery");

productName.innerText = product.name;
productInfo.innerText = product.info;
productPrice.innerHTML = `<h3 class="product__price">${product.price} COP</h3>`;
productImage.setAttribute("src", product.images[0]);

const createGallery = (images) => {
    const gallery =document.createElement("div");

    console.log(images);
    images.forEach(image => {
        const currentImage = document.createElement("img");
        currentImage.setAttribute("src", image);
        currentImage.addEventListener("click", e =>{
            productImage.setAttribute("src", image);
        });
        gallery.appendChild(currentImage);
    });
    console.log(productGallery);
    productGallery.appendChild(gallery);
}

createGallery(product.images);
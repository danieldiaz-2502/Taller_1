const url = window.location.search;
const searchParams = new URLSearchParams(url);
const productId = searchParams.get("id");

const product = products.find(product => product.id == productId);

const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productInfo = document.getElementById("productInfo");
const productPrice = document.getElementById("productPrice");
const prodctGallery = document.getElementById("gallery");

productName.innerText = product.name;
productInfo.innerText = product.info;
productPrice.innerText = product.priceTag;
productImage.setAttribute("src", product.image);

const createGallery = (images) => {
    const gallery =document.createElement("div");

    gallery.innerHTML += `<img src="${product.image}">`;

    images.forEach(image => {
        gallery.innerHTML += `<img src="${image}">`;
    });

    productGallery.appendChild(gallery);

    const productGalleryImages = document.querySelector(".product__image > #gallery > div");
    console.log(productGalleryImages);

    productGalleryImages.addEventListener("click", e => {
        const imageSource = e.target.currentSrc;
        productImage.setAttribute("src", imageSource)
    });
}

createGallery();
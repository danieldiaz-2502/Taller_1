const url = window.location.search;
const searchParams = new URLSearchParams(url);
const productId = searchParams.get("id");

const product = products.find(product => product.id == productId);

const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productInfo = document.getElementById("productInfo");
const productPrice = document.getElementById("productPrice");


productName.innerText = product.name;
productInfo.innerText = product.info;
productPrice.innerText = product.priceTag;
productImage.setAttribute("src", product.image);
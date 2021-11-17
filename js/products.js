import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/*const products = [
    {
        id: 1,
        name: "Bufanda tipo blanket",
        price: 120000,
        description: "Nuevo - Bufanda tipo blanket",
        info: "Bufanda de tipo blanket con un diseño de tartán, a base de gabardina, para ponerse de más de 20 formas distintas. Disponible en varios colores.",
        type: "scarfs",
        images: [
            "./img/product_1_1.png",
            "./img/product_1_2.png",
            "./img/product_1_3.png",
        ]
    },

    {
        id: 2,
        name: "Bufanda de tul mágico",
        price: 70000,
        info: "Bufanda a base de tul para ponerse de más de 10 formas distintas. Disponible en blanco también.",
        description: "Nuevo - Bufanda de tul mágico",
        type: "scarfs",
        images: [
            "./img/product_2_1.png",
            "./img/product_2_2.png",
            "./img/product_2_3.png",
        ],
    },

    {
        id: 4,
        name: "Falda Tul",
        price: 130000,
        info: "Falda a base de tul con longitud ajustable hasta más de 30cm. Disponible en blanco y negro.",
        description: "Nuevo - Falda de tul mágico",
        type: "skirts",
        images: [
            "./img/product_4_1.png",
            "./img/product_4_2.png",
            "./img/product_4_3.png",
        ],
    },
    {
        id: 3,
        name: "Bufanda de tela",
        price: 95000,
        info: "Bufanda sencilla a base de tela para ponerse de más de 30 formas distintas, se puede seleccionar con longitud desde 10cm hasta 30cm. Disponible en varios colores",
        description: "Nuevo - Bufanda de tela",
        type: "scarfs",
        images: [
            "./img/product_3_1.png",
            "./img/product_3_2.png",
            "./img/product_3_3.png",
        ],
    },
    {
        id: 5,
        name: "Pantalón de Lana",
        price: 100000,
        info: "Pantalón a base de lana con posibilidad de usarse como short también. Disponible en varios colores.",
        description: "Nuevo - Pantalones de lana mágica",
        type: "pants",
        images: [
            "./img/product_5_1.png",
            "./img/product_5_2.png",
            "./img/product_5_3.png",
        ],
    },
    {
        id: 6,
        name: "Leggins de tela",
        price: 70000,
        info: "Leggins a base de tela que se ajusta al cuerpo de manera cómoda. Disponible sólo en verde.",
        description: "Nuevo - Leggins de tela mágica",
        type: "pants",
        images: [
            "./img/product_6_1.png",
            "./img/product_6_2.png",
            "./img/product_6_3.png",
        ],
    },
    {
        id: 7,
        name: "Short-falda de tela",
        price: 90000,
        info: "Short con la posibilidad de convertirse en falda que puede tener distintas longitudes. Disponible en varios colores.",
        description: "Nuevo - Short-falda de tela mágica",
        type: "skirts",
        images: [
            "./img/product_7_1.png",
            "./img/product_7_2.png",
            "./img/product_7_3.png",
        ],
    },
    {
        id: 8,
        name: "Zapatos mágicos",
        price: 130000,
        info: "Zapatos que pueden colocarse de más de 7 formas, con tacón incluído. Disponibles sólo en gris",
        description: "Nuevo - Zapatos mágicos",
        type: "shoes",
        images: [
            "./img/product_8_1.png",
            "./img/product_8_2.png",
            "./img/product_8_3.png",
        ],
    },
    {
        id: 9,
        name: "Sweater-Chaqueta mágico",
        price: 200000,
        info: "Sweater a base de tela con una alternativa doble faz para usarse como una chaqueta. Disponible en varios colores.",
        description: "Nuevo - Sweater-Chaqueta mágico",
        type: "sweaters",
        images: [
            "./img/product_9_1.png",
            "./img/product_9_2.png",
            "./img/product_9_3.png",
        ],
    },
    {
        id: 10,
        name: "Sweater de tela",
        price: 130000,
        info: "Zapatos que pueden colocarse de más de 7 formas, con tacón incluído. Disponibles sólo en gris",
        description: "Nuevo - Sweater de tela mágica",
        type: "sweaters",
        images: [
            "./img/product_10_1.png",
            "./img/product_10_2.png",
            "./img/product_10_3.png",
        ],
    },
];*/

products.forEach(async (product) => {
    await setDoc(doc(db, "products", `01AK8U2430YOSL3${product.id}`), product);
});
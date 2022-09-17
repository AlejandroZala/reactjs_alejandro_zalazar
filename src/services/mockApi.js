const data = [
    {
        id: 1,
        nombre: "Crema Nutritiva Regeneradora",
        capacidad: "50ml",
        precio: 1500,
        categoria: "Cremas",
        descripcion: "Con ácido hialurónico, colágeno, caléndula",
        img: "/Imagenes/cremas/crema_nutri_regeneradora.webp",
        stock: 40,
    },
    {
        id: 2,
        nombre: "Crema Nutritiva Regeneradora",
        capacidad: "30ml",
        precio: 1000,
        categoria: "Cremas",
        descripcion: "Con ácido hialurónico, colágeno, caléndula",
        img: "/Imagenes/cremas/crema_nutri_regeneradora.webp",
        stock: 20,
    },
    {
        id: 3,
        nombre: "Gel Corporal de Aloe Vera",
        capacidad: "1000ml",
        precio: 2000,
        categoria: "Geles",
        descripcion: "Con Aloe Vera, aceite esencial de geranio y Rosa Mosqueta",
        img: "/Imagenes/geles/gel_aloe_vera.webp",
        stock: 30,
    },
    {
        id: 4,
        nombre: "Gel Corporal de Aloe Vera",
        capacidad: "500ml",
        precio: 1200,
        categoria: "Geles",
        descripcion: "Con Aloe Vera, aceite esencial de geranio y Rosa Mosqueta",
        img: "/Imagenes/geles/gel_aloe_vera.webp",
        stock: 30,
    },
];

export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    });
}
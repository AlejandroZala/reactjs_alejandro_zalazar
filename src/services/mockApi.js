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
        nombre: "Crema Exfoliante Facial",
        capacidad: "50ml",
        precio: 900,
        categoria: "Cremas",
        descripcion: "A base de arcilla verde , almendras, lavanda, caléndula y geranio",
        img: "/Imagenes/cremas/crema_exfoliante_facial.webp",
        stock: 20,
    },
    {
        id: 3,
        nombre: "Crema Dental Natural",
        capacidad: "40ml",
        precio: 500,
        categoria: "Cremas",
        descripcion: "Con arcilla blanca, aceite de coco, betaina de coco, Cristales de mentol y aceite esencial de menta",
        img: "/Imagenes/cremas/crema_dental.webp",
        stock: 30,
    },
    {
        id: 4,
        nombre: "Gel Corporal de Caléndula",
        capacidad: "1000ml",
        precio: 1800,
        categoria: "Geles",
        descripcion: "Gel cicatrizante y antiséptico, cura heridas y regenera la piel.",
        img: "/Imagenes/geles/gel_calendula.webp",
        stock: 30,
    },
    {
        id: 5,
        nombre: "Gel Corporal de Aloe Vera",
        capacidad: "1000ml",
        precio: 2000,
        categoria: "Geles",
        descripcion: "Con Aloe Vera, aceite esencial de geranio y Rosa Mosqueta",
        img: "/Imagenes/geles/gel_aloe_vera.webp",
        stock: 25,
    },
    {
        id: 6,
        nombre: "Gel de Colágeno, Elastina y Vitamina E",
        capacidad: "50gr",
        precio: 700,
        categoria: "Geles",
        descripcion: "Con Aminoácidos y péptidos de colágeno y elastina, Vitamina E, acetato y Urea.",
        img: "/Imagenes/geles/gel_calendula.webp",
        stock: 35,
    },
];

export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}
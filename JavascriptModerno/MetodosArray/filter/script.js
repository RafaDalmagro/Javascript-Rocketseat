const words = [
    "Javascript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "PHP",
    "Swift",
    "Go",
    "Kotlin",
    "Rust",
];

const result = words.filter((word) => word.length > 5);

console.log(result); // Output: ["Javascript", "Python", "Kotlin", "Rust"]

const products = [
    { description: "", price: 100 },
    { description: "Mouse", price: 50 },
    { description: "Monitor", price: 200 },
    { description: "Teclado", price: 75 },
];

const promotion = products.filter((product) => product.price < 100);

promotion.map((product) =>
    console.log("Produto na promoção: " + product.description)
);

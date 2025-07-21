const products = [
	"Teclado",
	"Mouse",
	"Monitor"
]

const formatedProducts = products.map((product) => {
	return product.toLowerCase();
});
products.map((product) => console.log(product));

console.log(formatedProducts);

// const response = fetch("http://localhost:3000/products").then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

async function fetchProducts() {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    console.log(data);
}

async function fetchProductsById(id) {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    console.log(data);
}

// fetchProducts();
// fetchProductsById(1)

const productName = document.querySelector("#name");
const productPrice = document.querySelector("#price");
const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
		body: JSON.stringify({
			id: new Date().getTime().toString(),
			name: productName.value,
			price: productPrice.value
		}),
    });
});

const data = ["Rafael Lima Dalmagro", "rafa.limadalmagro@gmail.com"];
const [name, email] = data;

// console.log(name); // Rafael Lima Dalmagro
// console.log(email); //

const fruits = ["Banana", "Apple", "Orange"];
const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit); // Banana
// console.log(secondFruit); // Apple
// console.log(thirdFruit); // Orange

// const [frutinha] = fruits;
// console.log(frutinha); // Banana

const product = {
    name: "Notebook",
    price: 2500,
    description: "Notebook Dell Inspiron 15",
};

const { productName, price, description } = product;

function showProductDetails({ name, price, description }) {
    console.log(`Product Name: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Description: ${description}`);
}

showProductDetails({
    name: "testando",
    price: 1000,
    description: "testando descrição",
});

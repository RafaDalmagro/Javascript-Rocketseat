const values = [5, 12, 8, 130, 44];
const index = values.findIndex((value) => value < 5);
console.log(index);

const fruits = [
    {
        name: "apple",
        color: "red",
	},
    {
        name: "bannana",
        color: "yellow",
	},
    {
        name: "orange",
        color: "orange",
	},
];


const result = values.find((value) => value > 10);
const result2 = fruits.find((fruit) => fruit.name !== "orange");
console.log(result);
console.log(result2);

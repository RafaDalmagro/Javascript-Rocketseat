// Imutabilidade e referência
// const address1 = {
// 	street: "123 Main St",
// 	number: 456,
// }

// const address2 = address1

// console.log(address1);
// console.log(address2);

// address2.number = 789;

// console.log(address1);
// console.log(address2);

// const address2 = { ...address1 };

// console.log(address1);
// console.log(address2);

// address2.number = 789;

// console.log(address1);
// console.log(address2);

// Shallow e Deep Copy
// const htmlCourse = {
//     course: "HTML e CSS",
//     students: [
//         {
//             name: "Rafael",
//             age: 30,
//             email: "rafael@example.com",
//         },
//     ],
// };

// const jsCourse = {
// 	...htmlCourse,
// 	course: "JavaScript",
// };

// Shallow freeze o primeiro nível de propriedades

const book = {
    title: "JavaScript Essentials",
    category: "javascript",
    author: {
        name: "John Doe",
        age: 35,
    },
};

// Object.freeze(book);

// book.category = "programming";
// console.log(book);

function deepFreeze(obj) {
	const props = Reflect.ownKeys(obj);
	for (const prop of props) {
		const value = obj[prop];
		if (value && (typeof value === "object" || typeof value === "function")) {
			deepFreeze(value);
		}

	}
	return Object.freeze(obj);
}

deepFreeze(book);
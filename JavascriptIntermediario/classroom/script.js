// const obj = {};
// console.log(obj);
// console.log(typeof obj);

// const person = {
//     email: "rafael@email.com",
//     age: 26,
//     name: {
//         first_name: "Rafael",
//         surname: "Dalmagro",
//     },
//     address: {
//         street: "Rua 2",
//         number: 123,
//         city: "São Paulo",
//         postal_code: "12345-678",
//     },
//     message: function () {
//         console.log(`Opa, meu nome é ${this.name.first_name}`);
//     },
// };

// console.log(person.name.first_name);
// console.log(person.age);

// person.name.first_name = "Rafa";
// person.age = 27;

// console.log(person?.name?.first_name);
// console.log(person.age);

// function createPerson(name, age) {
//     const person = {};

//     person.name = name;
//     person.age = age;
//     person.message = function () {
//         console.log(`Opa, meu nome é ${this.name}`);
//     };

//     return person;
// }

// const person1 = createPerson("Rafael", 26);
// console.log(person1.name);
// person1.message();

// let message = "Estou testando os fundamentos de JavaScript";
// console.log(message);

// console.log(message.toLowerCase());
// console.log(message.toUpperCase());

// console.log(message.length);
// let password = 123456;

// console.log(password.toString());

// console.log(message.slice(-11));

// let textWithSpaces = "   Olá, Mundo!   ";
// console.log(textWithSpaces.trim());

// const creditCad = "1234567890123456";
// const lastDigits = creditCad.slice(-4);

// const maskedCreditCard = lastDigits.padStart(creditCad.length, "X");

// console.log(maskedCreditCard); // XXXXXXXXXXXX3456

// let fullName = "Rafael Dalmagro";

// console.log(fullName.split(" "));
// console.log(Array.from(fullName));


// let notebooks = []

// notebooks.push("Macbook Pro");
// notebooks.push("Dell Inspiron");
// notebooks.push("Lenovo ThinkPad");
// notebooks.unshift("HP Spectre");

// console.log(notebooks);


class Person {
    constructor(name, age) {
        console.log("Creating a new person");
    }
}

const person = new Person("John", 30);

class Product {
    constructor(name) {
        this.name = name;
    }
}

// const product1 = new Product("Laptop");

// console.log(product1.name);
// const product2 = new Product("Mouse");

// console.log(product2.name);

class User {
    constructor(name, email) {
        this.name = name;
        this.age = email;
    }

    sendEmail() {
        console.log(`Sending email to ${this.name} at ${this.age}`);
    }
}

class UserStatic {
    static showMessage() {
        console.log("This is a static method");
    }
}

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeNoise() {
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal {
    makeNoise() {
        console.log("Wolf! I'm a dog");
    }
}

const dog = new Dog("Buddy");
// dog.makeNoise(); // Outputs: Buddy makes a noise

class Cat extends Animal {
    makeNoise() {
        console.log("Meow! I'm a cat");
    }
}
// const cat = new Cat("Mel");
// cat.makeNoise(); // Outputs: Buddy makes a noise

const address = {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
};

// let obj = []

// try {
// 	if(!obj.includes(17)){
// 		throw new Error("O objeto não contém o número 17");
// 	}
// } catch (error) {
// 	if(error instanceof TypeError) {
// 		console.error("Metodo indisponível: ");
// 	}
// 	console.log(error);
// }

class MyCustomError {
    constructor(message) {
        this.message = "CLASSE DE ERRO CUSTOMIZADA: " + message;
    }
}

try {
    throw new MyCustomError("This is a custom error message");
} catch (error) {
    if (error instanceof MyCustomError) {
        console.log(error.message);
    }else{
		console.log("Não foi possivel executar.");
		
	}
}

class User {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}

	sendMessage() {
		console.log(`Sending email to ${this.email}`);
	}
}

let user = new User("John Doe", "rafael.doe@example.com");
user.sendMessage();
const age = [ 
	 10,
	 20,
	 30,
	 40,
	 50,
]

const every = age.every((value) => value > 10);
console.log(every);

const some = age.some((value) => value > 10);
console.log(some);
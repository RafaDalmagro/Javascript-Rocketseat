function values(...args) {
    console.log(args);
    console.log(...args);
    console.log(args.length);
}

values(1, 2, 3, 4, 5);

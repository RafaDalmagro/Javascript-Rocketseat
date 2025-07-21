const values = [1, 2, 3, 4, 5];

const sum = values.reduce((acumulator, currentValue) => {
    console.log("Acumulator: ", acumulator);
    console.log("Current Value: ", currentValue);
    console.log("Sum: ", acumulator + currentValue);
    console.log("-------------------");

    return acumulator + currentValue;
}, 0);

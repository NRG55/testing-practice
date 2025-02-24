export const calculator = {
    add: function (a, b) {
        return a + b;
    },
    substract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        if (b === 0) {
           throw new Error("Can not divide by zero");
        };

        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    }
};
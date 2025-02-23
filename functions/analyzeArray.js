export default function analyzeArray(array) {
    return {
        average: getAverage(array),
        min: getMin(array),
        max: getMax(array)
    };
};

const getAverage = (array) => {
    const arrayAverage = array.reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0) / array.length;

    return arrayAverage;
};

const getMin = (array) => {
    array.sort((a, b) => a - b);

    return array[0];
};

const getMax = (array) => {
    array.sort((a, b) => a - b);

    return array[array.length - 1];
};
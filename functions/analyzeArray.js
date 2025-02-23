export default function analyzeArray(array) {
    return {
        average: calculateAverage(array)
    };
};

const calculateAverage = (array) => {
    const arrayAverage = array.reduce((sum, currentValue) => {
        return sum + currentValue;
    }, 0) / array.length;

    return arrayAverage;
};
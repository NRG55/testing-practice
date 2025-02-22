export default function ceaserCipher(string, number) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let index = alphabet.indexOf(string[i]);       
        let shiftedIndex = index + number;

        if (shiftedIndex > 25) {
            shiftedIndex = shiftedIndex - 26;
        };

        newString += alphabet[shiftedIndex];
    };

    return newString;
};
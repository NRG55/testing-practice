export default function ceaserCipher(string, number) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let characterUpperCase = false;
        let character = string[i];
        
        if (string[i].match(/[A-Z]/)) {        
            characterUpperCase = true;

            character = string[i].toLowerCase();             
        };

        let index = alphabet.indexOf(character);        
        let shiftedIndex = index + number;      
      
        if (shiftedIndex > 25) {
            shiftedIndex = shiftedIndex - 26;
        };

        let shiftedCharacter = alphabet[shiftedIndex];

        if (characterUpperCase) {
            shiftedCharacter = shiftedCharacter.toUpperCase();
            characterUpperCase = false;            
        };

        newString += shiftedCharacter;
    };

    return newString;
};
export default function ceaserCipher(string, number) {   
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        let isUpperCase = false;
        let character = string[i];
        let newCharacter = character;
        
        if (character.match(/[A-Z]/gi)) {
            if (character === character.toUpperCase()) {                
                isUpperCase = true;

                character = string[i].toLowerCase();
            };         

            newCharacter = shiftedCharacter(character, number);           

            if (isUpperCase) {
                newCharacter = newCharacter.toUpperCase();
                isUpperCase = false;            
            };
        };
               
        newString += newCharacter;
    };

    return newString;
};

const shiftedCharacter = (character, number) => { 
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    let index = alphabet.indexOf(character);
    let shiftedIndex = index + number;      
        
    if (shiftedIndex > 25) {
        shiftedIndex = shiftedIndex - 26;
    };

    const shiftedCharacter = alphabet[shiftedIndex];
    
    return shiftedCharacter;
};
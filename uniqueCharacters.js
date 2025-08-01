//uniqueCharacters.js
/*
Pseudocode:
1. Convert the string to characters
2. Loop through each character
3. Use a Set to track seen characters
4. If a duplicate is found, return false
5. If all characters are unique, return true
*/


//I don't remember Unique Characters from Level 3.  Looking through my notes, I don't see any mention.  I'll have to check my dashboard from Level 3.


function hasUniqueChars(str){
    const seenChars=[]
    for (let i= 0; i<str.length; i++){
        const currentChar=str[i]

        if(seenChars.includes(currentChar)){
            return false;
        }
        seenChars.push(currentChar);
    }
    return true;
}

console.log(hasUniqueChars("goodbye")); //false
console.log(hasUniqueChars("Shantel")); //true
console.log(hasUniqueChars("Prscilla")); //false
console.log(hasUniqueChars("Gabriel")); //true
console.log(hasUniqueChars("Turtle")); //false--I wanted to create an error
console.log(hasUniqueChars("turtle")); //false
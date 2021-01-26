/* Given a set of letters, find every word that can be made with those letters. 
One letter must occur at least once in every word. Inspired by the NYT Spelling Bee game. */

var words = require('an-array-of-english-words');
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let letters = ['t', 'y', 'e', 'l', 'o', 'g'];
let requiredLetter = 'p';

let wrongLetters = alphabet.filter( letter => !letters.includes(letter) && letter !== requiredLetter );

let filteredWords = words.filter( word => word.length >= 4 && word.includes(requiredLetter) );

let result = [];
let valid;
for(let word of filteredWords) {
    for(let letter of wrongLetters){
        valid = !word.includes(letter);
        if(!valid) break;
    }
    if(valid) result.push(word);
}

console.log(result);
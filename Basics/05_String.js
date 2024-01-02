/* String is a data types which is useing for 
store data in memory (keep in memory) by a 
stack way. Which mean Original value copy with
the passege of using.
*/
//   it is just for printout a length of string.
// let text1 = "Built-in"
// console.log(text1.length)

// it  is a new method of execute a string.
// let text2 = new String("This is not a jok")
// console.log(text2)
/*
 string at() // assign a integer value then it show you a charater of integer or  index of string.
let index = 4;
let sentence = "The Lazyness is remove with less sleep!"
console.log(`From this index ${-4} lay in a sentence ${sentence.at(-4)} Character`)
*/ 
// string charAt() assign a integer value then a given index letter is in you terminal.
// let alphabet = "Mesrable";
// console.log(`The character of ${6} is in index of ${alphabet.charAt(6)}`)

// Its not a senseble method of charCodeAt(),Its returns a value between 0 & 65535.
// let probable = "happen";
// console.log(`Index of ${probable.charCodeAt(3)} have this ${probable.charAt(3)}`)
// codePointerAt() string tell you every word code
// let icons = "y";
// console.log(icons.codePointAt(0))
// concat() string is joining two strings.
//  let feature = "Hand ";
//  console.log(feature.concat("Shake"))

// startsWith & endsWith strings are used to find start and end value in a string.
// let sentenceIsPlural = "I am the best, is that true!";
// console.log(sentenceIsPlural.endsWith("true!",28))
// console.log(sentenceIsPlural.startsWith("I",1))

// includes() string tell string in a string exist.
// const phrase = "A quick brown fox jumps over the lazy dog!";
// let word = "jumps";
// console.log(`The word ${"H"} ${phrase.includes("H") ? "is" : "is not" } in a sentence`)

//indexOf() string is tell the string index.
// let phrases = "They never come back!"
// console.log(`Charater of ${"b"} have index  ${phrases.indexOf("b")} in the sentence`)

// lastIndexOf() string which tell the last charater index.
// let paragraph = "I think the Ruth's dog is cuter the your dog!";
// printHere = paragraph.lastIndexOf("think");
// console.log(printHere)

// localeCompare() string 
// let words = "Reserve"
// let wordsAgain = "RESERVE"
// console.log(wordsAgain.localeCompare(words))

 // match() string its tell every thing.
//  let paragraph = "The quick brown fox jumps over the lazy dog!";
//  console.log(paragraph.match("quick"))

//matchAll() string 
let machingData = "The quick brown fox jamps the lazy dog!"
console.log(machingData.matchAll("The quick brown fox jamps the lazy dog!"))
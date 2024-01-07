/*
Numbers used when a typer whants to store data
as a numbers in a memroy.
*/
let value1 = 200 ;
let value2 = 20.97664 ;
let value3 = 3000000000 ;
console.log(value1.toFixed(2)) // add Decimal values by choice (3-ex)
console.log(value1.toString().concat(" Something More"))
// converted to a string then we can use all string methods on the chosen value.
console.log(value1.toPrecision(4)) // If value as in Decimal then use toPrecision to precise value.
console.log(value3.toLocaleString()) //use toLocaleString method in numbers to read a big values easily.

//++++++++++   Math Library   ++++++++//
// By the way it's a Math Library or Subject.
console.log(Math.abs(-9))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.max(1,2,3,4,5,6))
console.log(Math.min(1,2,3,4,5,6))
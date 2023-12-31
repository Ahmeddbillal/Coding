/* This talk is about Conversion?
Whats did some times data came from the Server
and we don't know, What data types is. Takeover
that knowledge we have a conversion in Java
Script.Actually it just a one reason some more
reasons will known soon. 
*/
/*
if there is some fault in a value, then we convert into a number, out put is NaN Not a Number.Example 12dds, undifined , mean thease value not convert to a number it have to be give result NaN.
*/
let trues = 1;
let fuse = 0;
let score = 90;
let Runrate = "100";
let noun = "Melburn"; 
let numberConversionTo = String(score)
console.log(typeof numberConversionTo)// String Out-Put is 90

let stringConversionTo = Number(Runrate)
console.log(stringConversionTo)
console.log(typeof stringConversionTo)
console.log(Runrate)

let ConversionTo = Boolean(trues)
console.log(ConversionTo) 
console.log(typeof ConversionTo) 


/*****************  Operations  *****************/
// Different method of combining values.
let value = 6;
let negValue = -value
console.log(negValue)

// new method of combining valuse.
let str1 = "Paining in";
let str2 = " head";
let str3 = str1 + str2;
console.log(str3);

// Combining string & number, importatnt this is look it sides.
let num1 = 12 + "11";
let num2 = "11" + 12;
let num3 = 11 + 12 + "33";
let num4 = "44" + 11 + 12;
 console.log([num1,num2,num3,num4])
 

 let myobj = {
    name: "bilal",
    age: 20,
}
console.log(myobj)
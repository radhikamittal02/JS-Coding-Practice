/*   Primitive Data Types  
     integer => number 2 to power 54
     BigInt => big number
     Null => absence of object, Object.getPrototypeOf(), Object.create() returns null
     undefined => absence of value , return statement with no value returns undefined ,Array.prototype.find return undefined when no element found
     string => collection of chracters, immutable (once you created no way to modify)
     symbol => unique , immutable primitive value , purpose to create unique property keys that are gurraned not to clash any other key 
     boolean => 

     Non- Primitive Data type 
     object 
*/

let name = true; // number
// console.log(typeof name);
let afterConversion = Number(name);
// console.log(afterConversion);
// console.log(typeof afterConversion);

// value => after converion value into Number , type
// "33" => 33 number
// "33abc" => NaN number
// null => 0 number
// undefined =>  NaN number
// true => 1 // false => 0

let value = "";
let convertedValue = Boolean(value);
// console.table([value, typeof value, convertedValue, typeof convertedValue]);

// "" => 0 
// "radhika" => 1

let str = 33;
let convertVal = String(str);
console.table([str, typeof str, convertVal, typeof convertVal]);




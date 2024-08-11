console.log("1" + 1 + 2); 
console.log(1+2+"3");

let foo = "foo";
foo += false; // "foofalse"
foo += "bar"; // "foofalsebar"

/************* Null coaleasing Assignment Operator */
const a = { duration: 50 };

a.speed ??= 25;
// console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
// console.log(a.duration); // assigns to the left if the left operand is nullish (null or undefined).
// Expected output: 50

let opr = 22;
opr ??= "ramesh"
console.log(opr);

/************* Null coaleasing Operator */
console.log(null ?? "Radhika") // radhika
console.log(0 ?? "garg");
console.log(undefined ?? "yes")
console.log("" ?? "here")

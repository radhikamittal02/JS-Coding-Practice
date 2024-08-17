const date = new Date();
// console.log(date); //2024-08-17T10:50:28.163Z
// console.log(date.toDateString()); // Sat Aug 17 2024
// console.log(date.toLocaleTimeString()); // 10:53:27 AM

const myDate = new Date(2024 , 7, 17);
// console.log(myDate.toDateString()); // Sat Aug 17 2024

const myDate1 = new Date("08-17-2024");
// console.log(myDate1.toLocaleString());

// to get the timestamp of date
const getTimestamp = Date.now();
// console.log(getTimestamp); // 1723892541054

// play with locale string
const dateString  = new Date();
console.log(dateString.toLocaleString("default", {}));



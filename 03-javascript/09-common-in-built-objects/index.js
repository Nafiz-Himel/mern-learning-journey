console.log(Math.PI);

console.log(Math.max(60,40,70,100));
console.log(Math.min(60,40,70,100));

console.log(Math.round(1.6));

console.log(Math.floor(1.4));
console.log(Math.ceil(1.4));

console.log(Math.abs(-1.4));

console.log(Math.sqrt(25));

console.log(Math.pow(2,5));


let curr = new Date();
let date = new Date("May 27, 2004");

console.log(curr);
console.log(date);

let newDate = new Date(1998, 5, 21 , 7);
console.log(newDate);

console.log(newDate.getDay());

console.log(newDate.getFullYear());

console.log(newDate.setFullYear(2001));
console.log(newDate);



// output:
// 3.141592653589793
// 100
// 40
// 2
// 1
// 2
// 1.4
// 5
// 32
// 2026-04-04T18:20:43.366Z
// 2004-05-26T18:00:00.000Z
// 1998-06-21T01:00:00.000Z
// 0
// 1998
// 993085200000
// 2001-06-21T01:00:00.000Z
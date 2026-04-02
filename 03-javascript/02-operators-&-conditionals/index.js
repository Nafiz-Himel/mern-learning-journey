let a = 2;
let b = 4;
let c = a + b;
let d = a ** b;

console.log(c); //6
console.log(d); //16

let e = "himel";
let f = "nafiz";

console.log(f+e); //nafizhimel

console.log(a++); //2
console.log(++b); //5

console.log(10<5);
console.log(10===5); //value & type of data should be same
console.log(10===10);
console.log('10'===10);
//lose equality(==),strict equality(===)
let age = 25;
let status1 = (age>=18) ? "I can vote" : "I can not vote";

console.log(status1);

let ans = (false || true || false);
console.log(ans);

let anns = (true && true && false);
console.log(anns);

let annss = !(true);
console.log(annss);

console.log(false || "himel")

console.log(2 & 5); // 0
console.log(2 | 5); // 7
console.log(~(0)); // -1
console.log(~(1)); // -2
console.log(2 ^ 2); // 0
console.log(8 >> 2); // 8/4 = 2
console.log(8 << 2); // 8*4 = 32


if(age>18)
{
    console.log("I can vote");
}
else if(age=18)
{
    console.log("I can vote");
}
else
{
    console.log("I can not vote");
}

let num = 3;
switch(num)
{
    case 1: console.log(a);
    break;
    case 2: console.log(b);
    break;
    case 3: console.log(c);
    break;
    default: console.log(f);
}



// output:
// 6
// 16
// nafizhimel
// 2
// 5
// false
// false
// true
// false
// I can vote
// true
// false
// false
// himel
// 0
// 7
// -1
// -2
// 0
// 2
// 32
// I can vote
// 6
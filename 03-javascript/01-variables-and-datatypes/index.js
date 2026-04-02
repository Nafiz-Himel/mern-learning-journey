// var age = 25;

// if(true){
//     console.log(age);
// }

// function solve() {
//     var age = 25;
//     console.log(age);
// }
// console.log(age); ->ReferenceError: age is not defined
// solve();

// var x = 10;
// var x = 20;

// console.log(x); ->possible

// {
//     let a = 10;
// }
// console.log(a);

{
    let a = 10;
    console.log(a);
}

// let b = 10;
// let b = 20;
// console.log(b); ->Not possible

let a = 20;
a = 10;
a = "himel";
a = true;
a = null;

console.log(a);

const c = 28;
console.log(c);
// c = 29;
// const c =29;
// console.log(c); ->Not possible

// let age; 
// console.log(age) ->undefined datatype

let marks;
marks = true;
console.log(typeof(marks));
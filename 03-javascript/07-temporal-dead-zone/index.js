// global scope

var age = 15;

console.log(age);
{
    console.log(age);
}

if(true) {
    console.log(age);
}

for( let i=0; i<2; i++)
{
    console.log(age);
}

function sayHello() {
    console.log("Hi",age);
}
sayHello();

let agge = 15;

console.log(agge);
{
    console.log(agge);
}

if(true) {
    console.log(agge);
}

for( let i=0; i<2; i++)
{
    console.log(agge);
}

function sayHeello() {
    console.log("Hi",agge);
}
sayHeello();

const agee = 15;

console.log(agee);
{
    console.log(agee);
}

if(true) {
    console.log(agee);
}

for( let i=0; i<2; i++)
{
    console.log(agee);
}

function sayHelloo() {
    console.log("Hi",agee);
}
sayHelloo();



//function scope
function syHello() {
    var fullName = "Earth";
    console.log("Hello world", fullName);
}
// console.log(fullName);
syHello();


//block
console.log(height); // undefined
{
    var height = 180;
}
console.log(height);

// console.log(heiight); // error
// {
//     let height = 180;
// }
// console.log(heiight); // error

// console.log(heiightt); // error
// {
//     const height = 180;
// }
// console.log(heiightt); // error

// temporal deadzone
// console.log(marks); // error ->temporal deadzone
let marks = 100; //const,let
console.log(marks);

// output:
// 15
// 15
// 15
// 15
// 15
// Hi 15
// 15
// 15
// 15
// 15
// 15
// Hi 15
// 15
// 15
// 15
// 15
// 15
// Hi 15
// Hello world Earth
// undefined
// 180
// 100
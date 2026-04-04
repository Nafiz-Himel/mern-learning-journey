sayMyName("himel");

function sayMyName(finalName) {
    console.log(finalName);
}

console.log(age);

var age = 25;



{
    sayMyName("himel");

    function sayMyName(finalName) {
        console.log(finalName);
    }

    console.log(age);

    var age = 25;
}

// console.log(agee);
// console.log(agge);

// let agee = 25;
// const agge = 25;
// {
// sayHello();
// let sayHello = function() {
//     console.log("Hi, How are you?");
// }
// }

class human {

}

const obj1 = new human();
// const obj1 = new human();
// class human {

// }

function greetMe(greet, fullName) {
    console.log("hello", fullName);
    greet()
}

function greet () {
    console.log("Greeting for the day");
}

// greet();
greetMe(greet,"Himel");



function solve(number) {
    return function(number) {
        return number*number;
    }
}

let aans = solve(5);
let finalAnss = aans(10);

console.log(finalAnss);


const arr = [
    function(a,b) {
        return a+b;
    },
    function(a,b) {
        return a-b;
    },
    function(a,b) {
        return a*b;
    }
];

let first = arr[0];
let annss = first(5,10);
console.log(annss);


let obj = {
    age : 25,
    wt: 36,
    ht: 180,
    greet: () => {
        console.log("hello world");
    }
}

console.log(obj.age);
obj.greet();


// output:
// himel
// undefined
// himel
// 25
// hello Himel
// Greeting for the day
// 100
// 15
// 25
// hello world
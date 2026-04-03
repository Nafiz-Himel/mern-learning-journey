//object
let obj = {
    name: "Himel",
    // "full name": "Nafiz himel",
    age: 25,
    weight: 85,
    height: "6ft lin",
    greet: function()
    {
        console.log("hello, how are you?");
    }
};

console.log(obj);
console.log(obj.age);
obj.greet();

console.log(typeof(obj));


//array
// creation of arrays
let arr = [1,2,3,4,5];
console.log(arr);
// array constructor
let brr = new Array("nafiz",1,true);
console.log(brr);

console.log(typeof(arr));
console.log(typeof(brr));

console.log(brr[1]);


//built-in methods
brr.push("Himel");
console.log(brr[3]);

brr.pop();
console.log(brr);

brr.shift();
console.log(brr);

brr.unshift("Himel");
console.log(brr);

brr.push(20,30,40,50);
console.log(brr);

console.log(brr.slice(2,4));

brr.splice(1,2,"Nafiz");
console.log(brr);

let a = [10,20,30];

// let ansArray = a.map(function(number) {
//     return number * number;
// });

// function ansArray(number) {
//     return number * number;
// }
// let result = a.map(ansArray);

let ansArray = a.map((number) =>{
    return number*number;
})
console.log(ansArray);

a.map((number,index) => 
{
    console.log(number);
    console.log(index);
})

let aa = [22,11,33,44,55];
let evenArray = aa.filter((number) =>{
    // if(number%2 === 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return number%2 === 0;
});
console.log(evenArray);

let ens = aa.filter((value) =>{
    if(typeof(value) == "string"){
        return true;
    }
    else
    {
        return false;
    }
});
console.log(ens);

let crr = [10,20,30,40];
let summ = crr.reduce((acc,curr) =>{
    return acc+curr;
},0);

console.log(summ);

// aa.sort();
aa.sort((a, b) => a - b); // Ascending
console.log(aa);
// aa.sort();
// aa.reverse();
aa.sort((a, b) => b - a); // Descending
console.log(aa);

console.log(crr.indexOf(20));

let reslt = crr.find(number => {
    return number > 20;
});

console.log(reslt);

//for-each
let drr = [10,20,30];
drr.forEach((value,index) => {
    console.log("NUmber:", value, "Index:", index);
});

// for-in
for(let key in obj) {
    console.log(key, " ", obj[key]);
}

// for-of 
let err = [10,20,30,40];
for(let value of err)
{
    console.log(value);
}


//arrays with functions
let frr = [10,20,30,40,50];

function getSum(frr) {
    // let len = frr.length;
    let sum = 0;
    // for(let idx = 0; idx<len; idx++)
    // {
    //     sum += frr[idx];
    // }

    frr.forEach((value)=> {
        sum += value;
    })
    return sum;
}

let totalSum = getSum(frr);
console.log(totalSum);


// output:
// name: 'Himel',
//   age: 25,
//   weight: 85,
//   height: '6ft lin',
//   greet: [Function: greet]
// }
// 25
// hello, how are you?
// object
// [ 1, 2, 3, 4, 5 ]
// [ 'nafiz', 1, true ]
// object
// object
// 1
// Himel
// [ 'nafiz', 1, true ]
// [ 1, true ]
// [ 'Himel', 1, true ]
// [ 'Himel', 1, true, 20, 30, 40, 50 ]
// [ true, 20 ]
// [ 'Himel', 'Nafiz', 20, 30, 40, 50 ]
// [ 100, 400, 900 ]
// 10
// 0
// 20
// 1
// 30
// 2
// [ 22, 44 ]
// []
// 100
// [ 11, 22, 33, 44, 55 ]
// [ 55, 44, 33, 22, 11 ]
// 1
// 30
// NUmber: 10 Index: 0
// NUmber: 20 Index: 1
// NUmber: 30 Index: 2
// name   Himel
// age   25
// weight   85
// height   6ft lin
// greet   [Function: greet]
// 10
// 20
// 30
// 40
// 150
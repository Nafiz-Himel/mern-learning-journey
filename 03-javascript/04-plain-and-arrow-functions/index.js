//funstion definition
function sayMyName()
{
    console.log("Nafiz Himel");
}

//funstion use- funstion call
sayMyName();

function printCounting()
{
    for(let i=0; i<5; i++)
    {
        console.log(i);
    }
}

printCounting();


function printNumber(num)   //parameter
{
    console.log("Printing Number:", num);
}

printNumber(5);     //argument

function getAverage(num1, num2)
{
    let avg = (num1+num2)/2;
    console.log("Average:", avg);
}

getAverage(5,3);


// return function
function getSum(a,b,c)
{
    let sum = a+b+c;
    return sum;
    //unreachable statements
    // let a = 10;
    // let b = 20;
    // let sum = a + b;
    // console.log(sum);
}

let ans = getSum(1,2,3);
console.log("Printing sum:",ans);

function getMyName(firstName, lastName)
{
    // let fullName = firstName + " " + lastName; //7 7
    let fullName = firstName + lastName; //14
    return fullName;
}

//funstion expression

let fullName = getMyName(7,7);
console.log("Full Name:", fullName);

let getMulti = function(a,b)
{
    return a*b;
}

let answer = getMulti(2,2);
console.log(answer);

let getSquare = function(a,b)
{
    return a**b;
}
console.log(getSquare(3,2));

//arrow function

// function getExp(x,y)
// {
//     return x**y;
// }

// let getExp = function(x,y)
// {
//     return x**y;
// }

let getExp = (x,y) =>
{
    return x**y;
}

console.log(getExp(2,10));
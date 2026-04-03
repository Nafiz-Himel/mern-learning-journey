// Loop
for(let i=0; i<5; i++)
{
    if(i == 3)
    {
        break;
    }
    if(i == 0)
    {
        continue;
    }
    console.log(i);
}

let i =0;
while(i<5)
{
    console.log(i);
    i++;
}

do{
    console.log(i);
    i++;
}while(i<5)





// String
let firstName = `Nafiz
Rayhan`;
let lastName = "Himel";

console.log(typeof(firstName));
console.log(firstName);

let nme = new String("Nafiz Himel");
console.log(nme);

let op1 = "English ";
let op2 = "Bangla";

let ans = op1 + op2;
console.log(ans);

let finalAns = `op1 + op2`;
console.log(finalAns);

let finalAnss = `${op1}${op2}`;
console.log(finalAnss);

console.log(finalAnss.length);

console.log(op1.toUpperCase());
console.log(op2.toLowerCase());

let str = "Hello, I am Nafiz";
console.log(str.substring(2));
console.log(str.substring(2,4));

let sentence = "Hello, How Are You?";
let sentnce = "Hello, \\How\\ \"Are\" You?";
let words = sentence.split(" ");
let wrds = sentnce.split("\\");

console.log(sentnce);
console.log(words);
console.log(wrds);



// output:
// 1
// 2
// 0
// 1
// 2
// 3
// 4
// 5
// string
// Nafiz
// Rayhan
// [String: 'Nafiz Himel']
// English Bangla
// op1 + op2
// English Bangla
// 14
// ENGLISH
// bangla
// llo, I am Nafiz
// ll
// Hello, \How\ "Are" You?
// [ 'Hello,', 'How', 'Are', 'You?' ]
// [ 'Hello, ', 'How', ' "Are" You?' ]
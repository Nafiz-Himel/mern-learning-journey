let obj = {
    age:12,
    wt:68,
    ht:180,
};

console.log(obj);

obj.color = " white";

console.log(obj);


//spreed operator ...
let src = {
    age:10,
    wt:5,
    ht:190,
};

let dst = src;
console.log("src: ", src);
console.log("dst: ", dst);

src.age= 90;
console.log("src: ", src);
console.log("dst: ", dst);



let dest = {...src};
console.log("src: ", src);
console.log("dest: ", dest);

src.age= 100;
console.log("src: ", src);
console.log("dest: ", dest);


// assgin
let src2 = {
    value:101,
    name: "Nafiz Himel",
}
let dstt = Object.assign({},src,src2);

src.age = 900;

console.log("src: ", src);
console.log("dstt: ", dstt);


//itration
let ddst = {};

//cloning using iterator
for(let key in src ) {
    let newKey = key;
    let newValue = src[key];

    //insert newKey and value in ddst and create a clone
    ddst[newKey] = newValue;
}

src.age = 750;
console.log("src: ", src);
console.log("ddst: ", ddst);



// output:
// { age: 12, wt: 68, ht: 180 }
// { age: 12, wt: 68, ht: 180, color: ' white' }
// src:  { age: 10, wt: 5, ht: 190 }
// dst:  { age: 10, wt: 5, ht: 190 }
// src:  { age: 90, wt: 5, ht: 190 }
// dst:  { age: 90, wt: 5, ht: 190 }
// src:  { age: 90, wt: 5, ht: 190 }
// dest:  { age: 90, wt: 5, ht: 190 }
// src:  { age: 100, wt: 5, ht: 190 }
// dest:  { age: 90, wt: 5, ht: 190 }
// src:  { age: 900, wt: 5, ht: 190 }
// dstt:  { age: 100, wt: 5, ht: 190, value: 101, name: 'Nafiz H
// imel' }
// src:  { age: 750, wt: 5, ht: 190 }
// ddst:  { age: 900, wt: 5, ht: 190 }

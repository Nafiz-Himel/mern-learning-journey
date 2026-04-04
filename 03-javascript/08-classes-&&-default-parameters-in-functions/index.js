class Human {
    //properties
    age = 13;   // public
    #wt = 80;    // private
    ht = 180;

    //behaviour
    walking(){
        console.log("I am walking", this.#wt);
    }

    running() {
        console.log("I am running");
    }

    get fetchWeight() {
        return this.#wt;
    }

    set modifyWeight(val) {
        this.#wt = val;
    }
}

let obj = new Human();
console.log(obj.age);
// console.log(obj.wt); // error

obj.walking();



class Man {
    age;
    ht;
    #wt;

    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.ht = newHeight;
        this.#wt = newWeight;
    }

    get fetchWeight() {
        return this.#wt;
    }
}

let objj = new Man(50, 60, 101);
console.log(objj.ht);
console.log(objj.fetchWeight);



// default parameter
function sayName(myName = "HIMEL") {
    console.log("My Name is:", myName);
}
// sayName(); // undefined
// sayName("Himel"); // My name is Himel

sayName();


function syName(fName = "Nafiz", lName= fName.toUpperCase()) {
    console.log("My name is:", fName, " ", lName);
}

syName();


function solve(value = {age:14, wt:90, ht:190}) {
    console.log("hello", value);
}

solve();
solve(null); // null
solve(undefined); // hello { age: 14, wt: 90, ht: 190 }


function getAge() {
    return 190;
}

function utility(name = "himel", age = getAge()) {
    console.log(name, " ", age);
}

utility();


// output:
// 13
// I am walking 80
// 60
// 101
// My Name is: HIMEL
// My name is: Nafiz   NAFIZ
// hello { age: 14, wt: 90, ht: 190 }
// hello null
// hello { age: 14, wt: 90, ht: 190 }
// himel   190
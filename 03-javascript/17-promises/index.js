
// let firstPromise = new Promise( (resolve, reject) => {
//     console.log("himel");
//     // resolve(1001);
//     reject(new Error("Internal Server Error"));
// });


// function sayMyName() {
//     console.log("My name is Nothing");
// }

// setTimeout(sayMyName, 10000);



let firstPromise = new Promise( (resolve, reject) => {
    setTimeout(function sayMyName() {
        console.log("My name is Nothing");
    }, 1000);

    // return 1; -> pending
    // resolve (1); -> pending
});


let promise1 = new Promise((resolve, reject) => {
    let success = false;
    if(!success) {
        resolve("Promise Fulfilled")
    }
    else
    {
        reject("Promise Rejected")
    }
});

// promise1.then((message) => {
//     console.log("Then msg: " + message);
// }).catch((error) => {
//     console.log("Error: " + error);
// });

promise1.then((message) => {
    console.log("first msg: " + message);
    return "Promise fulfilled second message";
}).then((message) => {
    console.log("second msg: " + message);
    return "Promise fulfilled third message";
}).then((message) => {
    console.log("third msg: " + message);
}).finally((message) => {
    console.log("Final msg.");
});


let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "2nd");
});
let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "3rd");
});


Promise.all([promise2, promise3, promise4]).then((values) => {
    console.log(values);
}).catch((error) => {
    console.error("Error:" + error);
});
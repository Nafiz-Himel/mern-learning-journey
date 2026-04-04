// compile time error
// syntax error
// console.log(1;

// runtime error
//reference error
// console.log(x); 



try{
    console.log("Try block starts here.");
    console.log(x);
    console.log("try block ends here");
}
catch(err) {
    console.log("I am here.");
    console.log("Your erro is here: " , err);
}

//finaly block -> will run anytime
finally{
    console.log("I will run everytime, as I am finally block");
}



//let's create a custom error
try{
    //reference error
    console.log(x);
}
catch(err) {
    throw new Error("First do declare, then print");
}


// let errorCode = 100;
// if(errorCode == 100) {
//     throw new Error("Invalid Json");
// }


// output:
// Try block starts here.
// I am here.
// Your erro is here:  ReferenceError: x is not defined
// throw new Error("First do declare, then print");
// Error: First do declare, then print
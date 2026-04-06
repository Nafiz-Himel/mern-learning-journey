let name = "Rayhan";

function outerFunction() {
    // {
    //     let name = "Nothing"; //name is not defined
    // }
//   let name = "Himel"; // let -> block scoped
  function innerFunction() {
    // let name = "Nafiz";
    console.log(name);
    }
    innerFunction();
}

outerFunction();


function outerFunction() {
  let name = "Hiiimel"; // let -> block scoped

  function innerFunction() {
    console.log(name);
    }

    return innerFunction();
}

let inner = outerFunction();
inner();
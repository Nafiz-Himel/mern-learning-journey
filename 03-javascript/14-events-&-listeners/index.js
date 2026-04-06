function changeText() {
    let fpara = document.getElementById("fpara");
    fpara.textContent = "Hello World";
}

let fpara = document.getElementById("fpara");

fpara.addEventListener("click", changeText);


// let fpara = document.getElementById("fpara");

// fpara.addEventListener("click", function () {
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "Hello World";
// });

fpara.removeEventListener("click", changeText);



function changeText(event) {
    console.log(event);
    let fpara = document.getElementById("fpara");
    fpara.textContent = "Hello World";
}

fpara.addEventListener("click", changeText);

fpara.removeEventListener("click", changeText);


let anchorElement = document.getElementById("fanchor");

anchorElement.addEventListener("click", function(event){
    event.preventDefault();
    anchorElement.textContent = "Click done, Bro!";
});



// let paras = document.querySelectorAll("p");

// for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener("click", function() {
//         alert("You have play clicked on para: " + (i+1));
//     })
// }


let paras = document.querySelectorAll("p");


function alertPara(event) {
    if(event.target.nodeName === "SPAN") {
        alert("You have play clicked on para: " + event.target.textContent);
    }
}

for(let i=0; i<paras.length; i++) {
    let para = paras[i];
    para.addEventListener("click", alertPara);
}


let mydiv = document.getElementById("wrapper");
document.addEventListener("click", alertPara);



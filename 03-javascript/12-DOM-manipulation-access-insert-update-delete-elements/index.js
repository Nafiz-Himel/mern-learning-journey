// // access
// document.getElementById("fpara");
// document.getElementById("fheading");
// document.getElementsByClassName("fh2");
// document.getElementsByTagName("p");
// document.getElementsByQuerySelector("#fpara");
// document.getElementsByQuerySelector(".fh2");
// document.getElementsByQuerySelectorAll("p");

// inner html
// p.innerHTML = "hi, hello, how are you?";

// outer html 
// p.outerHTML;

// let element = document.querySelector("#fdiv");
// element 
// element.textContent
// element.innerText


// crated & add 
// let fHeeading = document.createElement("h1");
// fHeeading
// fHeeading.textContent = "My name is Nothing";
// fHeeading
// let bodyTag = document.query Selector("body");
// bodyTag.appendChild(fheeading);
// bodyTag


let myDiv = document.querySelector("#myDiv");
let newElement = document.createElement("span");
newElement.textContent = "This is Nothing";
// myDiv.insertAdjacntElement("beforebegin", newElement);  // ->before myDiv
// myDiv.insertAdjacntElement("afterbegin", newElement);   // ->inner myDiv upper
// myDiv.insertAdjacntElement("beforeend", newElement);    // ->inner myDiv end
myDiv.insertAdjacntElement("afterend", newElement);        // ->after myDiv

let parent = Children.parentElement;
let child = document.quesrySelector("#fpara");
parent.removeChild(child);
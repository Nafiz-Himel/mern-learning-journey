let paraElement = document.getElementById("spara");
// undefined
// paraElement
{/* <p id=​"spara" style=​"background-color:​ blue;​ padding:​ 0.8rem;​ color:​ white;​">​ Second Paragraph ​</p>​ */}
// console.log(paraElement.style);
// VM1314:1 CSSStyleDeclaration {0: 'background-color', 1: 'padding-top', 2: 'padding-right', 3: 'padding-bottom', 4: 'padding-left', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
// undefined
paraElement.style.backgroundColor = "blue";
// 'blue'
paraElement.style.color = "white";
// 'white'



let secondElement = document.getElementById("sdiv");
// undefined
// secondElement;
{/* <div id=​"sdiv" style=​"background-color:​ black;​ color:​ white;​ padding:​ 0.5rem;​">​…​</div>​ */}
// secondElement.cssText;
// undefined
// secondElement.style.cssText;
// 'background-color: yellow; padding: 2rem;'
secondElement.style.cssText = "background-color: black; color : white; padding: 0.5rem";
'background-color: black; color : white; padding: 0.5rem';


let firstElement = document.querySelector("#fdiv");
// undefined
// firstElement;
{/* <div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​" class=​"divclass">​…​</div>​ */}
firstElement.setAttribute("class","divclass");
// undefined
// firstElement;
{/* <div id=​"fdiv" style=​"background-color:​ aqua;​ padding:​ 2rem;​" class=​"divclass">​…​</div>​ */}



let fpara = $0
// undefined
// fpara
{/* <p id=​"fpara" style=​"margin:​ 1rem">​ First Paragraph. ​</p>​ */}
fpara.setAttribute("style", "margin: 1rem");
// undefined
// fpara
// <p id=​"fpara" style=​"margin:​ 1rem">​ First Paragraph. ​</p>​



// fpara.className;
// 'guku vegeta'
fpara.className = "nth ntg";
// 'nth ntg'
// fpara.className;
// 'nth ntg'

// let fpara = document.querySelector("#fpara");
// undifined
// fpara 
// fpara.classList;

// fpara.className.add("thirdClass");
// fpara.className.remove("firstClass");
// fpara.classList.toggle("secondClass");

// fapara.classList.contains("firstClass");
// false

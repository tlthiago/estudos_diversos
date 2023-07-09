// getElementyById()
const element1 = document.getElementById("blog-title");
console.log(element1);

// getElementsByClassName()
const element2 = document.getElementsByClassName("one");
console.log(element2);

// getElementsByTagName()
const element3 = document.getElementsByTagName("meta");
console.log(element3);

// querySelector()
const element4 = document.querySelector("[src]");
console.log(element4);

// querySelectorAll()
const element5 = document.querySelectorAll(".one");
console.log(element5);

element5.forEach((el) => console.log(el));

// Text Content
const element6 = document.querySelector("p");
element6.textContent = "Parágrado editado";

// Inner Text
const element7 = document.querySelector("h1");
element7.innerText = "Thiago Alves";

// Innet HTML
const element8 = document.querySelector(".two");
element8.innerHTML = "Olá Devs! <small>!!!</small>";

// Value
const element9 = document.querySelector("input");
console.log(element9.value);
element9.value = "Outro valor";

// Atributos
const header = document.querySelector("header");
header.setAttribute("id", "header");

const headerID = document.querySelector("#header");
console.log(headerID.getAttribute("class"));
header.removeAttribute("id");
header.removeAttribute("class");
header.setAttribute("class", "bg header");

// Alterando estilos
const element10 = document.querySelector("body");
element10.style.backgroundColor = "#F9F3D2";
console.log(element10.style.backgroundColor);

// ClassList
const element11 = document.querySelector("body");
element11.classList.add("active", "green");
console.log(element11.classList);
element11.classList.remove("active");
element11.classList.toggle("active");

// ParentNode ParentElement
const element12 = document.querySelector("body");
console.log(element12.parentNode);
console.log(element12.parentElement);

// ChildNodes children
const element13 = document.querySelector("body");
console.log(element12.childNodes);
console.log(element12.children);

// firstChild firstElementChild
console.log(element12.firstChild);
console.log(element12.firstElementChild);

// lastChild lastElementChild
console.log(element12.lastChild);
console.log(element12.lastElementChild);

// nextSibling nextElementSibling
const element14 = document.querySelector("body script");
console.log(element14.nextSibling);
console.log(element14.nextElementSibling);

// previousSibling previousElementSibling
console.log(element14.previousSibling);
console.log(element14.previousElementSibling);

// createElement
const div = document.createElement("div");
div.innerText = "Olá Thiago!";

// append prepend
const body2 = document.querySelector("body");
body2.append(div);
body2.prepend(div);

// insertBefore
const div2 = document.createElement("div");
div2.innerText = "Olá Paulo!";

const script = body2.querySelector("script")
body2.insertBefore(div2, script);

// insertAfter
const div3 = document.createElement("div");
div3.innerText = "Olá Alexandro!";
const header2 = body2.querySelector("header");
body2.insertBefore(div3, header.nextElementSibling);

// Eventos
function print() {
    console.log("print");
}

const input = document.querySelector("input");
input.onkeydown = function() {
    console.log("rodei");
}

const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", print);

// Argumento event
input.onclick = function(event) {
    console.log(event.currentTarget);
}
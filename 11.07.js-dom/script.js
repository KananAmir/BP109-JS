// DOM - document object model
// BOM - brouser object model

// window - global object
// console.log(window.document);
// console.log(window.document);
// console.log(window.document.head);
// console.log(window.document.body);

const mainHeading = document.getElementById("main-heading");

// console.log(mainHeading.textContent);

//node list
const languageInputs = document.getElementsByName("language");

// console.log(languageInputs);
// console.log(languageInputs[0]);

//html collection
const allParags = document.getElementsByTagName("p");

// console.log(allParags);

// languageInputs.forEach((input) => {
//   console.log(input);
// });

//error
// allParags.forEach((input) => {
//   console.log(input);
// });

// console.log(allParags[0]);

let paragsArr = Array.from(allParags);

// paragsArr.forEach((input) => {
//   console.log(input);
// });

// html collection
const listItems = document.getElementsByClassName("item");

// console.log(listItems);
Array.from(listItems).forEach((liElement, index) => {
  //   console.log(liElement.textContent);
  liElement.textContent = `${index + 1} - ${liElement.textContent}`;
});

//querySelector vs querySelectorAll

const box = document.querySelector(".wrapper .outer-box .inner-box");

// const mainHeading = document.querySelector("#main-heading");

// console.log(box);

const allListElements = document.querySelectorAll("nav #menu .item");

// console.log(allListElements);

//textContent, innertText, innerHtml

console.log(mainHeading.textContent);
console.log(mainHeading.innerText);
console.log(mainHeading.innerHTML);

let note = document.getElementById("note");
console.log(note.textContent);
console.log(note.innerText);

const text = document.querySelector(".text");
// console.log(text);

// text.textContent = "hello css";
// text.textContent = `<em>hello</em> <strong>css</strong>`;
// text.innerText = `<em>hello</em> <strong>css</strong>`;
text.innerHTML = `<em>hello</em> <strong>css</strong>`;

const textNote = document.querySelector("#main .note");

// console.log(textNote.textContent);
// console.log(textNote.parentElement);
// console.log(textNote.parentElement.parentElement);
console.log(textNote.parentNode);

const noteDiv = document.querySelector("#note");
const text2 = document.querySelector("#note .text-2");

console.log(noteDiv.children);
// console.log(noteDiv.children[0]);
// console.log(noteDiv.childNodes);
console.log(noteDiv.firstElementChild);
console.log(noteDiv.lastElementChild);
console.log(noteDiv.firstChild);
console.log(noteDiv.lastChild);

// console.log(text2);
console.log(text2.nextSibling);
console.log(text2.nextElementSibling);
console.log(text2.previousSibling);
console.log(text2.previousElementSibling);

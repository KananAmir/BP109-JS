// let str = "lorem";

// strings are immutable

// const numbers = [1, 2, 3, 4];

// numbers[1] = 222;
// numbers.push(5);
// numbers.shift();

// console.log(numbers);

// let str = "lorem";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
// console.log(str);

//length

let str = "javascript";

// console.log(str.length);
// console.log(str.length);
// console.log(str.charAt(2)); //v
// console.log(str.charCodeAt(1)); //v
// console.log(str.at(2)); //v
// console.log(str.at(-2)); //p
// console.log(str[0]); //j
// console.log(str[str.length - 1]); //t

// console.log(str.slice());
// console.log(str.slice(1));
// console.log(str.slice(4));
// console.log(str.slice(2, 5));

// console.log(str.slice(-1, -6)); //""
// console.log(str.slice(-6)); // script
// console.log(str.slice(-6, -1)); // scrip

// console.log(str.substring()); //javascript
// console.log(str.substring(0)); //javascript
// console.log(str.substring(4)); //script

// console.log(str.substr(2, 5)); //deprecieted

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase("az"));

// let fName = "Jhon";
// let lName = "Doe";

// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));

// console.log(fName + " " + lName);
// console.log(`${fName} ${lName}`);

// console.log("      asus     ".trimStart());
// console.log("      asus     ".trimEnd());
// console.log("      asus     ".trim());

// console.log("1234123412341234".slice(-4).padStart(16, "*"));
// console.log("Salam ".padEnd(15, "@"));

// console.log("a bb ccc dddd aaaa bbb cc d".replace("b", "Q"));
// console.log("a bb ccc dddd aaaa bbb cc d".replaceAll("b", "Q"));

let str2 = "lorem ipsum dolor";

// console.log(str2.split());
// console.log(str2.split(""));
console.log(str2.split(" "));

// function wordCount(sentence) {
//   return sentence.split(" ").length;
// }

let numStr = "1,2,3,4,5";

console.log(numStr.split(","));

let a = "hello";

// console.log([...a]);
// console.log(Array.from(a));

console.log("hello world".indexOf("llo")); // 2
console.log("hello world".indexOf("aaa")); // -1
console.log("hello world".indexOf("l", 5)); // 9
console.log("hello world".lastIndexOf("l")); // 9

console.log(a.startsWith("a")); //false
console.log(a.startsWith("h")); //true
console.log(a.endsWith("h")); //false
console.log(a.endsWith("o")); //true

console.log("hello world".includes("vorld"));
console.log("hello world".includes("world"));

let text = "Please locate where 'locate' occurs!";
let index = text.search(/locate/);

console.log(index);

console.log("aa 'b' aa");
console.log('aa "b" aa');

let text2 = "The rain in SPAIN stays mainly in the plain ain";
const myArr = text2.matchAll(/ain/g);

console.log([...myArr]);

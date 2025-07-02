var globalVar = 'I am var';
let globalLet = 'I am let';
const globalConst = 'I am const';

console.log(globalVar);    // Accessible
console.log(globalLet);    // Accessible
console.log(globalConst);  // Accessible


function testScope() {
  var a = 'var in function';
  let b = 'let in function';
  const c = 'const in function';
}
testScope();

console.log(a); // ❌ ReferenceError
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError

if (true) {
  var blockVar = 'var in block';
  let blockLet = 'let in block';
  const blockConst = 'const in block';
}

console.log(blockVar);   // ✅ accessible
console.log(blockLet);   // ❌ ReferenceError
console.log(blockConst); // ❌ ReferenceError


console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted';


console.log(hoistedLet); // ❌ ReferenceError (TDZ)
let hoistedLet = 'Let variable';

console.log(hoistedConst); // ❌ ReferenceError (TDZ)
const hoistedConst = 'Const variable';


var x = 10;
var x = 20; // ✅ Allowed

let y = 10;
// let y = 20; ❌ SyntaxError

const z = 10;
// const z = 20; ❌ SyntaxError


var a = 1;
a = 2; // ✅

let b = 3;
b = 4; // ✅

const c = 5;
c = 6; // ❌ TypeError

{
  console.log(foo); // ❌ ReferenceError
  let foo = 'bar';
}


// var — function-scoped variables (older code)
function legacyVar() {
  var message = "I'm a var";
  console.log(message);
}

// let — reassignable, block-scoped
let counter = 0;
counter++;

// const — fixed values
const PI = 3.14;


let first = "John";
let last = "Doe";
console.log(`Full name: ${first} ${last}`);


let address = `123 Main St
Cityville
Countryland`;
console.log(address);



let a = 10, b = 5;
console.log(`Sum is ${a + b}`);


function multiply(x, y) {
  return x * y;
}
console.log(`Product: ${multiply(4, 5)}`);


function tag(strings, ...values) {
  console.log(strings, values);
}
tag`Hello ${"World"}, you are ${100}% awesome!`;


function shout(strings, ...values) {
  return strings[0].toUpperCase() + values[0].toUpperCase();
}
console.log(shout`hello ${'world'}`);



let hour = 13;
console.log(`${hour < 12 ? 'Good morning' : 'Good afternoon'}`);


let items = ['Milk', 'Eggs', 'Bread'];
let html = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
console.log(html);


let str = `This is a backtick: \``;
console.log(str);



let table = `
<table>
  ${[1, 2].map(row => `
    <tr>
      ${[1, 2].map(col => `<td>Row ${row}, Col ${col}</td>`).join('')}
    </tr>`).join('')}
</table>`;
console.log(table);

let number = 7;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);



function multiply(x, y) {
  return x * y;
}
console.log(`Product: ${multiply(4, 5)}`);

function tag(strings, ...values) {
  console.log(strings, values);
}
tag`Hello ${"World"}, you are ${100}% awesome!`;

function shout(strings, ...values) {
  return strings[0].toUpperCase() + values[0].toUpperCase();
}
console.log(shout`hello ${'world'}`);

function shout(strings, ...values) {
  return strings[0].toUpperCase() + values[0].toUpperCase();
}
console.log(shout`hello ${'world'}`);


let hour = 13;
console.log(`${hour < 12 ? 'Good morning' : 'Good afternoon'}`);




let items = ['Milk', 'Eggs', 'Bread'];
let html = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
console.log(html);


let str = `This is a backtick: \``;
console.log(str);

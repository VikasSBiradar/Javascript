// SCOPE
var a = 12;
const b = 33;
let c = 44;
var d = 50;

document.write(`<p>a = ${a}</p>`);
document.write(`<p>b = ${b}</p>`);
document.write(`<p>c = ${c}</p>`);
document.write(`<p>d = ${d}</p><hr>`);

if (d > a) {
  // Block
  document.write("<p>CONDITION IS TRUE</p>");
  document.write(`<p>a = ${a}</p>`);
  document.write(`<p>b = ${b}</p>`);
  document.write(`<p>c = ${c}</p>`);
  document.write(`<p>d = ${d}</p><hr>`);

  var x = 100; // Weak variable bec of var keyword
  let y = 200;
  const z = 300;

  document.write(`<p>x = ${x}</p>`);
  document.write(`<p>y = ${y}</p>`);
  document.write(`<p>z = ${z}</p><hr>`);
}

document.write(`<p>x = ${x}</p>`);
//document.write(`<p>y = ${y}</p>`); //p3.html:47 Uncaught ReferenceError
//document.write(`<p>z = ${z}</p>`); //p3.html:48 Uncaught ReferenceErro

var isAdmin = false;
document.write(`<p>isAdmin = ${typeof isAdmin}</p>`);
document.write(`<p>isAdmin = ${isAdmin}</p>`);

var title = "Welcome to JS"; /* string and char => string */
document.write(`<p>title = ${typeof title}</p>`);
document.write(`<p>title = ${title}</p>`);

var xx = 12342;
document.write(`<p>xx = ${typeof xx}</p>`);
document.write(`<p>xx = ${xx}</p>`);

var yy = 34.343; /* number,float, hexa and exponetial => number */
document.write(`<p>yy = ${typeof yy}</p>`);
document.write(`<p>yy = ${yy}</p>`);

// Array
var colors = ["orange", "blue", "red", "green", 100, true, 500.5];
document.write(`<p>colors = ${typeof colors}</p>`);
document.write(`<p>colors = ${colors}</p>`);

// Object
var user = {
  // key:value => property
  name: "Ramesh",
  mobile: 9876543210,
  email: "ramesh@gmail.com",
};
document.write(`<p>user = ${typeof user}</p>`);
document.write(`<p>user = ${user}</p>`);
console.table(user);

// function block = behaviours
// function functionName(){} => Syntax

function defaultFun() {
  // Function Declaration
  let test = "This is DEFAULT FUNCTION.";
  document.write(`<p>${test}</p>`);
}
defaultFun(); // Function Calling

function parameterFun(name, email) {
  document.write(`<p>This is PARAMTERIZED FUNCTION.</p>`);
  document.write(`<p>First Parameter is : ${name}</p>`);
  document.write(`<p>Second Parameter is : ${email}</p>`);
}
parameterFun("JavaScript", "admin@javascript.com");

if (true) {
  var x = 5;
}
console.log(x);

console.log(parseInt("A", 16));

const myList = ["home" /* empty */, , "school" /* empty */, ,];
console.log(myList.length);

console.log(-123.4);

const str =
  "this string\
is broken \
across multiple \
lines.";
console.log(str); // this string is broken across multiple lines.

//Primitive Boolean (type boolean)
let primitiveFalse = false;
if (primitiveFalse) {
  console.log("This won't run");
}

//Boolean Object(type object)
let objectFalse = new Boolean(false);
if (objectFalse) {
  console.log("This will run, because objects are truthy");
}

var fruitType = "Apples";
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");

let num = 123.4;
console.log("\n" + num.toPrecision(8));

console.log(typeof 5);

let a = "21";
let b = "9";

let y = parseInt(a);
let z = parseInt(b);

let c =y+z;

console.log(c);

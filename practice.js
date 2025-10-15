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

// var fruitType = "Apples";
// switch (fruitType) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Apples":
//     console.log("Apples are $0.32 a pound.");
//     break;
//   case "Bananas":
//     console.log("Bananas are $0.48 a pound.");
//     break;
//   case "Cherries":
//     console.log("Cherries are $3.00 a pound.");
//     break;
//   case "Mangoes":
//     console.log("Mangoes are $0.56 a pound.");
//     break;
//   case "Papayas":
//     console.log("Papayas are $2.79 a pound.");
//     break;
//   default:
//     console.log(`Sorry, we are out of ${fruitType}.`);
// }
// console.log("Is there anything else you'd like?");

/* let num = 123.4;
console.log("\n" + num.toPrecision(8));

console.log(typeof 5);

let a = "21";
let b = "9";

let y = parseInt(a);
let z = parseInt(b);

let c =y+z;

console.log(c); */

/* for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
 console.log("Loop finished"); 
  */

console.log(3 + 4);
console.log(3 + 4 + "Hii");
console.log("Hii" + 3 + 4);

console.log("hello" && "world");
console.log("hello" || "world");
console.log(!"hello");

console.log(5 && 4);
console.log(5 || 4);
console.log(!5);

let user;
let displayName = user ?? "Amit"; // ?? operator define default value to variable
console.log(displayName);

console.log(undefined ?? "default value");
console.log(null ?? "default value");
console.log("Raj" ?? "default value");

let d;
d ??= 10;
console.log(d);

console.log("\n");

console.log(Math.min(..."12345"));
console.log(Math.max(..."12345"));

console.log(5 !== "5");
console.log(8 !== "5");

console.log("A" > "B");

console.log("2" < "12");

const cars = ["BMW", "Volvo", "Mercides", "Thar"];

/* for(let i=0; i<cars.length; i++){
  console.log(cars[i]);
} */

/*   let i=0;
while(i<cars.length){
  console.log(cars[i]);
  i++;
}
 */

let i = 0;
do {
  if (i == 2) {
    break;
  }
  console.log(cars[i]);
  i++;
} while (i < cars.length);

// Arrow functions
let multiply = (a, b) => a * b;
console.log(multiply(12, 2));

// Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: "31",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

/* for (var j = 0; j < 3; j++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(j);
}
console.log("Loop finished");*/


let s = "Hello";

for(const i of s){
  console.log(i);
}

const fruits = {
  "apple":"red",
  "orange":"orange",
  "banana":"yellow"
};

for(const i in fruits){
  console.log(i+" : "+fruits[i]);
}
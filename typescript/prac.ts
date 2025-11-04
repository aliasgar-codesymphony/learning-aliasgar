const obj = {
  width: 15,
  height: 20,
};

//const area = obj.width * obj.heigth;   //error
const area = obj.width * obj.height;
console.log(area);

let a = 4;
console.log(a);

//a = "Amit";  //error

//console.log(4/[]);   //error

interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 12,
  name: "Amit",

  //age: 32, //error
};

console.log(user);

type myBool = true | false;
const b: myBool = true;
console.log(b);

type windowState = "open" | "closed" | "minimized";
const win: windowState = "open";
console.log(win);

function getLength(obj: string | string[]) {
  console.log(obj.length);
}
getLength("Amit");
getLength(["Amit", "Anil", "Rahul"]);

console.log(typeof win === "boolean");

type NumberArray = Array<number>;
const array: NumberArray = [1, 2, 34, 5];
console.log(array);

console.log(typeof Date());
console.log(typeof new Date());

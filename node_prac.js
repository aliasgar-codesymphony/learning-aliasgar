/* import http from "http";

http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("Hii Hello World");
  })
  .listen(5000, () => {
    console.log(`Server running at http://localhost:5000/`);
  }); */

//console.log(`V8 version: ${process.versions.v8}`);

// Non-Blocking Code
/* import fs from "fs";
fs.readFile("fetch_info.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("This executes before file data");
 */

//Blocking Code

/* import fs from "fs";
console.log("start");
const data = fs.readFileSync("fetch_info.txt", "utf8");
console.log(data);
console.log("end");
 */

//Array
const fruits = ["mango", "banana", "grapes"];
console.log(fruits);

fruits.push("apple");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("cherry");
console.log(fruits);

console.log(fruits.includes("apple"));
console.log("Length of array is " + fruits.length);

console.log("At Index 2 : " + fruits.at(2));

console.log("join the elements to string with . :" + fruits.join("."));

fruits[0] = "kiwi";
console.log(fruits);

fruits.splice(2, 0, "apple", "orange");
console.log(fruits);

fruits.splice(0, 1);
console.log(fruits);

citrus = fruits.slice(1, 3);
console.log(citrus);

//searching
console.log("apple is present at index " + fruits.indexOf("apple"));
fruits.push("apple");
console.log(fruits);
console.log("apple is present at index " + fruits.lastIndexOf("apple"));

//Sorting
console.log("Sorted Alphabetically : ");
console.log(fruits.sort());

console.log("Reverse : ");
console.log(fruits.reverse());

console.log("Descending Order : ");
fruits.sort();
fruits.reverse();
console.log(fruits);

//concatenating arrays
const boys = ["a", "b", "c"];
const girls = ["g", "i", "e"];
const children = boys.concat(girls);

console.log("\n" + children);

/* const nums = [1, 2, [3, 4], [5, 6]];
const newNums = nums.flat();
console.log(nums);
console.log(newNums);
 */
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.flatMap((x) => {
  if (x % 2 == 0) {
    return [x];
  } else {
    return [];
  }
});
console.log(even);

//searching
const n = [37, 2, 14, 5, 34, 45, 18];
console.log(
  n.find((value, index, array) => {
    return value > 30;
  })
);
console.log(
  n.findIndex((value, index, array) => {
    return value > 15;
  })
);

console.log(n.findLast((x) => x > 30));
console.log(n.findLastIndex((x) => x > 30));

console.log(n.sort((a, b) => a - b));
console.log(n.sort((a, b) => b - a));

console.log("Minimum number : " + Math.min(...n));
console.log("Maximum number : " + Math.max(...n));


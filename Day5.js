// console.log the length of these three arrays
var vegetables = ["kale", "cabbage", "radish", "onion"];
var primeNumbers = [2, 3, 5];
var empty = [];

console.log(vegetables.length);
console.log(primeNumbers.length);
console.log(empty.length);

var students = ["Brian", "Jesse", "Jessica", "Christie", "Tamar"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);

var toys = ["car", "truck", "wagon"];
var numbers = [ 9, 0, 1, 0.1, 5];
var letters = ["a", "b", "c", "d"];
var cars = ["ford", "dodge", "kia", "lexus", "tesla"];

var students = ["Brian", "Jesse", "Jessica", "Justin", "Matt", "Christie"];
console.log(students[2]);
console.log(students[5]);

var trees = ["pine", "cypress", "hemlock"];

// Using only array indexes, replace "cypress" with "maple"
// and add the strings "walnut", "cherry", "poplar"
// on the `trees` array

trees[1] = "maple";
trees[3] = "walnut";
trees[4] = "cherry";
trees[5] = "poplar";

for (var i=0; i < 5; i++) {
  console.log(trees[i]);
}

function half(number){
  return number / 2;
}

var result;
result = half(100);
console.log("Half of 100 = " + result);


// write your function declaration here

function sentence(part1, part2) {
  return part1 + part2;
}

var speech = sentence("Howdy ", "folks!");
//Function call
console.log(speech);


// define the function here

function difference(num1, num2) {
  return num1 - num2;
}

var result = difference(385, 142);
console.log(result);


function multiply(x, x1, x2) {
  return x * x1 * x2;
}

var product = multiply(15, 18, 30);
console.log(product);

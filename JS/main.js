let i = 12;
const j = 14;

console.log(i);
console.log(j);

const add = (x, y) => x + y;
console.log(add(12, 3));

//---------- Var vs Let
// Let doesn't allow for multiple declerations
let num;
//let num; // error cannot declare num multiple times

var num2;
var num2;

// Var doesn't have proper block scope
for (var itr = 0; itr < 10; itr++) {}
console.log(`value of itr ${itr}`);

function odd() {
    console.log(jj);

    //let jj; // let will throw an error since jj is used before decleration
    var jj;

    jj = 12;
}

odd();

// Arrow Functions
function func1(x, y) {
    return x + y * y;
}

const func2 = (x, y) => {
    return x * x + y * y;
}

const func3 = x => 2 * x;

const func4 = () => 12;

console.log(func1(1, 2));
console.log(func2(1, 2));
console.log(func3(1));
console.log(func4());

//------------------------- Arrays ------------------------------
// Method time complexity:
//----------- Add / Remove ---------
// push    | O(1)
// pop     | O(1)
// shift   | O(N)
// unshift | O(N)
// splice  | O(N)
// sort    | O(N * log(N))
//------------ Access -----------
// concat  | O(N)
// slice   | O(N)
// indexof | O(N)
// ------------ Iteration ----------
// forEach | O(N)
// map     | O(N)
// filter  | O(N)
// reduce  | O(N)

// two ways to create arrays
let arr1 = new Array();
let arr2 = [];

let fruits = ['Apple', 'Orange', 'Plum'];

// arrays can store a mix of elements

// Arrays as queue
let q = [];
q.push(1); // add element to end
q.shift(); // remove and get element from front

// Arrays as stack
let s = [];
s.push(12); // add element to end
s.pop(); // remove and get element from end

s.unshift(12); // add element to front

// both push and unshift can add multiple elements
// arrays are special objects

let s_copy = s; // copy s by reference

// push/pop are fast
// shift/unshift are slow

// technically possible since arrays are object
// will loop through all properties
for (let key in fruits) {
    console.log(fruits[key]);
}

// iterates through all elements
for (let fruit of fruits) {
    console.log(fruit);
}

// old
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array length is writable
let arr3 = [1, 2, 3, 4];
arr3.length = 1; // remove all but first element
for (let val of arr3) {
    console.log(val); // 1
}

// array .toString() return comma seperated string
let arr4 = [1, 2, 3, 4];

let bool = arr4 === arr3; // always false
console.log(bool);

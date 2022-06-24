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
/**
 * Summary(Objects):
 * Keys must be strings or symbols
 * dot notation or bracket notation to access properties
 * delete obj.prop to delete property
 * "key" in obj will return true if key is found in obj
 * for (let key in obj) to iterate through object
 * property name short hand using comma:
 *     function makeUser(name, age) {
 *        return {
 *           name, // same as name: name
 *           age,  // same as age: age
 *        }
 *     }
 */


let user1 = new Object(); // "constructor syntax"
let user2 = {} // "object literal" syntax

// one way to create object with key value pairs
let user3 = {
  name: 'john',
  age: 30,
};

console.log('user keys using dot notation');
console.log(user3.name);
console.log(user3.age);
console.log('-----------------------------');

user3.isAdmin = true; // create a new key/value pair

delete user3.age; // delete key/value pair

user3['likes birds'] = true; // uses bracket notation

delete user3['likes birds'];

// Hello, object
let user = {};

user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Check for emptiness
function isEmpty(obj) {
  for (let key in obj) {
    return true;
  }

  return false;
}

// Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

// Multiply numeric property values by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for (let key in salaries) {
  if (typeof salaries[key] === 'number') {
    salaries[key] *= 2;
  }
}

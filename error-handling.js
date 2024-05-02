// 1.
function sum(array) {
  if (array === null) {
  throw new Error("array cannot be null");
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
try {
  console.log(sum(null));
} catch(error) {
  console.error(error.name + ': ' + error.message);
}
//let res = sum(null);
//console.log(res);

// 2.
// tests
// sayName("Alex");
// sayName(1);
// Your code here 
function sayName(name) {

if (typeof name !== 'string') {
  throw new TypeError("Invalid name! Must be a string");
} 
  console.log(name)
}

try {
  sayName("Alex");
  sayName(1);
 } catch(error) {
  console.error(error.name + ": " + error.message);
 }

 //console.log(sayName("Alex", 1));

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  } else {
    return greeting;
  }
}

try {
  console.log(greet("Hello World"));
} catch(error) {
  console.log(error.name + ": " + error.message);
}
  // console.log(greeting);



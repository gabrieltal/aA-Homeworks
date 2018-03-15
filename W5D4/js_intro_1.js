function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// mysteryScoping1;
// For mysteryScoping1 var x is being changed within the closure block
// of if(true) therefore it is printing out 'in block' twice

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// in mysteryScoping2 x is a const and only scoped within its own block
// i'm not 100% sure why it isn't throwing an error when trying to reassign
// i am assuming it i because they are defined in different scopes
// it doesn't actually effect the original. that makes the most sense to me
// mysteryScoping2();

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// In mysteryScoping3 we get an error and this makes sense cause
// var x is trying to reassign x when it has already been declared as a const
// mysteryScoping3();

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}
// in mysteryScoping4 x is changed and printed each time as they are declared
// in the block they are in. here let is only specific to its own block
// so the if(true) block of x prints in block and the console.log(x) after the
// if block prints out of block because the let x = 'in block' was only scoped
// within the if statement and so the x = 'out of block' is the one scoped for
// the rest of the mysteryScoping4 block
// mysteryScoping4();

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}
// Here in mysteryScoping5 we get an error because we are trying to reassign
// x in the same mysteryScoping5 scope and we cannot do that with let statements
// mysteryScoping5();


function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}
// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));

function fizzBuzz(array) {
  const new_array = [];
  array.forEach(element => {
    if ((element % 3 == 0) ^ (element % 5 == 0)) {
      new_array.push(element);
    }
  });
  return new_array;
}
// console.log(fizzBuzz([3, 5, 9, 10, 11, 12]))

function isPrime(number) {
  if (number < 2) { return false; }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(number) {
  var sum = 0;
  var counter = 0;
  var i = 2;
  while (counter < number) {
    if (isPrime(i)) {
      sum += i;
      counter++;
    }
    i++;
  }
  return sum
}

console.log(sumOfNPrimes(0))
console.log(sumOfNPrimes(1))
console.log(sumOfNPrimes(4))

function titleize(array, callback) {
  let titleized = array.map(el => 'Mx. ${el} Jingleheimer Schmidt')
  callback(titleized)
};

titleize(["Mary", "Brian", "Leo"], (names) => {
  names.forEach(name=> console.log(name));
});

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes \'phrrrRRRRRR!!!!!!!!\'`);
}
Elephant.prototype.grow = function () {
  this.height = this.height + 12;
}
Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
}
Elephant.prototype.play = function () {
  trickIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[trickIndex]}!`);
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
console.log(ellie);
ellie.trumpet();
console.log(ellie.height);
ellie.grow();

console.log(ellie.height);
ellie.addTrick("drinking vodka");
console.log(ellie.tricks);
ellie.play();

let john = new Elephant("John", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [john, charlie, kate, micah];

function paradeHelper(elephant) {
  console.log(`${elephant.name} is trotting by!`);
}
herd.forEach (function(elephant){
  paradeHelper(elephant);
});

function dinerBreakfast() {
  let s = 'I\'d like cheesy scrambled eggs'
  return function (order) {
    s = s + ` and ${order}` + ' please'
    console.log(s)
  }
  return s + 'please'
}
let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");

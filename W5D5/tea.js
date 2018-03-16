const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function askForTeaCoffee(callback) {
//   reader.question("Oy would you like some tea, mate? ", function (answer1) {
//     console.log(`${answer1}!`);
//     reader.question("You havin\' a laugh? Would you like some biscuits, govna? ", function(answer2) {
//       console.log(`${answer2}!`);
//
//
//       callback(answer1, answer2);
//     });
//   });
//
// }
//
// askForTeaCoffee(function (a1, a2) {
//     console.log(`So you ${a1} want tea and you ${a2} want coffee.`);
//     reader.close();
// });

// askForTeaCoffee();


function teaAndBiscuits () {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    console.log(`You replied ${res}.`);
    reader.question('Would you like some biscuits?', (res2) => {
      console.log(`You replied ${res}.`);

      const firstRes = (res === 'yes') ? 'do' : 'don\'t';
      const secondRes = (res2 === 'yes') ? 'do' : 'don\'t';
      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
      reader.close();
    });
  });
}

teaAndBiscuits();

const texts = require('./texts');

function printGameResults({ computerChoice, winner, quit, global = process }) {
  if (winner === 'tie') {
    global.stdout.write(texts.tie(computerChoice));
  } else if (winner === 'computer') {
    global.stdout.write(texts.computerIsWinner(computerChoice));
  } else if (winner === 'user') {
    global.stdout.write(texts.userIsWinner(computerChoice));
    global.exit();
  } else if (quit) {
    global.stdout.write(texts.goodbye);
    global.exit();
  } else {
    global.stdout.write(texts.notValid);
  }
}

module.exports = printGameResults;

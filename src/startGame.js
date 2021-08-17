const getComputerChoice = require('./getComputerChoice.js');
const getGameResult = require('./getGameResult.js');
const printGameResult = require('./printGameResult.js');
const sanitizeUserInput = require('./sanitizeUserInput.js');
const texts = require('./texts.js');

/**
 * Takes an user's input, sanitizes it using `sanitizeUserInput`
 * Then it calls getGameResult function and passes sanitizedUserInput
 * @param {object} userInput
 */
let onUserInput = (userInput, silent = false) => {
  let sanitizedUserInput = sanitizeUserInput(userInput);
  const computerChoice = getComputerChoice();
  const gameResults = getGameResult(sanitizedUserInput, computerChoice);

  if (!silent) {
    printGameResult(gameResults);
  }
};

function startGame() {
  process.stdout.write(texts.intro);

  process.stdin.on('data', onUserInput);
}

module.exports = startGame;

const computerOptions = require('./computerOptions');

const validComputerChoices = computerOptions;
const validUserChoices = [...validComputerChoices, 'quit'];

/**
 * Takes userChoice and computerChoice as arguments
 * Checkes if both of them are valid, compare them
 * and returns the rusult of the game
 * based on the game logic
 * @module getGameResult
 * @param {string} userChoice
 * @param {string} computerChoice
 * @returns {object} gameResult
 * @example
 * const result = getGameResult('rock', 'rock');
 */
function getGameResult(userChoice, computerChoice) {
  const gameResult = { userChoice, computerChoice };

  if (!validUserChoices.includes(userChoice)) {
    gameResult.invalidUserChoice = true;
  } else if (userChoice === 'quit') {
    gameResult.quit = true;
  } else if (!validComputerChoices.includes(computerChoice)) {
    gameResult.invalidComputerChoice = true;
  } else if (userChoice === computerChoice) {
    gameResult.winner = 'tie';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      gameResult.winner = 'user';
    } else {
      gameResult.winner = 'computer';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      gameResult.winner = 'computer';
    } else {
      gameResult.winner = 'user';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      gameResult.winner = 'computer';
    } else {
      gameResult.winner = 'user';
    }
  }

  return gameResult;
}

module.exports = getGameResult;

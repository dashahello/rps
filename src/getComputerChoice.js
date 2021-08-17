const computerOptions = require('./computerOptions');

/**
 * Generates a number between 0 and 2 which corresponds to an
 * index of the `computerOptions` array and returns a computerChoice
 * string.
 * @module getComputerChoice
 * @returns {string} computerChoice - One of the possible choices
 * @example
 * // one of the following strings: rock paper scissors
 * const computerChoice = getComputerChoice();
 */
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * computerOptions.length);
  const computerChoice = computerOptions[randomIndex];

  return computerChoice;
}
//
module.exports = getComputerChoice;

/**
 * Converts stdin buffer to a string,
 * then converts that string to lower case and trims it.
 * @module sanitizeUserInput
 * @param {object} userInput - Buffer from stdin
 * @returns {string} - Sanitized user input
 */
function sanitizeUserInput(userInput) {
  if (userInput instanceof Buffer) {
    return userInput.toString().toLowerCase().replace(/\s/g, '');
  } else {
    throw Error('expected userInput to be of type buffer');
  }
}

module.exports = sanitizeUserInput;

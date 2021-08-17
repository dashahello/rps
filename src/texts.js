const texts = {
  intro: `Let's play a rock paper scissors game!\nWhat is your choice: rock, paper or scissors?\n(type 'quit' to give up)\nSo you choose ... `,
  tie: (computerChoice) =>
    `Computer chose ${computerChoice} and it is a tie!\nTry again ...`,
  userIsWinner: (computerChoice) =>
    `Computer chose ${computerChoice} and you win :)\nSee you later!\n`,
  computerIsWinner: (computerChoice) =>
    `Computer chose ${computerChoice} and computer wins!\nTry again ... `,
  goodbye: 'Bye!\n',
  notValid: `userChoice is not valid!\nTry again ...`
};

module.exports = texts;

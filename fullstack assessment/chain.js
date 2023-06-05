const word = '00000111110101001111100001001';

let currentChainLength = 0;
let longestChainLength = 0;

for (let i = 0; i < word.length; i++) {
  const currentChar = word[i];

  if (currentChar === '1') {
    // Increment the chain length if the current character is '1'
    currentChainLength++;

    if (currentChainLength > longestChainLength) {
      // Update the longest chain length if the current chain is longer
      longestChainLength = currentChainLength;
    }
  } else {
    // Reset the chain length if the current character is not '1'
    currentChainLength = 0;
  }
}

console.log("Longest chain of letters:", longestChainLength);
/* output: Longest chain of letters: 5*/
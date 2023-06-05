var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

var duplicates = [];

// Iterate over each element in the fullWordList array
for (var i = 0; i < fullWordList.length; i++) {
  var word = fullWordList[i];

  // Check if the word exists in the wordsToRemove array
  if (wordsToRemove.indexOf(word) !== -1) {
    // If the word is found, add it to the duplicates array
    duplicates.push(word);
  }
}

console.log("Duplicates:", duplicates);
/*output: Duplicates: ['1', '2', '3']*/
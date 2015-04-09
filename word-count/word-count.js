function words (wordsToCount) {
  wordsToCount = splitWords(wordsToCount);
  return createWordCounts(wordsToCount);
}

function createWordCounts (words) {
  return words.reduce(updateWordCounts, {});
}

function updateWordCounts (wordCounts, currentWord, index, words) {
  wordCounts[currentWord] = occurrencesOfWord(words, currentWord).length;
  if (wordCounts[currentWord] > 1) { words = deleteOccurrences(words, currentWord); }
  return wordCounts;
}

function deleteOccurrences (words, currentWord) {
  return words.filter(function (word) { return word !== currentWord; });
}

function splitWords (words) {
  return words.split(/\s+|\n|\t/);
}

function occurrencesOfWord (words, currentWord) {
  return words.filter(function (word) { return word === currentWord; });
} 

module.exports = words;
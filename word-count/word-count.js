function words (rawString) {
  allWords = splitRawString(rawString);
  return createWordCounts(allWords);
}

function createWordCounts (allWords) {
  return allWords.reduce(countOneWordAndRemoveOccurrences, {});
}

function countOneWordAndRemoveOccurrences (wordCounts, currentWord, index, allWords) {
  wordCounts[currentWord] = allOccurrencesOfWord(allWords, currentWord).length;
  if (wordCounts[currentWord] > 1) { allWords = deleteOccurrences(allWords, currentWord); }
  return wordCounts;
}

function deleteOccurrences (allWords, currentWord) {
  return allWords.filter(function (word) { return word !== currentWord; });
}

function splitRawString (allWords) {
  return allWords.split(/\s+|\n|\t/);
}

function allOccurrencesOfWord (allWords, wordToCount) {
  return allWords.filter(function (word) { return word === wordToCount; });
} 

module.exports = words;
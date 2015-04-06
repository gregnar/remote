var Bob = function() {};

Bob.prototype.hey = function(input) {

  var inputIsShouting = function () {
    return input === input.toUpperCase() && (/[A-Z]/.test(input))
  }();

  var inputIsSilence = function() {
    return /^\s*$/.test(input)
  }();

  var inputIsQuestion = function() {
    var last_character = input[input.length - 1];
    return last_character === "?"
  }();

  if (inputIsShouting) {
    return "Woah, chill out!"
  } else if (inputIsQuestion) {
    return "Sure."
  } else if (inputIsSilence) {
    return "Fine. Be that way!"
  } else {
    return "Whatever."
  }
};

module.exports = Bob;

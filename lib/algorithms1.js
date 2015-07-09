function push(item) {
  this[this.length] = item;
  return this.length;
}

function pop() {
  var item = this[this.length - 1];
  delete this[this.length - 1];
  return item;
}

function shift() {
  var item = this[0];
  for (var i = 1; i < this.length; i++) {
    this[i - 1] = this[i];
  }
  delete this[this.length - 1];
  return item;
}

function unshift(item) {
  for (var i = this.length - 1; i >= 0; i--) {
    this[i + 1] = this[i];
  }
  this[0] = item;
  return this.length;
}

function unique(array) {
  var hashTable = {};
  var cleanArray = [];

  for (var i = 0; i < array.length; i++) {
    if (!(array[i] in hashTable)) {
      hashTable[array[i]] = null;
      cleanArray.push(array[i]);
    }
  }

  return cleanArray;
}

function frequency2(array) {
  var letterHash = {};
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    for (var j = 0; j < word.length; j++) {
      var letter = word.charAt(j);
      if (letter in letterHash) {
        letterHash[letter] ++;
      }
      else {
        letterHash[letter] = 1;
      }
    }
  }
  var highestCount = 0;
  var highestLetters = [];

  for (var letter in letterHash) {
    if (letterHash[letter] > highestCount) {
      highestCount = letterHash[letter];
      highestLetters = [letter];
    }
    else if (letterHash[letter] === highestCount) {
      highestLetters.push(letter);
    }
  }

  if (highestLetters.length === 1) {
    return highestLetters[0];
  }
  else {
    return highestLetters;
  }
}

module.exports.push = push;
module.exports.pop = pop;
module.exports.shift = shift;
module.exports.unshift = unshift;
module.exports.unique = unique;
module.exports.frequency2 = frequency2;

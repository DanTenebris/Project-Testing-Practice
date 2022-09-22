const capitalize = (word) => word.replace(word[0], word[0].toUpperCase());

const reverseString = (word) => {
  const arr = [];
  for (let i = 0; i < word.length; i++) {
    arr.unshift(word[i]);
  }
  return arr.join("");
};

const calculator = {
  add: (num1 = 0, num2 = 0) => num1 + num2,
  subtract: (num1 = 0, num2 = 0) => num1 - num2,
  divide: (num1 = 0, num2 = 0) => {
    if (num2 === 0) return null;
    if (num1 === 0) return 0;
    return num1 / num2;
  },
  multiply: (num1 = 0, num2 = 0) => num1 * num2,
};

const _getNewUnicode = (letter, key) => {
  const unicode = letter.charCodeAt();
  const uppStart = 65;
  const uppEnd = 90;
  const lowStart = 97;
  const lowEnd = 122;

  let start = 0;
  let end = 0;

  if (
    (unicode >= uppStart && unicode <= uppEnd) ||
    (unicode >= lowStart && unicode <= lowEnd)
  ) {
    if (unicode >= uppStart && unicode <= uppEnd) {
      start = uppStart;
      end = uppEnd;
    } else {
      start = lowStart;
      end = lowEnd;
    }

    let newCode = unicode + key;
    while (!(newCode >= start && newCode <= end)) {
      if (newCode >= end) {
        newCode -= end + 1 - start;
      } else if (newCode <= start) {
        newCode += end + 1 - start;
      }
    }
    return newCode;
  }

  return unicode;
};

const caesarCipher = (phrase, key = 1) => {
  const phraseArr = [];
  for (let i = 0; i < phrase.length; i++) {
    const newUnicode = _getNewUnicode(phrase[i], key);
    phraseArr.push(String.fromCharCode(newUnicode));
  }

  return phraseArr.join("");
};

const analyzeArray = (arr) => {
  const min = arr.reduce((a, b) => (a < b ? a : b));
  const max = arr.reduce((a, b) => (a > b ? a : b));
  const average = Math.round(arr.reduce((a, b) => (a + b) / 2));
  const arrLength = arr.length;
  return { min, max, average, arrLength };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

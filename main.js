const findSum = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const findFrequency = function(array) {
  let maxCount = 0;
  let elementHavingMostFrequency;
  let minCount = Number.MAX_VALUE;
  let elementHavingLeastFrequency;

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) count++;
    }
      if (count > maxCount) {
        maxCount = count;
        elementHavingMostFrequency = array[i];
    }
      else if (count < minCount) {
        minCount = count;
        elementHavingLeastFrequency = array[i];
    }
  }
    return {most: elementHavingMostFrequency, least: elementHavingLeastFrequency};
}

const isPalindrome = function(str) {
  return str.toLowerCase() == str.split('').reverse().join('').toLowerCase();
};

const largestPair = function(array) {
  let product = 0;
  for (let i = 0; i < array.length - 1; i++) {
    product = Math.max(product, array[i] * array[i + 1]);
  }
  return product;
};

const removeParenth = function(str) {
  function newString(offset) {
    return (offset > 0 ? "" : "");
  }
  return str.replace(/ *\([^)]*\) */g, newString);
};

const scoreScrabble = function(str) {
  const letterPoint = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  }; 

  return str 
    .split('')
    .reduce((sum, letter) => sum + letterPoint[letter.toLowerCase()], 0);
};

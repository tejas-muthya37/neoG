const areaOfHex = (side) => 1.5 * Math.sqrt(3) * side * side;
console.log(areaOfHex(10));

/////////////////////////////

const noOfWords = (sentence) => sentence.split(" ").length;
console.log(noOfWords("We are neoGrammers"));

/////////////////////////////

const minOfNumbers = (...rest) => {
  let min = rest[0];
  for (const i of rest) {
    if (i < min) min = i;
  }
  return min;
};

console.log(minOfNumbers(6, -2, 3, 4));

/////////////////////////////

const maxOfNumbers = (...rest) => {
  let max = rest[0];
  for (const i of rest) {
    if (i > max) max = i;
  }
  return max;
};

console.log(minOfNumbers(6, -2, 3, 4));

/////////////////////////////

const isTriangle = (side1, side2, side3) => {
  if (side1 + side2 + side3 !== 180) return "Not a triangle!";
  else if (side1 !== side2 && side1 !== side3 && side2 !== side3)
    return "Scalene Triangle!";
  else if (
    (side1 === side2 && side1 !== side3) ||
    (side2 === side3 && side2 !== side1) ||
    (side1 === side3 && side1 !== side2)
  )
    return "Isoceles Triangle!";
  else return "Equillateral Triangle!";
};

console.log(isTriangle(30, 60, 80));
console.log(isTriangle(30, 60, 90));
console.log(isTriangle(45, 90, 45));
console.log(isTriangle(60, 60, 60));

/////////////////////////////

const indexOfElement = (arr, index) => arr.indexOf(index);
console.log(indexOfElement([1, 3, 3, 2], 3));

///////////////////////////// review

const replaceElement = (arr, element1, element2) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element1) arr[i] = element2;
  }
  return arr;
};

console.log(replaceElement([1, 2, 3, 1], 1, 6));

/////////////////////////////

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];
console.log(mergeArrays([1, 3, 5], [2, 4, 6]));

/////////////////////////////

const charAtIndex = (str, index) => str.charAt(index);
console.log(charAtIndex("neoGCamp", 3));

///////////////////////////// review

const earlierDate = (date1, date2) => {
  const [dateArr1, dateArr2] = [date1.split("/"), date2.split("/")];

  [dateArr1[0], dateArr1[1]] = [dateArr1[1], dateArr1[0]];
  [dateArr2[0], dateArr2[1]] = [dateArr2[1], dateArr2[0]];

  const [dateStr1, dateStr2] = [dateArr1.join("/"), dateArr2.join("/")];

  [date1, date2] = [new Date(dateStr1), new Date(dateStr2)];

  if (date1 < date2) return dateStr1;
  else if (date1 > date2) return dateStr2;
  else return "Equal!";
};

console.log(earlierDate("02/05/2021", "24/07/2021"));

///////////////////////////// review

const encodeString = (str, positions) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    charCode += positions;
    result += String.fromCharCode(charCode);
  }
  return result;
};

console.log(encodeString("neogcamp", 2));

///////////////////////////// review

const toSentenceCase = (str) => {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].slice(0, 1).toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
};

console.log(toSentenceCase("we are neogrammers"));

/////////////////////////////

const sortArray = (arr) => arr.sort((a, b) => a - b);

console.log(sortArray([100, 83, 32, 9, 45, 61]));

/////////////////////////////

const reverseCharactersOfWord = (str) => {
  const strArr = str.split(" ");
  let res = "";
  for (let i = 0; i < strArr.length; i++) {
    for (let j = strArr[i].length - 1; j >= 0; j--) {
      res += strArr[i].charAt(j);
    }
    strArr[i] = res;
    res = "";
  }
  return strArr.join(" ");
};

console.log(reverseCharactersOfWord("we are neogrammers!"));

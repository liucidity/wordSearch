const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const tranposedLetters = transpose(letters);
  const verticalJoin = tranposedLetters.map(ls => ls.join(''));


  for (const l of horizontalJoin) {
    console.log('checking: ', l);
    if (l.includes(word)) return true;
  }
  for (const l of verticalJoin) {
    console.log('checking: ', l);
    if (l.includes(word)) return true;
  }

  return false;
};


module.exports = wordSearch;


const transpose = function (matrix) {
  let transposedArray = [];


  for (const array of matrix[0]) {
    transposedArray.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      transposedArray[j][i] = matrix[i][j];
    }
  }

  

  // console.log(transposedArray);
  return (transposedArray);
};

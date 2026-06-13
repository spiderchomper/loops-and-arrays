/* function sumOfTripledEvens(array) {
  function isEven(num) {
    return num % 2 === 0;
  }

  const evenNums = array.filter(isEven);
  console.log(evenNums);

  const tripledEvens = evenNums.map((num) => num * 3);
  console.log(tripledEvens);

  const sumTripled = tripledEvens.reduce((total, currentItem) => {
    return total + currentItem;
  });
  console.log(sumTripled);
  return sumTripled;
} */

//condenses down to the following:
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((total, currentItem) => total + currentItem);
}

const arrToSum = [1, 2, 3, 4, 5, 6];
let summedArray = sumOfTripledEvens(arrToSum);
console.log(summedArray);

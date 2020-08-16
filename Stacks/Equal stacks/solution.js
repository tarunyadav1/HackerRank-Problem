// Problem Solution :-  https://www.hackerrank.com/challenges/equal-stacks/problem

/*

First sum the array and then save minimum. 

*/

function equalStacks(h1, h2, h3) {
  const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  let sumh1 = sum(h1);
  let sumh2 = sum(h2);
  let sumh3 = sum(h3);

  let minimum = Math.min(sumh1, sumh2, sumh3);

  while (true) {
    if (sumh1 > minimum) {
      sumh1 -= h1.shift();
    }
    if (sumh2 > minimum) {
      sumh2 -= h2.shift();
    }
    if (sumh3 > minimum) {
      sumh3 -= h3.shift();
    }

    if (sumh1 === sumh2 && sumh2 === sumh3) {
      return minimum;
    }

    minimum = Math.min(sumh1, sumh2, sumh3);
  }
}

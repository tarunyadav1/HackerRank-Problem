/*

Problem Link :-  https://www.hackerrank.com/challenges/crush/problem





Sort the parameters: 1 5 4 8 6 9 -> sort -> 1 4 5 6 8 9

You get the following sequence: (1 (4 5) (6 8) 9)

Then add values: (+3 (+7 -3) (+1 -7) -1)

Sum up the values 3, 10, 7, 8, 1, 0

The maximum value 10 is the result.


*/

function arrayManipulation(n, queries) {
  let max = 0;
  const params = [];

  for (let q = 0; q < queries.length; q++) {
    const query = queries[q];
    const qstart = query[0];
    const qend = query[1];
    const qval = query[2];

    params.push({
      key: qstart,
      val: qval,
    });

    params.push({
      key: qend,
      val: -qval,
    });
  }

  //sort the parameters by key
  params.sort((item1, item2) => {
    if (item1.key === item2.key) {
      return item2.val - item1.val;
    }

    return item1.key - item2.key;
  });

  let sum = 0;

  for (let i = 0; i < params.length; i++) {
    const param = params[i];
    sum += param.val;

    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

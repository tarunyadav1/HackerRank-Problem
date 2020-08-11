/*

Problem Link :-  https://www.hackerrank.com/challenges/sparse-arrays/problem


*/

/*
        METHOD USE

    Use nested loop to search query string. Then it stored in temp array.

*/

function matchingStrings(strings, queries) {
  let res = new Array(queries.length);

  for (let i = 0; i < queries.length; i++) {
    res[i] = 0;
  }

  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j <= strings.length; j++) {
      if (queries[i] === strings[j]) {
        res[i] += 1;
      }
    }
  }

  return res;
}

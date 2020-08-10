/* 
 a = array 
 n = length of array
 d = eft rotations on the array

 Problem Link = https://www.hackerrank.com/challenges/array-left-rotation/problem

*/

// Method Used
/* 
 (Using temp array)

 Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
1) Store the first d elements in a temp array
   temp[] = [1, 2]
2) Shift rest of the arr[]
   arr[] = [3, 4, 5, 6, 7, 6, 7]
3) Store back the d elements
   arr[] = [3, 4, 5, 6, 7, 1, 2]
   
*/

function leftShift(n, d, a) {
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp.push(a[i]);
  }

  a.splice(0, d);
  console.log(a.concat(temp).join(" "));
}

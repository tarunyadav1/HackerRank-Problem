// Problem Link :- https://www.hackerrank.com/challenges/balanced-brackets/problem

/* 

    Use stack to solve problem. 



*/

function isBalanced(s) {
  const chars = s.split("");
  const openBrack = ["(", "[", "{"];
  const closeBrack = [")", "]", "}"];
  let stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i of chars) {
    if (openBrack.includes(i)) {
      stack.push(i);
    } else {
      const paired = stack.pop();
      if (map[i] !== paired) {
        return "NO";
      }
    }
  }

  const result = stack.length === 0 ? "YES" : "NO";

  return result;
}

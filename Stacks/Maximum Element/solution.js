// Problem Link :- https://www.hackerrank.com/challenges/maximum-element/problem

// Help :- https://www.youtube.com/watch?v=CXYL8JfeN6I

/* 

Method :-  Use two Stack. One is main stack to track elements and another is to track maximum element. 

            Time complexity = O(n)
            Space complexity = n*m 

*/

function processData(input) {
  const arrayInput = input.split("\n");
  let mainStack = [0];
  let trackStack = [0];

  for (let i = 1; i <= arrayInput[0]; i++) {
    let inner = arrayInput[i].split(" ");

    if (inner[0] === "1") {
      if (mainStack.length === 0) {
        mainStack.push(inner[1]);
        trackStack.push(inner[1]);
      } else {
        mainStack.push(inner[1]);
        if (Number(inner[1]) > Number(trackStack[trackStack.length - 1])) {
          trackStack.push(inner[1]);
        } else {
          trackStack.push(trackStack[trackStack.length - 1]);
        }
      }
    }
    if (inner[0] === "2") {
      mainStack.pop();
      trackStack.pop();
    }
    if (inner[0] === "3") {
      if (!trackStack.length) {
        console.log(null);
      }
      console.log(trackStack[trackStack.length - 1]);
    }
  }
}

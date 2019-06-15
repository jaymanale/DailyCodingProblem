// Time : O(n)
//Space : O(n)

function twoNumberSum(input, answer) {

  let map = {};
  let output = [];
  let remaining = null;

  for (let i = 0; i < input.length; i++) {

    if (!map[input[i]]) {
      remaining = answer - input[i];
      if (map[remaining]) {
        output.push([input[i], remaining]);
      }
      map[input[i]] = input[i]
    }
  }
  return output;
}

let answer = twoNumberSum([-4, -1, 1, 2, 2, 3, 3, 5, 6, 8, 8, 7, 11,2,8], 10);

console.log(answer);

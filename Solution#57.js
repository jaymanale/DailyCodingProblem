// Time : O(n)
//Space : O(n)

function tenCharString(input) {

  let tenString = "";
  let output = [];
  for (let i = 0; i < input.length; i++) {
    tenString += input[i];
    if (tenString.length === 10) {
      output.push(tenString);
      tenString = "";
    }
  }
  output.push(tenString);
  return output;
}
tenCharString("the quick brown fox jumps over the lazy dog")

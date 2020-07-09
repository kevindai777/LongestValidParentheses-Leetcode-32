//Objective is to find the length of the longest valid parentheses.

let s = ")()())"


//O(n) solution that uses a stack to keep track of parentheses coming in and out.

if (s.length == 0) {
    return 0
}

//Push in '-1' to update the first 'max'
let stack = [-1]
let max = 0

for (let i = 0; i < s.length; i++) {
    //Push in if it's an opening parentheses
    if (s[i] == '(') {
        stack.push(i)
    //Pop out if it's a closing parentheses
    } else {
        stack.pop()
        //If the stack is empty, we don't have a valid parentheses since we start out with [-1]
        //So, we push in new current index
        if (stack.length == 0) {
            stack.push(i)
        } else {
            //'i - stack[stack.length - 1]' represents the length
            //of the longest substring
            max = Math.max(max, i - stack[stack.length - 1])
        }
    }
}

return max

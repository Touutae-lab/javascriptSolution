function removeParentheses(s){
    stack = [];

    result = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        }


        if (stack[0] === '(') {
            continue;
        } else if (s[i] === ')') {
            stack.pop()
            continue;
        }
      
        if (stack.length === 0) {
            result += s[i]
        }
    }
    return result;
  }
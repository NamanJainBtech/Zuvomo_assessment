// Question 1
function getTopN(signals, n) {
    const sortedSignals = [...signals];

    sortedSignals.sort((a, b) => {
        if (a.score === b.score) {
            return a.name < b.name ? -1 : 1;
        }

        return b.score - a.score;
    });

    const result = [];

    for (let i = 0; i < n && i < sortedSignals.length; i++) {
        result.push(sortedSignals[i].name);
    }

    return result;
}


// Question 2
function isBalanced(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        }
        else if (ch === ')' || ch === ']' || ch === '}') {
            if (stack.length === 0) {
                return false;
            }

            let last = stack.pop();

            if (
                (ch === ')' && last !== '(') ||
                (ch === ']' && last !== '[') ||
                (ch === '}' && last !== '{')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

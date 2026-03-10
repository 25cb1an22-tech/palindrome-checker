const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(word) {
    let stack = [];

    for (let i = 0; i < word.length; i++) {
        stack.push(word[i]);
    }

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== stack.pop()) {
            return false;
        }
    }

    return true;
}

rl.question("Enter a word: ", function(word) {
    if (isPalindrome(word)) {
        console.log("It is a Palindrome.");
    } else {
        console.log("It is NOT a Palindrome.");
    }
    rl.close();
});

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

rl.question('Enter a string: ', (inputStr) => {
    if (isPalindrome(inputStr)) {
        console.log(`The string '${inputStr}' is a palindrome.`);
    } else {
        console.log(`The string '${inputStr}' is not a palindrome.`);
    }
    rl.close();
});

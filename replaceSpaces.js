const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWords(sentence) {
    return sentence.split(' ').filter(word => word.trim().length > 0).length;
}
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

function replaceSpaces(sentence) {
    return sentence.replace(/ /g, '-');
}

rl.question('Enter a sentence: ', (inputSentence) => {
    
    const wordCount = countWords(inputSentence);
    
    const reversedSentence = reverseWords(inputSentence);
    
    const modifiedSentence = replaceSpaces(inputSentence);
    
    console.log(`Number of words: ${wordCount}`);
    console.log(`Reversed sentence: ${reversedSentence}`);
    console.log(`Modified sentence: ${modifiedSentence}`);
    
    rl.close();
});

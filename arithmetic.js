const fs = require('fs');
const math = require('mathjs');

function normalizeExpression(expression) {
    return expression.replace(/[–—−]/g, '-');
}

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    const lines = data.split('\n');
    const results = [];

    lines.forEach(line => {
        if (line.trim()) {
            const expression = line.replace('=', '').trim();
            const normalizedExpression = normalizeExpression(expression);
            try {
                const result = math.evaluate(normalizedExpression);
                const formattedResult = result.toString();
                results.push(`${line} ${formattedResult}`);
            } catch (err) {
                console.error(`Error evaluating expression "${expression}":`, err);
                results.push(`${line} Error`);
            }
        }
    });

    fs.writeFile('output.txt', results.join('\n'), 'utf8', (err) => {
        if (err) {
            console.error('Error writing the output file:', err);
            return;
        }
        console.log('Results written to output.txt');
    });
});

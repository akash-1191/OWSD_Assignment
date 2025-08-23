function isEven(num) {
    if (typeof num !== 'number') {
        throw new TypeError('Input must be a number');
    }
    return num % 2 === 0;
}

module.exports = isEven;

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

module.exports = {
    generateRandomNumber,
    addTwoNumbers
} 
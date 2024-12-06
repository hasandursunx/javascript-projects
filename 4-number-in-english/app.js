const randomGenerator = (setDigit, fixedDigit = 0) => {

    let digit, digitMultiplier, randomNumber;

    if (fixedDigit === 0) {
        digit = Math.ceil(Math.random() * setDigit);
        digitMultiplier = Math.pow(10, digit - 1)
    } else {
        digit = fixedDigit;
        digitMultiplier = Math.pow(10, fixedDigit - 1)
    }


    if (digitMultiplier === 1) {
        randomNumber = Math.ceil(Math.random() * 9);
    } else {
        randomNumber = (digitMultiplier * Math.ceil(Math.random() * 9)) + Math.floor(Math.random() * digitMultiplier);
    }
    return randomNumber;
}

console.log('Rastgele Üretilen sayı = ', randomGenerator(6))


//Test code - between 100 and 999 
/* const test3digit = () => {
    let digit2Arr = [];
    let i = 0;
    let num = '';

    while (digit2Arr.length < 900) {
        i++;
        num = randomGenerator(3, 3);
        if (!digit2Arr.includes(num)) {
            digit2Arr.push(num)
        }
    }
    console.log('Fonksiyon 100 - 999 arası sayıların tümünü üretebildi : ', digit2Arr.sort())
}
test3digit() */
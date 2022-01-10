module.exports = function toReadable (number) {
    const zeroToNineteen = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    const twentyToNinety = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };
    if (number<=19) {return zeroToNineteen[number]} else if ((number>19)&&(number<100)) {
        let dozens = Math.floor(number/10);
        let units = number%10;
        return twentyToNinety[dozens]+' '+zeroToNineteen[units];
    } else if (number>=100) {
        let hundreds = Math.floor(number/100);
        let dozens = Math.floor((number-(hundreds*100))/10);
        let units = number-(hundreds*100)-(dozens*10);
        return zeroToNineteen[hundreds]+' hundred ' + twentyToNinety[dozens]+' '+zeroToNineteen[units];
    }
   }
   
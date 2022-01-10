module.exports = function toReadable (number) {
    const getZeroToNineteen = (number0to19)=>{
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
        return zeroToNineteen[number0to19]
    }
    const getTwentyToHundred = (number20to99) => {
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
        let dozens = Math.floor(number20to99/10);
        let number0to9 = number20to99%10;
        // console.log(`dozens = ${dozens}`)
        if (number0to9==0) {return twentyToNinety[dozens]} else {
        return twentyToNinety[dozens]+ ' ' +getZeroToNineteen(number0to9)};

    }

    const getZeroToHundred = (number0to100)=>{
        if (number0to100<20) {return getZeroToNineteen(number0to100) }
        else if ((number0to100>=20)&&(number0to100<100)) {return getTwentyToHundred(number0to100) } 
    }


    const getOneHundredToThousand = (number100to999)=>{
        let hundreds = Math.floor(number100to999/100);
        console.log(`hundreds=${hundreds}`)
        let equal00to99 = number100to999-hundreds*100;
        if (equal00to99 == 0) { return getZeroToNineteen(hundreds) + ' hundred' } else {
        return getZeroToNineteen(hundreds) + ' hundred ' + getZeroToHundred(equal00to99)
        }
    }
    if (number==0) { return 'zero'}
    else if (number<100) {return getZeroToHundred(number)}
    else if (number>=100) {return getOneHundredToThousand(number)}

//   console.log(toReadable(321));
}

module.exports = function toReadable(number) {
    let readableNumber = "";
    let readableNumberL = 0;
    let res = 0;
    let txtNumber = new Array();
    let nums = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };
    if (number == 0) {
        return "zero";
    }
    if (nums[number] && number != 100) {
        return nums[number];
    }

    readableNumber = String(number);
    readableNumberL = readableNumber.length;
    readableNumber = "";

    if (readableNumberL == 3) {
        res = (number - (number % 100)) / 100;
        txtNumber.push(res);
        number = number % 100;
        if (number < 20 && number >= 0) {
            txtNumber.push(number);
            if (txtNumber[1] == 0) {
                readableNumber += nums[txtNumber[0]] + " hundred";
                return readableNumber;
            } else {
                readableNumber +=
                    nums[txtNumber[0]] + " hundred" + " " + nums[txtNumber[1]];
                return readableNumber;
            }
        }
        res = number - (number % 10);
        txtNumber.push(res);
        number = number % 10;
        txtNumber.push(number);
        if (txtNumber[2] == 0) {
            readableNumber +=
                nums[txtNumber[0]] + " hundred" + " " + nums[txtNumber[1]];
            return readableNumber;
        } else {
            readableNumber +=
                nums[txtNumber[0]] +
                " hundred" +
                " " +
                nums[txtNumber[1]] +
                " " +
                nums[txtNumber[2]];
            return readableNumber;
        }
    }

    if (readableNumberL == 2) {
        res = number - (number % 10);
        number = number % 10;
        readableNumber += nums[res] + " " + nums[number];
        return readableNumber;
    }
};

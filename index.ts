

function calculateRoundOff(num: any) {
    num = num.split('');
    const stopIndex = num.indexOf('.') + 2;
    let pointer = num.length - 1;
    let carry = Number.parseInt(num[pointer]) >= 5 ? 1 : 0;
    while (pointer >= 0) {
        if (num[pointer] === '.') {
            pointer--;
            continue;
        }
        let currentDigit = Number.parseInt(num[pointer], 10);
        // console.log(pointer, stopIndex, currentDigit,carry)
        if (pointer > stopIndex) {
            if (carry) {
                currentDigit++;

            }
            if (currentDigit >= 5) {
                carry = 1;
                if (currentDigit === 10) {
                    currentDigit = 0;
                }
            } else {
                carry = 0;
            }
            num[pointer] = currentDigit;
        } else {
            if (currentDigit === 9 && carry) {
                currentDigit = 0;
                num[pointer] = currentDigit;
            } else if (carry) {
                carry = 0;
                currentDigit++;
                num[pointer] = currentDigit;
                break;
            }
        }
        pointer--;
    }

    if (carry) {
        num.unshift(carry)
    }

    num = num.slice(0, num.indexOf('.') + 3);
    num = num.join('');
    return num;
}

function getRoundOff(num: any) {
    if (num.includes('.') && num.split('.').length && num.split('.')[1] && num.split('.')[1].length > 2) {
        if (num.split('.')[0].length === 0) {
            num = '0' + num;
        }
        num = calculateRoundOff(num);
    } else if (!num.includes('.')) {
        num = num + '.00';

    }
    return num;
}

let num = ".9767575";
console.log(getRoundOff(num));
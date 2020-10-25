const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
}

function decode(expr) {
    const arr = chunkString(expr, 10);
    return arr.map(el => {
        if (el === '**********') {
            return ' ';
        }
        const chunks = chunkString(el, 2).filter(el => el !== '00');
        const morseSymbols = chunks.map(el => el === '10' ? '.' : '-');

        return MORSE_TABLE[morseSymbols.join('')];
    }).join('');
}

module.exports = {
    decode
}
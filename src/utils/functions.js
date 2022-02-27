export const getCharCode = char => [10, 13].includes(char.charCodeAt(0)) ? 13 : char.charCodeAt(0);

export const transformChar = char => {

    switch (char) {
        // bracket
        case '(': return '1';
        // angle quote
        case '`': return '1';
        // curly brace
        case '{': return '1';
        // single quote
        case "'": return '1';
        // square bracket
        case '[': return '1';
        // double quote
        case '"': return '1';
        // enter / new line
        case '\n': return 'its a new dawn its a new day its a new line for me';
        default: return '';
    }
};

export const transformCode = code => {

    switch (code) {
        // bracket
        case 40: return '';
        // angle quote
        case 96: return '';
        // curly brace
        case 123: return '';
        // single quote
        case 39: return '';
        // square bracket
        case 91: return '';
        // double quote
        case 34: return '';
        // enter / new line
        case 10: return '';
        default: return '';
    }
};
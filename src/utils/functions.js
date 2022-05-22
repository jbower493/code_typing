export const getDisplayChar = char => {

    switch (char) {
        // bracket
        case '(': return '()';
        // angle quote
        case '`': return '``';
        // curly brace
        case '{': return '{}';
        // single quote
        case "'": return "''";
        // square bracket
        case '[': return '[]';
        // double quote
        case '"': return '""';
        // directional arrows
        case 'ArrowLeft': return '';
        case 'ArrowRight': return '';
        // enter / new line
        case '\n': return 'its a new dawn its a new day its a new line for me';
        default: return char;
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
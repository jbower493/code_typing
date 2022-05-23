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

export const getNextCharDisplay = char => {

    switch (char) {
        case ' ': return 'Spacebar'
        default: return char;
    }
};
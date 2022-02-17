import { useState } from 'react';
import './main.scss';
import Letter from '../letter';
import { letterStatuses } from '../../utlis/enums';

const Main = ({
    sentence
}) => {
    const [focused, setFocused] = useState(false);
    const [lettersCompleted, setLettersCompleted] = useState(0);

    const onKeyPressed = e => {
        console.log(sentence[lettersCompleted].toLowerCase(), e.key)
        if (e.key === sentence[lettersCompleted].toLowerCase()) setLettersCompleted(lettersCompleted + 1);
    }
console.log(lettersCompleted)
    return (
        <main
            tabIndex={0}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyPress={onKeyPressed}
        >
            {sentence.split('').map((letter, index) => (
                <Letter key={index} letter={letter} status={index < lettersCompleted ? letterStatuses.complete : letterStatuses.incomplete} />
            ))}
        </main>
    )
}

export default Main;
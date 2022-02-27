import { useState, useEffect } from 'react';
import './style.scss';
import Letter from '../letter';
import { letterStatuses } from '../../utils/enums';
import { getCharCode } from '../../utils/functions';

const TypingArea = ({
    content,
    hasStarted,
    startTimer,
    stopTimer
}) => {

    const prepareContent = content => {
        return content
            .split('')
            .map(char => ({
                char,
                charCode: getCharCode(char),
                appears: true,
                complete: false,
                correct: true,
                errors: 0
            }))
    };

    const [chars, setChars] = useState(prepareContent(content));

    const onCharSuccess = index => {
        setChars(prev => {
            const newChars = [...prev];
            newChars[index] = { ...newChars[index], complete: true };
            return newChars;
        });
    };

    useEffect(() => {
        const onKeyPressed = e => {
            if (!hasStarted) startTimer();

            // handle the key press

            // mark the letter as completed if they type the correct letter
            const typedLetter = e.charCode;
            const targetLetter = chars.find((char) => !char.complete);console.log(typedLetter, targetLetter.charCode)
            if (typedLetter === targetLetter.charCode) onCharSuccess(chars.indexOf(targetLetter));
        }

        document.addEventListener('keypress', onKeyPressed);

        return () => document.removeEventListener('keypress', onKeyPressed);
    }, [chars, content, hasStarted, startTimer]);

    useEffect(() => {
        if (!chars.find(char => !char.complete)) stopTimer();
    }, [chars, stopTimer])

    return (
        <section className={`typingArea`}>
            {chars.map((char, index) => (
                <Letter key={index} letter={char.char} code={char.charCode} status={char.complete ? letterStatuses.complete : letterStatuses.incomplete} />
            ))}
        </section>
    )
}

export default TypingArea;
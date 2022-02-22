import { useState, useEffect } from 'react';
import './style.scss';
import Letter from '../letter';
import { letterStatuses } from '../../utlis/enums';

const TypingArea = ({
    content,
    hasStarted,
    startTimer,
    stopTimer
}) => {

    const prepareContent = content => content.split('').map(char => ({
        char,
        appears: true,
        complete: false,
        correct: true,
        errors: 0
    }));

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
            const typedLetter = e.key;
            const targetLetter = chars.find((char) => !char.complete);
            if (typedLetter === targetLetter.char) onCharSuccess(chars.indexOf(targetLetter));
        }

        document.addEventListener('keypress', onKeyPressed);

        return () => document.removeEventListener('keypress', onKeyPressed);
    }, [chars, content, hasStarted, startTimer]);

    useEffect(() => {
        if (!chars.find(char => !char.complete)) stopTimer();
    }, [content.length, chars, stopTimer])

    return (
        <section className={`typingArea`}>
            {chars.map((char, index) => (
                <Letter key={index} letter={char.char} status={char.complete ? letterStatuses.complete : letterStatuses.incomplete} />
            ))}
        </section>
    )
}

export default TypingArea;
import { useState, useEffect } from 'react';
import './style.scss';
import Letter from '../letter';
import { letterStatuses } from '../../utlis/enums';

const TypingArea = ({
    content,
    startTime,
    startTest,
    endTime,
    endTest
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
            if (!startTime) startTest();

            // handle the key press

            // mark the letter as completed if they type the correct letter
            const typedLetter = e.key;
            const targetLetter = chars.find((char) => !char.complete);
            if (!endTime && typedLetter === targetLetter.char) onCharSuccess(chars.indexOf(targetLetter));
        }

        document.addEventListener('keypress', onKeyPressed);

        return () => document.removeEventListener('keypress', onKeyPressed);
    }, [chars, content, startTime, startTest, endTime]);

    useEffect(() => {
        if (!chars.find(char => !char.complete) && !endTime) endTest();
    }, [content.length, chars, endTime, endTest])

    return (
        <section className={`typingArea`}>
            {chars.map((char, index) => (
                <Letter key={index} letter={char.char} status={char.complete ? letterStatuses.complete : letterStatuses.incomplete} />
            ))}
        </section>
    )
}

export default TypingArea;
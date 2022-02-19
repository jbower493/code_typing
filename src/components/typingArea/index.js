import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
    const [lettersCompleted, setLettersCompleted] = useState(0);

    const caseSensitivity = useSelector(state => state.settings.caseSensitivity);

    useEffect(() => {
        const onKeyPressed = e => {
            if (!startTime) startTest();

            // handle the key press

            // mark the letter as completed if they type the correct letter
            const typedLetter = caseSensitivity ? e.key : e.key.toLowerCase();
            const targetLetter = caseSensitivity ? content[lettersCompleted] : content[lettersCompleted].toLowerCase();
            if (!endTime && typedLetter === targetLetter) setLettersCompleted(lettersCompleted + 1);
        }

        document.addEventListener('keypress', onKeyPressed);

        return () => document.removeEventListener('keypress', onKeyPressed);
    }, [lettersCompleted, content, startTime, startTest, endTime, caseSensitivity]);

    useEffect(() => {
        if (lettersCompleted === content.length && !endTime) endTest();
    }, [content.length, lettersCompleted, endTime, endTest])

    return (
        <section className={`typingArea`}>
            {content.split('').map((letter, index) => (
                <Letter key={index} letter={letter} status={index < lettersCompleted ? letterStatuses.complete : letterStatuses.incomplete} />
            ))}
        </section>
    )
}

export default TypingArea;
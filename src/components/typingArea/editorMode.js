import { useState, useEffect, useCallback } from 'react';
import './style.scss';
import Letter from '../letter';
import { letterStatuses } from '../../utils/enums';

const TypingArea = ({
    content,
    startTime,
    startTimer,
    stopTimer
}) => {

    const prepareContent = content => {
        return content
            .split('')
            .map(char => ({
                char,
                complete: false
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

    const getNextChar = useCallback(() => chars.find((char) => !char.complete), [chars]);

    useEffect(() => {
        const onKeyDown = e => {
            if (!startTime) startTimer();

            // handle the key press

            // mark the letter as completed if they type the correct letter
            const typedLetter = e.key;
            const targetLetter = getNextChar();
            if (typedLetter === targetLetter.char) onCharSuccess(chars.indexOf(targetLetter));
        }

        document.addEventListener('keydown', onKeyDown);

        return () => document.removeEventListener('keydown', onKeyDown);
    }, [chars, content, startTime, startTimer, getNextChar]);

    useEffect(() => {
        if (!getNextChar()) stopTimer();
    }, [chars, stopTimer, getNextChar])

    return (
        <>
            <section className={`typingArea`}>
                {chars.map((char, index) => (
                    <Letter
                        key={index}
                        letter={char.char}
                        status={char.complete ? letterStatuses.complete : letterStatuses.incomplete}
                    />
                ))}
            </section>

            {getNextChar() ? <div>{getNextChar()?.char}</div> : ''}
        </>
    )
}

export default TypingArea;
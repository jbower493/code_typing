import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';
import Letter from '../letter';
import Cursor from '../cursor';
import NextChar from '../nextChar';
import { addError } from '../typingArea/typingSlice';
import { encoding } from '../../App';
import { letterStatuses } from '../../utils/enums';
import { getNextCharDisplay, getDisplayChar } from '../../utils/functions';

const TypingArea = ({
    content,
    startTime,
    startTimer,
    stopTimer
}) => {

    const prepareContent = content => {
        const newContent = content.split('');

        const extractEncoded = () => {
            const encodeStartIndex = newContent.findIndex((el, index) => el === encoding.START[0] && newContent[index + 1] === encoding.START[1] && newContent[index + 2] === encoding.START[2]);
            const encodeEndIndexFirstBracket = newContent.findIndex((el, index) => el === encoding.END[0] && newContent[index + 1] === encoding.END[1] && newContent[index + 2] === encoding.END[2]);
            const encodeEndIndex = encodeEndIndexFirstBracket >= 0 ? encodeEndIndexFirstBracket + 3 : null;

            if (encodeStartIndex && encodeEndIndex) {
                const encoded = newContent.slice(encodeStartIndex + 3, encodeEndIndex - 3);
                newContent.splice(encodeStartIndex, encodeEndIndex - encodeStartIndex, encoded);
            }
        };

        do {
            extractEncoded();
        } while (newContent.join('').includes(encoding.START));

        return newContent.map(char => ({
            char: Array.isArray(char) ? char.join('') : char,
            complete: false
        }))
    };

    const dispatch = useDispatch();
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
            const typedLetter = e.key;
            const targetLetter = getNextChar();
            // mark the letter as completed if they type the correct letter
            if (typedLetter === targetLetter.char) return onCharSuccess(chars.indexOf(targetLetter));
            // Do error animation if they type the wrong letter
            dispatch(addError({
                key: typedLetter
            }));
        }

        document.addEventListener('keydown', onKeyDown);

        return () => document.removeEventListener('keydown', onKeyDown);
    }, [chars, content, startTime, startTimer, getNextChar, dispatch]);

    useEffect(() => {
        if (!getNextChar()) stopTimer();
    }, [chars, stopTimer, getNextChar])

    return (
        <>
            {getNextChar()
                ? <NextChar nextChar={getNextCharDisplay(getNextChar().char)} />
                : ''
            }
            <section className={`typingArea`}>
                {!chars.find(char => char.complete)
                    ? <Cursor />
                    : ''
                }
                {chars.map((char, index) => (
                    <span key={index}>
                        <Letter
                            letter={char.char}
                            status={char.complete ? letterStatuses.complete : letterStatuses.incomplete}
                            displayedChar={getDisplayChar(char.char)}
                            // If its the previous char, and its a double, show the cursor between the double
                            showCursorBetweenDoubleChar={chars.indexOf(getNextChar()) === index + 1 && getDisplayChar(char.char).length === 2}
                        />
                        {chars.indexOf(getNextChar()) === index + 1 && getDisplayChar(char.char).length !== 2
                            ? <Cursor />
                            : ''
                        }
                    </span>
                ))}
            </section>
        </>
    )
}

export default TypingArea;
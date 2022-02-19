import { useState } from 'react';
import './style.scss';
import TypingArea from '../typingArea';
import Instructions from '../instructions';

const Exercise = ({
    content
}) => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const startTest = () => {
        setStartTime(Date.now());
    };

    const endTest = () => {
        setEndTime(Date.now());
    };

    return (
        <div className="exercise">
            <Instructions startTime={startTime} endTime={endTime} />
            {!endTime
                ? (
                    <TypingArea
                        content={content}
                        startTime={startTime}
                        startTest={startTest}
                        endTime={endTime}
                        endTest={endTest}
                    />
                )
                : ''
            }
        </div>
    );
}

export default Exercise;
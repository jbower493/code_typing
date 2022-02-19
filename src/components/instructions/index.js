import { useState, useEffect, useRef } from 'react';
import './style.scss';

const Instructions = ({
    startTime,
    endTime
}) => {

    const [currentTime, setCurrentTime] = useState(null);
    let timer = useRef();

    useEffect(() => {
        if (startTime && !endTime) {
            timer.current = setInterval(() => {
                setCurrentTime(Date.now());
            }, 100);
        }

        if (endTime && timer.current) {
            clearInterval(timer.current);
        }

        return () => {
            if (endTime && timer.current) clearInterval(timer.current);
        }
    }, [startTime, endTime])

    const getMessage = () => {
        if (!startTime) return 'Start typing to begin the test...';
        if (startTime && !endTime) return ((currentTime ? currentTime - startTime : 0) / 1000).toFixed(1);
        return <h2 className={`instructions__finalTime`}>Time: {((endTime - startTime) / 1000).toFixed(1)}s</h2>
    };

    return (
        <section className={`instructions`}>
            {getMessage()}
        </section>
    )
}

export default Instructions;
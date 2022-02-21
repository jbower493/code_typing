import { useState, useEffect, useRef } from 'react';

const useTimer = () => {
    const [currentTime, setCurrentTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    let timer = useRef();

    const startTimer = () => {
        setStartTime(Date.now());
    };

    const stopTimer = () => {
        setEndTime(Date.now());
    };

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

    return [currentTime, startTime, startTimer, endTime, stopTimer];
};

export default useTimer;
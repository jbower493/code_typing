import { useState, useEffect, useRef, useCallback } from 'react';

const useTimer = () => {
    const [currentTime, setCurrentTime] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    let timer = useRef();

    const startTimer = useCallback(() => {
        setStartTime(Date.now());
    }, []);

    const stopTimer = useCallback(() => {
        setEndTime(Date.now());
    }, []);

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

    return [
        // hasStarted
        !!startTime,
        // hasFinished
        !!endTime,
        // timePassed
        ((currentTime ? currentTime - startTime : 0) / 1000).toFixed(1),
        // finalTime
        endTime ? ((endTime - startTime) / 1000).toFixed(1) : false,
        // startTimer
        startTimer,
        // stopTimer
        stopTimer
    ];
};

export default useTimer;
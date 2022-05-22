import { useState, useCallback } from 'react';

const useTimer = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const startTimer = useCallback(() => {
        setStartTime(Date.now());
    }, []);

    const stopTimer = useCallback(() => {
        setEndTime(Date.now());
    }, []);

    return [
        startTime,
        endTime,
        startTimer,
        stopTimer
    ];
};

export default useTimer;
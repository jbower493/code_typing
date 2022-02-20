import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../../appSlice';
import './style.scss';

const Instructions = ({
    startTime,
    endTime
}) => {

    const dispatch = useDispatch();

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
            {endTime ? <button type={`button`} onClick={() => dispatch(setView('home'))}>Go Back Home</button> : ''}
        </section>
    )
}

export default Instructions;
import { useState, useEffect, useRef } from 'react';
import './style.scss';

const Cursor = () => {
    const [hidden, setHidden] = useState(false);
    const timer = useRef();

    useEffect(() => {
        timer.current = setInterval(() => {
            setHidden(currentHidden => !currentHidden);
        }, 1000);

        return () => clearInterval(timer.current);
    }, []);

    return (
        <small className={`cursor${hidden ? ' cursor--hidden' : ''}`}></small>
    );
};

export default Cursor;
import { useSelector } from 'react-redux';
import './style.scss';
import TypingArea from '../typingArea';
import Instructions from '../instructions';
import useTimer from '../../hooks/useTimer';

const Exercise = ({
    content
}) => {

    const onlyLowercase = useSelector(state => state.settings.onlyLowercase);

    const [hasStarted, hasFinished, timePassed, finalTime, startTimer, stopTimer] = useTimer();

    return (
        <div className="exercise">
            <Instructions hasStarted={hasStarted} hasFinished={hasFinished} timePassed={timePassed} finalTime={finalTime} />
            {!hasFinished
                ? (
                    <TypingArea
                        content={onlyLowercase ? content.toLowerCase() : content}
                        hasStarted={hasStarted}
                        startTimer={startTimer}
                        stopTimer={stopTimer}
                    />
                )
                : ''
            }
        </div>
    );
}

export default Exercise;
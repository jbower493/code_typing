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
                        // content={onlyLowercase ? content.toLowerCase() : content}
                        displayContent={"const arrowFunc = () => {console.log('Its es6');return true;};"}
                        content={"const arrowFunc = (`rightArrow` => {`enter`console.log('Its es6`rightArrow``rightArrow`;`enter`return true;"}
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

const arrowFunc = () => {
    console.log('Its es6');
    return true;
}
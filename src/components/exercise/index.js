import { useSelector } from 'react-redux';
import './style.scss';
import TypingArea from '../typingArea';
import Instructions from '../instructions';
import useTimer from '../../hooks/useTimer';

const Exercise = ({
    content
}) => {

    const onlyLowercase = useSelector(state => state.settings.onlyLowercase);

    const [currentTime, startTime, startTimer, endTime, stopTimer] = useTimer();

    return (
        <div className="exercise">
            <Instructions startTime={startTime} endTime={endTime} currentTime={currentTime} />
            {!endTime
                ? (
                    <TypingArea
                        content={onlyLowercase ? content.toLowerCase() : content}
                        startTime={startTime}
                        startTest={startTimer}
                        endTime={endTime}
                        endTest={stopTimer}
                    />
                )
                : ''
            }
        </div>
    );
}

export default Exercise;
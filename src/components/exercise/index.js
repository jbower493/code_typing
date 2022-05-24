import { useSelector } from 'react-redux';
import './style.scss';
import TypingArea from '../typingArea';
import Instructions from '../instructions';
import useTimer from '../../hooks/useTimer';

const Exercise = ({
    content
}) => {

    const [startTime, endTime, startTimer, stopTimer] = useTimer();
    const onlyLowercase = useSelector(state => state.settings.onlyLowercase);

    const isEditorMode = false;

    return (
        <div className="exercise">
            <Instructions
                startTime={startTime}
                endTime={endTime}
            />
            {!endTime
                ? (
                    <TypingArea
                        content={!isEditorMode && onlyLowercase ? content.toLowerCase() : content}
                        startTime={startTime}
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
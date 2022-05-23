import { useSelector } from 'react-redux';
import './style.scss';
import TypingArea from '../typingArea/editorMode';
import Instructions from '../instructions';
import useTimer from '../../hooks/useTimer';

const Exercise = ({
    content
}) => {

    const onlyLowercase = useSelector(state => state.settings.onlyLowercase);

    const [startTime, endTime, startTimer, stopTimer] = useTimer();

    return (
        <div className="exercise">
            <Instructions
                startTime={startTime}
                endTime={endTime}
            />
            {!endTime
                ? (
                    <TypingArea
                        // content={onlyLowercase ? content.toLowerCase() : content}
                        // this is an arrow func but without the indentation inside the curly braces
                        // content={'const arrow = () => {\nconsole.log("hey");\n};'}
                        content={`const (${encoding.START}ArrowRight${encoding.END} => (${encoding.START}ArrowRight${encoding.END} => {${encoding.START}ArrowRight${encoding.END};`}
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

export const encoding = {
    START: '{#{',
    END: '}#}'
};
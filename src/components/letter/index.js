import './letter.scss';
import Cursor from '../cursor';
import { letterStatuses } from '../../utils/enums';

const Letter = ({
    letter,
    status,
    displayedChar,
    showCursorBetweenDoubleChar
}) => {

    // if (letter === '\n') return (
    //     <div>
    //         {renderCursor()}
    //         {letter}
    //         <br/>
    //     </div>
    // );


    return showCursorBetweenDoubleChar
        ? (
            <>
                <span className={`letter${status === letterStatuses.complete ? ` letter--${letterStatuses.complete}` : ''}`}>
                    {displayedChar[0]}
                    <Cursor />
                    {displayedChar[1]}
                </span>
            </>
        )
        : (
            <>
                <span className={`letter${status === letterStatuses.complete ? ` letter--${letterStatuses.complete}` : ''}`}>
                    {displayedChar}
                </span>
            </>
        )
}

export default Letter;
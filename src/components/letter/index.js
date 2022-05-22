import './letter.scss';
import { letterStatuses } from '../../utils/enums';
import { getDisplayChar } from '../../utils/functions';

const Letter = ({
    letter,
    status
}) => {

    if (letter === '\n') return <div>{letter}<br/></div>

    return (
        <span className={`letter${status === letterStatuses.complete ? ` letter--${letterStatuses.complete}` : ''}`}>
            {getDisplayChar(letter)}
        </span>
    )
}

export default Letter;
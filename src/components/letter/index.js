import './letter.scss';
import { letterStatuses } from '../../utils/enums';
import { transformChar } from '../../utils/functions';

const Letter = ({
    letter,
    code,
    status
}) => {

    if (letter === '\n') return <div>{letter}<br/></div>

    return (
        <span className={`letter${status === letterStatuses.complete ? ` letter--${letterStatuses.complete}` : ''}`}>
            {letter}
        </span>
    )
}

export default Letter;
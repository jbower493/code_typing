import './letter.scss';
import { letterStatuses } from '../../utlis/enums';

const Letter = ({
    letter,
    status
}) => {
    return (
        <span className={`letter${status === letterStatuses.complete ? ` letter--${letterStatuses.complete}` : ''}`}>
            {letter}
        </span>
    )
}

export default Letter;
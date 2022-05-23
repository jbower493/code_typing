import { useSelector } from "react-redux";

const NextChar = ({ nextChar }) => {

    const errors = useSelector(state => state.typing.errors);

    return (
        <div className={`nextChar`}>
            <div className={`nextChar__key`}>{nextChar}</div>
        </div>
    );
};

export default NextChar;
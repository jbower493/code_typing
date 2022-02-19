const Switch = ({
    value,
    name,
    label
}) => {

    return (
        <>
            <label for={name}>{label}</label>
            <input id={name} name={name} type="checkbox" value={value} />
        </>
    );
};

export default Switch;
const Switch = ({
    value,
    name,
    label,
    toggle
}) => {

    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type="checkbox" checked={value} onChange={toggle} />
        </>
    );
};

export default Switch;
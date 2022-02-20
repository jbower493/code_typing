import './style.scss';

const Switch = ({
    value,
    name,
    label,
    toggle
}) => {

    return (
        <div className={`switch${value ? ' switch--on' : ''}`}>
            <label
                tabIndex={0}
                onKeyPress={e => {
                    if (e.key === ' ') toggle();
                }}
                htmlFor={name}
            >
                {label}
                <span></span>
            </label>
            <input id={name} name={name} type="checkbox" checked={value} onChange={toggle} hidden />
        </div>
    );
};

export default Switch;
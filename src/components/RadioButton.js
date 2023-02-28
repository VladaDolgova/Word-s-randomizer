const RadioButton = ({ type, id, name, handler, value, htmlFor, label, checked }) => {

    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type={type} name={name} value={value} id={id} onChange={handler} defaultChecked={checked} />
            <label className="form-check-label" htmlFor={htmlFor}>
                {label}
            </label>
        </div>
    );
}

export default RadioButton;
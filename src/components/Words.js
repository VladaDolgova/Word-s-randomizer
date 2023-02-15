import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RadioButton from './RadioButton';

const Words = () => {

    const navigate = useNavigate();
    const [number, setNumber] = useState(1);
    const [mode, setMode] = useState(1);
    const [translation, setTraslation] = useState(false);

    const modeLabel = [{ mode: 1, label: "Eng-Rus" }, { mode: 2, label: "Rus-Eng" }, { mode: 3, label: "Random" }];

    return (
        <div className="d-flex flex-column flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
            <div className="row">
                <h1 style={{ textAlign: 'center' }}>Hello!
                    <br />
                    Today we gonna repeat some words!
                </h1>
            </div>
            <div className="row">
                <h2 style={{ textAlign: 'center' }}>Please enter number of words that you want to check</h2>
            </div>
            <div className="input-group mt-3 mb-1" style={{ width: '300px' }}>
                <input type="number" className="form-control" placeholder="Type the  number" aria-label="Type the  number" aria-describedby="button-addon2" onChange={(e) => setNumber(e.target.value)} max={15}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => navigate("/table", { state: { number, translation, mode } })}>Let's go!</button>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={() => setTraslation(!translation)} />
                <label className="form-check-label" htmlFor="inlineCheckbox1">Without translation</label>
            </div>
            {modeLabel.map(({ mode, label }) => (
                <RadioButton
                    key={mode}
                    type="radio"
                    name="flexRadioDefault"
                    id={"flexRadioDefault" + mode}
                    handler={() => setMode(mode)}
                    htmlFor={"flexRadioDefault" + mode}
                    label={label}
                    checked={mode === 1 ? true : false}
                />
            ))}
        </div>
    );
}

export default Words;
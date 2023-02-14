import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Words = () => {

    const navigate = useNavigate();
    const [number, setNumber] = useState(1);
    const [translation, setTraslation] = useState(false);

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
                <input type="text" className="form-control" placeholder="Type the  number" aria-label="Type the  number" aria-describedby="button-addon2" onChange={(e) => setNumber(e.target.value)} />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => navigate("/table", { state: { count: number, translation } })}>Let's go!</button>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={() => setTraslation(!translation)} />
                <label className="form-check-label" htmlFor="inlineCheckbox1">Without translation</label>
            </div>
        </div>
    );
}

export default Words;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RadioButton from './RadioButton';
import "../styles/cover.css";

const Words = () => {

    const navigate = useNavigate();
    const [number, setNumber] = useState(1);
    const [mode, setMode] = useState(1);
    const [translation, setTraslation] = useState(false);

    const modeLabel = [{ mode: 1, label: "Eng-Rus" }, { mode: 2, label: "Rus-Eng" }, { mode: 3, label: "Random" }];

    return (
        // <div className="d-flex flex-column flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
        <div className="text-center text-white">
            <div className="d-flex w-100 h-100 p-3 mx-auto flex-column flex-wrap position-absolute  bg-dark">
                <header className="mb-auto mx-5">
                    <div>
                        <h3 className="float-md-start mb-0 mr-5">WORDUAGE</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                            <a className="nav-link active" href="#">Dictionary</a>
                            <a className="nav-link" href="#">Contact</a>
                        </nav>
                    </div>
                </header>
                <main className="px-3 mb-auto">
                    <div className="row">
                        <h1 style={{ textAlign: 'center' }}>Hello!
                            <br />
                            Today we gonna repeat some words!
                        </h1>
                    </div>
                    <div className="row">
                        <h2 style={{ textAlign: 'center' }}>Please enter number of words that you want to check</h2>
                    </div>
                    <div>
                        <div className="input-group mt-3 mb-2  mx-auto" style={{ width: '300px' }}>
                            <input type="number" className="form-control" placeholder="Type the number" aria-label="Type the number" aria-describedby="button-addon2" onChange={(e) => setNumber(e.target.value)} max={15} />
                            <button className="btn btn-dark" type="button" id="button-addon2" onClick={() => navigate("/table", { state: { number, translation, mode } })}>Let's go!</button>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onChange={() => setTraslation(!translation)} />
                            <label className="form-check-label" htmlFor="inlineCheckbox1">Without translation</label>
                        </div>
                    </div>
                    <div className='form-check form-check-inline mt-2'>
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
                </main>
            </div>
        </div>
    );
}

export default Words;
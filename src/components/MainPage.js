import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/cover.css";
import ToggleButton from './ToggleButton';

const MainPage = () => {
    const navigate = useNavigate();
    const [isOn, setIsOn] = useState(false);
  
    const handleToggle = (newIsOn) => {
      setIsOn(newIsOn);
    };
  
    return (
      <div className="text-center text-white">
        <div className="d-flex w-100 h-100 p-3 mx-auto flex-column flex-wrap position-absolute  bg-dark">
          <header className="mb-auto mx-5">
            <div>
              <h3 className="float-md-start mb-0 mr-5">WORDUAGE</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="randomwords#/words">
                  Dictionary
                </a>
                <a className="nav-link" href="#">
                  Contact
                </a>
              </nav>
            </div>
            <div>
              <ToggleButton
                onText="Dark"
                offText="Light"
                onToggle={handleToggle}
                theme={isOn ? 'dark' : 'light'}
              />
            </div>
          </header>
          <main className="px-3 mb-auto">
            <h1>Hello! Choose mode.</h1>
            <p className="cover-container mx-auto lead">
              Here you can choose one of the application mode. <br />
              The first is dictionary, here you can learn new words using
              categories, levels and tables. <br />
              The second is testing mode, here you can check your knowledge of
              English words. <br />
              Thanks for using this app.
            </p>
            <button
              type="button"
              className="btn btn-lg fw-bold border-white btn-light mx-5"
              style={{ minWidth: '10em' }}
              onClick={() => navigate('/words')}
            >
              Dictionary mode
            </button>
            <button
              type="button"
              className="btn btn-lg fw-bold border-white btn-light mx-5"
              style={{ minWidth: '10em' }}
            >
              Testing mode
            </button>
          </main>
        </div>
      </div>
    );
  };
  
  export default MainPage;
  
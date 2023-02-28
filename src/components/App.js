// import logo from './logo.svg';
// import './App.css';
import Words from './Words';
import Table from './Table';
import MainPage from './MainPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/words" element={<Words />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
}

export default App;

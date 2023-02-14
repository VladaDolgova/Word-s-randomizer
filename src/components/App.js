// import logo from './logo.svg';
// import './App.css';
import Words from './Words';
import Table from './Table';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Words />} />
      <Route path="/table" element={<Table />} />
    </Routes>
  );
}

export default App;

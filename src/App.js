import './App.css';
import AppForm from './pages/Home';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#020f18";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextChef" mode={mode} changeMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container'>
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/contact" element={<Contact mode={mode} />} />
            <Route path="/textChef" element={<AppForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route path="/home" element={<AppForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

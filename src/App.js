import './App.css';
import AppForm from './components/AppForm';
import Navbar from './components/Navbar';
import React, {useState} from 'react'

function App() {
  const [Mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#020f18";
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Navbar title="Text Utils" mode = {Mode} changeMode = {toggleMode} />
    <div className='container'>
    <AppForm heading="Enter the text to analyze below" mode = {Mode}/>
    </div>
    </>
  );
}

export default App;

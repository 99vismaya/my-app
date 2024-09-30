import './App.css';
import React, { useState } from "react";
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import Alert from './components/Alert';
import Calculation from './components/Calculation';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
}
  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = "grey";
        showAlert("Dark mode has been enable", "success")
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enable", "success")
    }
};

const showAlert = (message, type) => {
  setAlert({
      msg: message,
      type: type
  })
  setTimeout(()=>{
  setAlert("")
  },1500)
}

  const[mode, setMode] = useState('light')
  
  const [alert, setAlert] = useState(null)
  return (
    <Router>
    <>
    <Navbar title = "Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <Routes>
    <Route path="/" element= {<Textform mode = {mode} showAlert={showAlert}/>}>
    </Route>
    <Route path= "/Calculation" element= {<Calculation mode = {mode}/>}>
    </Route>
    </Routes>
    </>
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeaderClassComponent from './ClassComponent/HeaderClassComponent';
import LifeCycleOfCC from './ClassComponent/LifeCycleOfCC';
import StatefullVariablePropsAndEvents from './ClassComponent/StatefullVariablePropsAndEvents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <HeaderClassComponent></HeaderClassComponent> */}
    {/* <LifeCycleOfCC /> */}
    {/* <StatefullVariablePropsAndEvents></StatefullVariablePropsAndEvents> */}
    
    {/* <StatefullVariablePropsAndEvents productName="Poco" productPrice="21000" /> */}
    
    <App />

    {/* <div id="div1" style="" /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

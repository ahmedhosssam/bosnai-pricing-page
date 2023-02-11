import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Styles
import './Styles/Header.css';
import './Styles/Plans.css';
import './Styles/PlanGrid.css';
import './Styles/AddOnes.css';
import './Styles/FAQ.css';

// Components
import Header from './Components/Header/Header';
import Plans from './Components/Plans/Plans';
import AddOnes from './Components/AddOnes/AddOnes';
import Faq from './Components/FAQ/FAQ.js';
import Feedback from './Components/Feedback/Feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Plans />
    <AddOnes />
    <Faq />
    <Feedback />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

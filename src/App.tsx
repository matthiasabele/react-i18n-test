import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
// Styles
import './App.css';
// Components
import HomePage from './HomePage';
import Settings from './Settings';

function App() {
  const [ t, i18n ] = useTranslation();

  return (

    <Router>
      <div className="App">
       <nav className="App-header">
         <ul>
           <li>
             <Link to="/">{ t('IDS_MENU_HOME') }</Link>
           </li>
           <li>
             <Link to="/settings">{ t('IDS_MENU_SETTINGS') }</Link>
           </li>
         </ul>
       </nav>

       <Route path="/" exact component={HomePage} />
       <Route path="/settings" exact component={Settings} />

      </div>
    </Router>

  );
}

export default App;

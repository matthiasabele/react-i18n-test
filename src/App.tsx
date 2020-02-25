import React, {Suspense} from 'react';
import './App.css';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">

      <Suspense fallback="loading">
        <HomePage />
      </Suspense>


      <h1>I'm not internationalized</h1>

    </div>
  );
}

export default App;

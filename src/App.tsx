import React, {Suspense} from 'react';
import './App.css';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">

      <Suspense fallback="loading">
        <HomePage />
      </Suspense>

    </div>
  );
}

export default App;

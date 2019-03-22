import React from 'react';
import Navbar from './components/Navbar';
import IdeasContainer from './components/IdeasContainer';
import './styling/app.css';

const App = () => {
    return (
      <div className="App">
        <Navbar/>
        <IdeasContainer/>
      </div>
    );
}

export default App;

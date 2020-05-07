import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/' component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {HeaderComp} from "./components/HeaderComp";
import {MainComp} from "./components/MainComp";
import {CartPageComp} from "./components/CartPageComp";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

function App() {
    let mainComp;

    return (
    <Router>
        <div className="App">
          <div className='home-page'>
            <HeaderComp />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<MainComp/>} />
                <Route path="/cart" element={<CartPageComp/>} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;

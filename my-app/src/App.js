import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import { useAnimations } from './animations';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
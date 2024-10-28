import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Blog from './components/Blog';
import Porto from './components/Porto';
import { useAnimations } from './animations';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/porto" element={<Porto />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;
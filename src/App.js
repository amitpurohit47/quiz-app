import React from 'react';
import './App.css';
import Quiz from './components/QuizMain';
import { Routes,Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='quiz' element={<Quiz />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
